import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miguel Collaço",
  authors: { name: "Miguel Collaço" },
  description: "CSE student based in Portugal",
  keywords: ["miguel", "collaco"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} scroll-smooth text-text overscroll-none`}>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
