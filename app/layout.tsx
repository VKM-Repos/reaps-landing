import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const yellixBold = localFont({
  src: "./fonts/Yellix-Bold.woff",
  variable: "--yellix-bold",
  display: "swap",
});
const yellix = localFont({
  src: "./fonts/Yellix-Regular.woff",
  variable: "--yellix-normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  // metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ["Data", "statistics"],
  authors: [
    {
      name: siteConfig.creator.name,
      url: siteConfig.creator.website,
    },
  ],
  creator: siteConfig.creator.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.creator.twitterId,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
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
        className={`${yellix.variable} ${yellixBold.variable} relative mx-auto w-full !max-w-[1600px] antialiased scroll-smooth`}
      >
        <Header />
        <main className="pb-[5rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
