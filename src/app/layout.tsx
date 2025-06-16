import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "V-Loop | Professional Video Editing Agency",
  description: "Transform your vision into stunning videos with V-Loop's professional video editing services. We specialize in creating compelling content that engages and converts.",
  keywords: "video editing, professional video services, video production, content creation, V-Loop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
