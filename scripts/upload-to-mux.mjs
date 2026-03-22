import { readFileSync, createReadStream, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import Mux from '@mux/mux-node'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Load .env manually
const envPath = join(__dirname, '..', '.env')
const envContent = readFileSync(envPath, 'utf-8')
for (const line of envContent.split('\n')) {
  const [key, ...rest] = line.split('=')
  if (key && rest.length) process.env[key.trim()] = rest.join('=').trim()
}

const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID,
  tokenSecret: process.env.MUX_TOKEN_SECRET,
})

const videosDir = join(__dirname, '..', 'public', 'videos')
const files = readdirSync(videosDir).filter(f => f.endsWith('.mp4'))

console.log(`Uploading ${files.length} videos to Mux...\n`)

const results = {}

for (const filename of files) {
  const filePath = join(videosDir, filename)
  console.log(`Uploading: ${filename}`)

  try {
    // Create a direct upload
    const upload = await mux.video.uploads.create({
      new_asset_settings: {
        playback_policy: ['public'],
        mp4_support: 'capped-1080p',
      },
      cors_origin: '*',
    })

    // Upload the file to the signed URL
    const fileData = readFileSync(filePath)
    const response = await fetch(upload.url, {
      method: 'PUT',
      body: fileData,
      headers: { 'Content-Type': 'video/mp4' },
    })

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.status} ${response.statusText}`)
    }

    // Poll until asset is ready
    console.log(`  Waiting for asset to be ready...`)
    let asset = null
    let attempts = 0
    while (attempts < 60) {
      await new Promise(r => setTimeout(r, 5000))
      const uploadStatus = await mux.video.uploads.retrieve(upload.id)
      if (uploadStatus.asset_id) {
        asset = await mux.video.assets.retrieve(uploadStatus.asset_id)
        if (asset.status === 'ready') break
        if (asset.status === 'errored') throw new Error(`Asset errored: ${asset.errors?.messages?.join(', ')}`)
      }
      attempts++
      process.stdout.write('.')
    }

    if (!asset || asset.status !== 'ready') {
      throw new Error('Asset did not become ready in time')
    }

    const playbackId = asset.playback_ids?.[0]?.id
    results[filename] = playbackId
    console.log(`\n  Playback ID: ${playbackId}`)
    console.log(`  URL: https://stream.mux.com/${playbackId}/capped-1080p.mp4\n`)
  } catch (err) {
    console.error(`  ERROR: ${err.message}\n`)
    results[filename] = null
  }
}

console.log('\n=== RESULTS (copy these into portfolio.json) ===')
for (const [filename, playbackId] of Object.entries(results)) {
  const name = filename.replace('.mp4', '')
  if (playbackId) {
    console.log(`${name}: https://stream.mux.com/${playbackId}/capped-1080p.mp4`)
  } else {
    console.log(`${name}: FAILED`)
  }
}
