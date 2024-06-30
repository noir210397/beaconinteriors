import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import StoreProvider from "./StoreProvider";
import { Bounce, ToastContainer } from "react-toastify";

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
          <NavBar />
          <div className="mt-16 flex-1 border-2 border-red-700  relative ">
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              limit={2}
              className={`border-2 border-green-800`}
            />
            {children}
          </div>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
