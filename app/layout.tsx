import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://miguelcollaco.com"),
  title: "Miguel Collaço | Software Engineer",
  description:
    "Computer Science and Engineering student and Projects Director at In-Nova",
  openGraph: {
    title: "Miguel Collaço | Software Engineer",
    description:
      "CSE student and Projects Director at In-Nova",
    url: "https://miguelcollaco.com",
    siteName: "Miguel Collaço",
    images: ["/opengraph-image"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miguel Collaço | Software Engineer",
    description:
      "CSE student and Projects Director at In-Nova",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
