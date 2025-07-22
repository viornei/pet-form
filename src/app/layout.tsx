import type { Metadata } from "next";
import "./globals.css";
import { libreBaskerville, lora } from "./fonts/fonts";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/Footer";
import StoryblokProvider from "@/providers/StoryblokProvider";

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
    <StoryblokProvider>
      <html
        lang="en"
        className={`${libreBaskerville.variable} ${lora.variable} antialiased`}
      >
        <body className="scroll-smooth">
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </StoryblokProvider>
  );
}
