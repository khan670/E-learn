"use client";
// import type { Metadata } from "next";
import { Mulish } from "next/font/google";
// import "../globals.css";
import "../globals.css";
import { RiGraduationCapFill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mulish",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <html lang="en">
      <body
        className={` ${mulish.variable} font-lato antialiased bg-[#FBFBFF]`}>
        <header className="px-22 py-6 fixed top-0 bg-white shadow w-full">
          <nav className="flex gap-10 items-center justify-between">
            <h1 className="font-bold text-3xl tracking-wider flex items-center gap-2 text-[#1A2D62]">
              <RiGraduationCapFill size={50} className="text-[#2ECA7F]" />
              Elrn
            </h1>
            {pathName === "/sign-in" ? (
              <Button text="Sign Up" handle={() => router.push("/sign-up")} />
            ) : (
              <Button text="Sign In" handle={() => router.push("/sign-in")} />
            )}
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
