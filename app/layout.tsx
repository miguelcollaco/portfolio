import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miguel Collaço",
  authors: { name: "Miguel Collaço" },
  description: "CSE student based in Portugal",
  keywords: ["miguel", "collaço", "freelancer", "nova"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
return (
    <html lang="en">
        <body className={`${inter.className} scroll-smooth text-text overscroll-none select-none bg-background`}>
            <Nav />
            {children}
            <Footer />
            <SpeedInsights />
            <Analytics />
        </body>
    </html>
)}
