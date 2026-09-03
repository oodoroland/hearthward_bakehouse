import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hearthward Bakehouse",
  description:
    "An independent bakehouse — sourdough, pastry, and daily bakes made by hand.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body text-body-md bg-background text-on-background pb-20 md:pb-0">
        <SiteHeader />
        <main className="w-full pt-32 flex-1">{children}</main>
        <SiteFooter />
        <MobileBottomNav />
      </body>
    </html>
  );
}
