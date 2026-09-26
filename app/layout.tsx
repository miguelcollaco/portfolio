import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { NAME, SITE_URL, EMAIL, GITHUB, LINKEDIN, TAGLINE, DESCRIPTION } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${NAME} | Software Engineer`,
  description: DESCRIPTION,
  applicationName: NAME,
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  publisher: NAME,
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
    title: `${NAME} | Software Engineer`,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${NAME} | Software Engineer`,
    description: DESCRIPTION,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  jobTitle: "Software Engineer",
  description: TAGLINE,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lisbon",
    addressCountry: "PT",
  },
  email: `mailto:${EMAIL}`,
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
  sameAs: [GITHUB, LINKEDIN],
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
        className={`${geistSans.variable} antialiased transition-colors duration-300`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
