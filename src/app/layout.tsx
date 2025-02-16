import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Was2Eat - Scan, Ask AI, Eat Smarter",
  description:
    "Was2Eat helps you make smarter, healthier food choices with AI-powered product insights.",
  icons: {
    icon: "/images/logo-transparent-without-text.png",
  },
  openGraph: {
    title: "Was2Eat - Scan, Ask AI, Eat Smarter",
    description: "AI-powered product scanner for healthier eating.",
    url: "https://was2eat.com",
    type: "website",
    images: [
      {
        url: "https://was2eat.com/images/logo-transparent-with-text.png", // Replace with the actual image URL
        width: 1200,
        height: 630,
        alt: "Was2Eat App Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@was2eat",
    title: "Was2Eat - Scan, Ask AI, Eat Smarter",
    description: "AI-powered product scanner for healthier eating.",
    images: ["https://was2eat.com/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
