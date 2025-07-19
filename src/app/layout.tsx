import type { Metadata } from "next";
import "./globals.css";
import { libreBaskerville, lora } from "./fonts/fonts";

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
      <body>{children}</body>
    </html>
  );
}
