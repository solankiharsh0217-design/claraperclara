import type { Metadata } from "next";
import { Cormorant, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Preloader from "@/components/ui/Preloader";
import ScrollProgress from "@/components/ui/ScrollProgress";
import FloatingDecorations from "@/components/ui/FloatingDecorations";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ClaraPerClara | Parrucchiere di Lusso a Brescia",
  description:
    "Il tempio della bellezza dove riscoprire sé stessi. Hair, Estetica e Make-up dal 1985. Via Dante 13, Brescia.",
  keywords: [
    "parrucchiere brescia",
    "hair salon brescia",
    "extensions capelli brescia",
    "estetica brescia",
    "make up brescia",
    "claraperclara",
    "clara per clara",
  ],
  openGraph: {
    title: "ClaraPerClara | Parrucchiere di Lusso a Brescia",
    description:
      "Il tempio della bellezza dove riscoprire sé stessi. Hair, Estetica e Make-up dal 1985.",
    url: "https://www.claraperclara.it",
    siteName: "ClaraPerClara",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <Preloader />
        <ScrollProgress />
        <FloatingDecorations />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
