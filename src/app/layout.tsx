import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import StoreProvider from "./StoreProvider";
import { Toaster } from "sonner";
import MyApp from "./MyApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beacon Interiors",
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
        className={`font-lora  bg-secondary  text-mydark  text-sm lg:text-base min-h-screen w-full flex flex-col`}
      >
        <StoreProvider>
          <MyApp>
            <NavBar />
            <Toaster richColors />
            <div className="mt-16 flex-1 border-2 border-red-700  relative pb-5 ">
              {children}
            </div>
            <Footer />
          </MyApp>
        </StoreProvider>
      </body>
    </html>
  );
}
