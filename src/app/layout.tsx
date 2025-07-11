import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Kalam } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Was2Eat - Scan, Ask AI, Eat Smarter",
  description:
    "Was2Eat helps you make smarter, healthier food choices with AI-powered product insights.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Was2Eat - Scan, Ask AI, Eat Smarter",
    description: "AI-powered product scanner for healthier eating.",
    url: "https://was2eat.com",
    type: "website",
    images: [
      {
        url: "https://was2eat.com/images/logo.png",
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
    images: ["https://was2eat.com/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${kalam.variable}`}
      >
        <ThemeRegistry>
          {children} <SpeedInsights />
        </ThemeRegistry>
      </body>
    </html>
  );
}
