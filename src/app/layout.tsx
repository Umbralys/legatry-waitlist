import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Legatry - Legacy Management Platform | Join the Waitlist",
  description: "Legatry is transforming how Black families preserve, organize, and transfer their complete legacy. Join our waitlist to be the first to know when we launch.",
  keywords: ["legacy management", "family legacy", "estate planning", "document management", "wealth transfer", "Black families", "inheritance planning"],
  authors: [{ name: "Legatry Team" }],
  creator: "Legatry",
  publisher: "Legatry",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: "Legatry - Legacy Management Platform",
    description: "Join the waitlist for the platform transforming how Black families preserve and transfer their complete legacy.",
    type: "website",
    locale: "en_US",
    siteName: "Legatry",
    url: "https://legatry.com",
    images: [
      {
        url: "/og-image.png", // 1200x630 pixels recommended
        width: 1200,
        height: 630,
        alt: "Legatry - Your Family's Legacy Protected Forever",
      },
      {
        url: "/og-image-square.png", // 1200x1200 pixels for square format
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
    creator: "@legatry", // Update with your actual Twitter handle
    images: ["/twitter-image.png"], // 1200x630 pixels recommended
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://legatry.com'),
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
