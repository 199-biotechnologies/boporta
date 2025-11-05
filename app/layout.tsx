import type { Metadata, Viewport } from "next";
import { Playfair_Display, Crimson_Text, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bolivarporta.com'),
  title: "Bo Porta | Miami Criminal Defense & Family Law Attorney | 1,550+ Cases",
  description: "Miami trial attorney with 29 years experience. Avvo 8.6 rated. 750+ criminal defense cases, 500+ family law cases. Former Public Defender. Federal Court admitted.",
  keywords: "Miami criminal defense attorney, family law lawyer Miami, DUI lawyer Miami, divorce attorney Miami, domestic violence lawyer, trial attorney, Bo Porta, Bolívar Porta",
  authors: [{ name: "Bolívar C. Porta, P.A." }],
  alternates: {
    canonical: 'https://bolivarporta.com',
  },
  icons: {
    icon: '/bp-mini-logo.svg',
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bolivarporta.com",
    siteName: "Bolívar C. Porta, P.A.",
    title: "Bo Porta | Miami Trial Attorney | Criminal Defense & Family Law | 1,550+ Cases",
    description: "Bolívar C. Porta: Miami's premier trial attorney. 29 years experience, 1,550+ cases, Avvo 8.6 Excellent rating, 5 Expertise.com awards. Former Public Defender. Dual expertise in criminal defense & family law. Licensed Florida Bar 1996, Federal Court admitted.",
    images: [
      {
        url: "https://bolivarporta.com/portrait-bo-porta.webp",
        width: 315,
        height: 420,
        alt: "Bolívar C. Porta, Miami trial attorney with 29 years experience in criminal defense and family law",
        type: "image/webp",
      },
    ],
    countryName: "United States",
    emails: ["info@boporta.com"],
    phoneNumbers: ["+13053715060"],
  },

  twitter: {
    card: "summary_large_image",
    site: "@bolivarporta",
    creator: "@bolivarporta",
    title: "Bo Porta | Miami Criminal Defense & Family Law Attorney | 29 Years",
    description: "Bolívar C. Porta - 29 years experience, 1,550+ cases, Avvo 8.6 Excellent, Former Public Defender. Dual practice: Criminal Defense & Family Law. Miami's trusted trial attorney since 1996.",
    images: ["https://bolivarporta.com/portrait-bo-porta.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  other: {
    "geo.region": "US-FL",
    "geo.placename": "Miami",
    "geo.position": "25.7617;-80.1918",
    "ICBM": "25.7617, -80.1918",
    "article:modified_time": "2025-03-01T00:00:00Z",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A1929',
  colorScheme: 'light',
};

import Navigation from "./components/Navigation";
import CallbackWidget from "./components/CallbackWidget";
import GoogleAnalytics from "./components/GoogleAnalytics";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${crimson.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 bg-bone text-midnight px-4 py-2 shadow"
        >
          Skip to content
        </a>
        <Navigation />
        {children}
        <CallbackWidget />
      </body>
      <GoogleAnalytics />
    </html>
  );
}
