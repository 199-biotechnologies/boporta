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
  title: "Bo Porta | Family & Criminal Defense Lawyer Miami",
  description: "Family and Criminal Defense Trial Attorney in Miami, Florida. 25 years of experience protecting families and freedom.",
  keywords: "Miami lawyer, family law, criminal defense, trial attorney, divorce attorney, Bo Porta",
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
