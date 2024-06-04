import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-lora bg-secondary  text-mydark  overflow-x-hidden text-sm lg:text-base min-h-screen flex flex-col`}
      >
        <NavBar />
        <div className="mt-16 flex-1 border-2 border-red-700 ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
