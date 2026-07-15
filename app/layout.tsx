import type { Metadata } from "next";
import { Figtree, Italiana } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AppProviders } from "@/components/providers/AppProviders";
import "./globals.css";

const display = Italiana({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Purelle | Laboratory Skincare",
    template: "%s | Purelle",
  },
  description:
    "Purelle — premium laboratory skincare. Pure science. Naturally beautiful skin. Precision formulas inspired by Japanese ritual and Korean fermentation.",
  keywords: [
    "Purelle",
    "skincare",
    "serum",
    "essence",
    "clean beauty",
    "luxury skincare",
  ],
  openGraph: {
    title: "Purelle | Laboratory Skincare",
    description:
      "Precision skincare formulated with clinical calm. Pure science. Naturally beautiful skin.",
    type: "website",
    siteName: "Purelle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col bg-mist text-charcoal">
        <AppProviders>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
