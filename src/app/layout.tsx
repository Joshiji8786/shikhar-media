import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shikhar Media | Kumaon's Hospitality Marketing Studio",
  description: "Peak performance marketing for Kumaon's finest hospitality brands. Strategy, creativity, and measurable growth — rooted in the hills.",
  keywords: "Kumaon marketing, hospitality marketing Uttarakhand, hotel marketing Nainital, resort marketing Kumaon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
