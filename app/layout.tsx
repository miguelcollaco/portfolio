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
  applicationName: "Miguel Collaço",
  authors: [{ name: "Miguel Collaço", url: "https://miguelcollaco.com" }],
  creator: "Miguel Collaço",
  publisher: "Miguel Collaço",
  keywords: [
    "Miguel Collaço",
    "Software Engineer",
    "Computer Science and Engineering",
    "NOVA School of Science and Technology",
    "In-Nova",
    "Portugal",
    "Lisbon",
    "Next.js",
    "React",
    "TypeScript",
    "Cybersecurity",
    "Distributed Systems",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Miguel Collaço | Software Engineer",
    description: "CSE student and Projects Director at In-Nova",
    url: "https://miguelcollaco.com",
    siteName: "Miguel Collaço",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miguel Collaço | Software Engineer",
    description: "CSE student and Projects Director at In-Nova",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Miguel Collaço",
  url: "https://miguelcollaco.com",
  image: "https://miguelcollaco.com/opengraph-image",
  jobTitle: "Software Engineer",
  description:
    "Computer Science and Engineering student and CFO at In-Nova",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lisbon",
    addressCountry: "PT",
  },
  email: "mailto:miguel.l.collaco@gmail.com",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "NOVA School of Science and Technology",
    url: "https://www.fct.unl.pt",
  },
  worksFor: {
    "@type": "Organization",
    name: "In-Nova",
  },
  knowsAbout: [
    "Software Engineering",
    "Web Development",
    "Cybersecurity",
    "Distributed Systems",
    "React",
    "Next.js",
    "TypeScript",
    "Java",
  ],
  sameAs: [
    "https://github.com/miguelcollaco",
    "https://www.linkedin.com/in/miguelcollaco",
  ],
};

/**
 * Runs before first paint so light-mode visitors never see a flash of the
 * dark theme, and marks the document as JS-capable so CSS can safely hide
 * elements it intends to reveal on scroll.
 */
const bootstrapScript = `(function(){try{var d=document.documentElement;d.classList.add('js');if(localStorage.getItem('theme')==='light'){d.classList.remove('dark')}}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark light" />
        <script dangerouslySetInnerHTML={{ __html: bootstrapScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
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
