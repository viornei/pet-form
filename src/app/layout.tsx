import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { libreBaskerville, lora } from "./fonts/fonts";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/Footer";
export const metadata: Metadata = {
  title: "Your petsitter",
  description: "Find best petsitter for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${lora.variable} antialiased`}
    >
      <body className="bg-primary-pink-100 scroll-smooth">
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
