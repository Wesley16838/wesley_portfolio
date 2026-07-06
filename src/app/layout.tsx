import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Fraunces } from "next/font/google";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import { site } from "@/content/site";
import "./globals.css";

const fraunces = Fraunces({
  style: ["normal", "italic"],
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Wesley Wong - Staff Software Engineer",
    template: "%s - Wesley Wong",
  },
  description: site.description,
  openGraph: {
    title: "Wesley Wong - Staff Software Engineer",
    description: site.description,
    url: site.url,
    siteName: "Wesley Wong",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${fraunces.variable}`}
    >
      <body className="bg-bg font-sans text-fg">
        <div
          aria-hidden="true"
          className="scroll-progress fixed inset-x-0 top-0 z-[60] h-[3px] bg-accent"
        />
        <Header />
        <BackToTop />
        {children}
      </body>
    </html>
  );
}
