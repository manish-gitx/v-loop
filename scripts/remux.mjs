import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const TOKEN_ID = process.env.MUX_TOKEN_ID;
const TOKEN_SECRET = process.env.MUX_TOKEN_SECRET;

if (!TOKEN_ID || !TOKEN_SECRET) {
  console.error('Missing MUX_TOKEN_ID or MUX_TOKEN_SECRET');
  process.exit(1);
}

const auth = Buffer.from(`${TOKEN_ID}:${TOKEN_SECRET}`).toString('base64');
const headers = {
  Authorization: `Basic ${auth}`,
  'Content-Type': 'application/json',
};

async function muxGet(path) {
  const res = await fetch(`https://api.mux.com${path}`, { headers });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status} ${await res.text()}`);
  return res.json();
}

async function muxDelete(path) {
  const res = await fetch(`https://api.mux.com${path}`, { method: 'DELETE', headers });
  if (!res.ok && res.status !== 404) throw new Error(`DELETE ${path} failed: ${res.status} ${await res.text()}`);
  console.log(`  Deleted ${path}`);
}

async function muxPost(path, body) {
  const res = await fetch(`https://api.mux.com${path}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} failed: ${res.status} ${await res.text()}`);
  return res.json();
}

async function waitForAsset(assetId) {
  while (true) {
    const { data } = await muxGet(`/video/v1/assets/${assetId}`);
    if (data.status === 'ready') return data;
    if (data.status === 'errored') throw new Error(`Asset ${assetId} errored`);
    console.log(`  Asset ${assetId} status: ${data.status}...`);
    await new Promise(r => setTimeout(r, 3000));
  }
}

async function uploadVideo(filePath) {
  console.log(`  Creating upload for ${path.basename(filePath)}...`);

  // Create a direct upload
  const { data: upload } = await muxPost('/video/v1/uploads', {
    new_asset_settings: { playback_policy: ['public'] },
    cors_origin: '*',
  });

  console.log(`  Uploading to Mux...`);
  const fileBuffer = readFileSync(filePath);

  const uploadRes = await fetch(upload.url, {
    method: 'PUT',
    body: fileBuffer,
    headers: { 'Content-Type': 'video/mp4' },
  });

  if (!uploadRes.ok) throw new Error(`Upload PUT failed: ${uploadRes.status}`);
  console.log(`  Upload complete, waiting for asset...`);

  // Poll until asset is attached to the upload
  let assetId;
  for (let i = 0; i < 30; i++) {
    const { data: up } = await muxGet(`/video/v1/uploads/${upload.id}`);
    if (up.asset_id) { assetId = up.asset_id; break; }
    await new Promise(r => setTimeout(r, 3000));
  }
  if (!assetId) throw new Error('Timed out waiting for asset_id on upload');

  const asset = await waitForAsset(assetId);
  const playbackId = asset.playback_ids[0].id;
  console.log(`  Ready! Playback ID: ${playbackId}`);
  return playbackId;
}

// Video filename → portfolio id mapping
const videoMap = [
  { file: 'diwali-festival.mp4', id: 1 },
  { file: 'ellipaya-karam.mp4', id: 2 },
  { file: 'madhuram-dosa.mp4', id: 3 },
  { file: 'influencer-content.mp4', id: 4 },
  { file: 'radha-krishna-silks.mp4', id: 5 },
  { file: 'bigbull-pub.mp4', id: 6 },
  { file: 'mexican-kitchen.mp4', id: 7 },
];

const videosDir = path.join(__dirname, '..', 'videos');
const portfolioPath = path.join(__dirname, '..', 'src', 'data', 'portfolio.json');

async function main() {
  // Step 1: Delete all existing assets
  console.log('\n=== Deleting all existing Mux assets ===');
  const { data: assets } = await muxGet('/video/v1/assets?limit=100');
  if (assets.length === 0) {
    console.log('  No existing assets found.');
  } else {
    for (const asset of assets) {
      await muxDelete(`/video/v1/assets/${asset.id}`);
    }
  }

  // Step 2: Upload videos and collect new playback IDs
  console.log('\n=== Uploading videos ===');
  const portfolio = JSON.parse(readFileSync(portfolioPath, 'utf-8'));

  for (const { file, id } of videoMap) {
    const filePath = path.join(videosDir, file);
    console.log(`\nUploading ${file} (project id ${id})...`);
    const playbackId = await uploadVideo(filePath);

    const project = portfolio.projects.find(p => p.id === id);
    if (!project) { console.warn(`  Warning: no project with id ${id}`); continue; }
    project.videoUrl = `https://stream.mux.com/${playbackId}.m3u8`;
    console.log(`  Updated project "${project.title}"`);
  }

  // Step 3: Write updated portfolio.json
  writeFileSync(portfolioPath, JSON.stringify(portfolio, null, 2) + '\n');
  console.log('\n=== portfolio.json updated ===');
  console.log(JSON.stringify(portfolio, null, 2));
}

main().catch(err => { console.error(err); process.exit(1); });
