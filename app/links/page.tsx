import type { Metadata } from "next";
import Links from "../_components/Links";

export const metadata: Metadata = {
  title: "Links | Miguel Collaço",
  description: "All my links in one place — portfolio, GitHub, LinkedIn, and more.",
  openGraph: {
    title: "Links | Miguel Collaço",
    description: "All my links in one place — portfolio, GitHub, LinkedIn, and more.",
    url: "https://miguelcollaco.com/links",
    siteName: "Miguel Collaço",
    images: ["/opengraph-image"],
    type: "website",
  },
};

export default function LinksPage() {
  return <Links />;
}
