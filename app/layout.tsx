import type { Metadata } from "next";
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
  keywords: "Miami criminal defense attorney, family law lawyer Miami, DUI lawyer Miami, divorce attorney Miami, domestic violence lawyer, trial attorney, Bo Porta, Bolivar Porta",
  authors: [{ name: "Bolivar C. Porta, P.A." }],
  alternates: {
    canonical: 'https://bolivarporta.com',
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bolivarporta.com",
    siteName: "Bolivar C. Porta, P.A.",
    title: "Bo Porta | Miami Trial Attorney | Criminal Defense & Family Law",
    description: "1,550+ cases over 29 years. Avvo 8.6 Excellent rating. Best DUI Lawyer Miami 2016-2022. Former Public Defender.",
    images: [
      {
        url: "/portrait-bo-porta.webp",
        width: 315,
        height: 420,
        alt: "Bolivar C. Porta, Miami criminal defense and family law attorney",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bo Porta | Miami Criminal Defense & Family Law Attorney",
    description: "29 years experience. 1,550+ cases. Avvo 8.6 Excellent. Former Public Defender.",
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
  },
};

import Navigation from "./components/Navigation";
import CallbackWidget from "./components/CallbackWidget";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${crimson.variable} ${inter.variable}`}>
      <body>
        <Navigation />
        {children}
        <CallbackWidget />
      </body>
    </html>
  );
}
