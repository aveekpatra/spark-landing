import type { Metadata } from "next";
import { Comfortaa, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://sparkservice.si"),
  applicationName: "Spark Service",
  title: {
    default: "Spark Service — IT rešitve na enem mestu",
    template: "%s | Spark Service",
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
    "Spark Service",
  ],
  authors: [{ name: "Spark Service", url: "https://sparkservice.si" }],
  creator: "Spark Service",
  publisher: "Spark Service",
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
  openGraph: {
    type: "website",
    url: "https://sparkservice.si/",
    title: "Spark Service — IT rešitve na enem mestu",
    description:
      "Računalniški servis, programiranje, spletne strani in aplikacije.",
    siteName: "Spark Service",
    locale: "sl_SI",
    images: [
      {
        url: "/mydesk.png",
        width: 1200,
        height: 630,
        alt: "Spark Service workspace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spark Service — IT rešitve na enem mestu",
    description:
      "Računalniški servis, programiranje, spletne strani in aplikacije.",
    images: ["/mydesk.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.svg",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#87CEEB" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  referrer: "strict-origin-when-cross-origin",
  formatDetection: { telephone: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${comfortaa.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
