import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Comfortaa, Geist_Mono } from "next/font/google"
import "./globals.css"

// Use Comfortaa as the global sans font, keeping the same CSS variable name
const comfortaa = Comfortaa({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pompex.si"),
  applicationName: "Pompex",
  title: {
    default: "Pompex — IT rešitve na enem mestu",
    template: "%s | Pompex",
  },
  description:
    "Računalniški servis, programiranje, spletne strani in aplikacije. IT rešitve na enem mestu.",
  keywords: [
    "računalniški servis",
    "programiranje",
    "spletne strani",
    "aplikacije",
    "IT rešitve",
    "Kranj",
    "Slovenija",
    "Pompex",
  ],
  authors: [{ name: "Pompex", url: "https://pompex.si" }],
  creator: "Pompex",
  publisher: "Pompex",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://pompex.si/",
  },
  openGraph: {
    type: "website",
    url: "https://pompex.si/",
    title: "Pompex — IT rešitve na enem mestu",
    description:
      "Računalniški servis, programiranje, spletne strani in aplikacije.",
    siteName: "Pompex",
    locale: "sl_SI",
    images: [
      {
        url: "/mydesk.png",
        width: 1200,
        height: 630,
        alt: "Pompex workspace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pompex — IT rešitve na enem mestu",
    description:
      "Računalniški servis, programiranje, spletne strani in aplikacije.",
    images: ["/mydesk.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  referrer: "strict-origin-when-cross-origin",
  formatDetection: { telephone: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sl">
      <body className={`${comfortaa.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Script id="ld-json" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: "Pompex",
                url: "https://pompex.si",
                logo: "https://pompex.si/logo.png",
              },
              {
                "@type": "WebSite",
                url: "https://pompex.si",
                name: "Pompex",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://pompex.si/?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
            ],
          })}
        </Script>
      </body>
    </html>
  )
}

// Add viewport export (Next.js v14+)
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#87CEEB" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};
