import { DefaultSeoProps } from "next-seo";

export const defaultSeoConfig: DefaultSeoProps = {
  titleTemplate: "%s | GT Media",
  defaultTitle: "GT Media — Creative Studio",
  description:
    "GT Media is an elite creative agency crafting cinematic digital experiences.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gt-media.com",
    siteName: "GT Media",
    images: [
      {
        url: "https://www.gt-media.com/api/og?title=GT%20Media",
        width: 1200,
        height: 630,
        alt: "GT Media"
      }
    ]
  },
  twitter: {
    handle: "@gtmedia",
    site: "@gtmedia",
    cardType: "summary_large_image"
  },
  additionalMetaTags: [
    {
      name: "theme-color",
      content: "#050608"
    }
  ]
};
