import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Wesley Wong - Staff Software Engineer",
    template: "%s - Wesley Wong",
  },
  description: site.description,
  alternates: { canonical: "/" },
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

/**
 * Runs before first paint so the saved (or system) theme never flashes.
 * ThemeToggle writes the same `theme` key.
 */
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-bg font-sans text-fg">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        {children}
        <BackToTop />
        <ScrollReveal />
      </body>
    </html>
  );
}
