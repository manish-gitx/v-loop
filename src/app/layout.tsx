import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Montserrat is very similar to Proxima Nova and freely available
const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"], // Regular, Semibold, Bold, Black
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "V-LOOP",
  description: "Transform your vision into stunning videos with V-Loop's professional video editing services. We specialize in creating compelling content that engages and converts.",
  keywords: "video editing, professional video services, video production, content creation, V-Loop",
  icons: {
    icon: [
      { url: "/V-Loop White.png", type: "image/png" },
      { url: "/V-Loop White.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/V-Loop White.png" }],
    shortcut: ["/V-Loop White.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans`}>{children}</body>
    </html>
  );
}
