import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import afavicon from "./afavicon.jpg";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} · ${siteConfig.role}`,
  description: siteConfig.tagline,
  metadataBase: new URL("https://ara-portfolio.example.com"),
  icons: {
    icon: afavicon.src,
  },
  openGraph: {
    title: `${siteConfig.name} · ${siteConfig.role}`,
    description: siteConfig.tagline,
    images: ["/og-image.png"],
    url: "https://ara-portfolio.example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} · ${siteConfig.role}`,
    description: siteConfig.tagline,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${playfair.variable} antialiased text-foreground`}
      >
        <div className="relative">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
