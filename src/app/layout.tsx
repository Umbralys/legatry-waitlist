// In your src/app/layout.tsx file:

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEPARATE viewport export (not inside metadata)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

// Regular metadata export (without viewport)
export const metadata: Metadata = {
  title: "Legatry - Legacy Management Platform | Join the Waitlist",
  description: "Legatry is transforming how Black families preserve, organize, and transfer their complete legacy. Join our waitlist to be the first to know when we launch.",
  keywords: ["legacy management", "family legacy", "estate planning", "document management", "wealth transfer", "Black families", "inheritance planning"],
  authors: [{ name: "Legatry Team" }],
  creator: "Legatry",
  publisher: "Legatry",
  openGraph: {
    title: "Legatry - Legacy Management Platform",
    description: "Join the waitlist for the platform transforming how Black families preserve and transfer their complete legacy.",
    type: "website",
    locale: "en_US",
    siteName: "Legatry",
    url: "https://legatry.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Legatry - Your Family's Legacy Protected Forever",
      },
      {
        url: "/og-image-square.png",
        width: 1200,
        height: 1200,
        alt: "Legatry Legacy Management Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legatry - Legacy Management Platform",
    description: "Join our waitlist to be the first to experience the future of family legacy management.",
    creator: "@legatry",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://legatry.com'),

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
