"use client";
// import type { Metadata } from "next";
import { Mulish } from "next/font/google";
// import "../globals.css";
import "../../globals.css";
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mulish",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${mulish.variable} font-lato antialiased bg-[#FBFBFF]`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
