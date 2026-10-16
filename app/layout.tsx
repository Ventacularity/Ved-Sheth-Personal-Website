import type { Metadata } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    default: `${site.name}: electrical engineering and computer science`,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" className="wrap">
          {children}
        </main>
        <ImageLightbox />
        <Footer />
      </body>
    </html>
  );
}
