import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { seo, site } from "@/lib/content";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: "Warm interior flooring inspiration for Carpet One of Livermore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
  alternates: {
    canonical: site.url,
  },
};

/** LocalBusiness JSON-LD — address left as TODO until provided */
function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    description: seo.description,
    url: site.url,
    telephone: "+1-925-238-3127",
    email: site.email,
    areaServed: {
      "@type": "City",
      name: "Livermore",
      addressRegion: "CA",
      addressCountry: "US",
    },
    // TODO: Add PostalAddress when street address is available
    // address: { "@type": "PostalAddress", streetAddress: "...", addressLocality: "Livermore", addressRegion: "CA", postalCode: "...", addressCountry: "US" },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-ink bg-bg">
        <LocalBusinessJsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--radius-sm)] focus:bg-clay focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
