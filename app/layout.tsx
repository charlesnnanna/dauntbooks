import type { Metadata } from "next";
import { Inter, Cardo, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";

const cardo = Cardo({ 
  weight: ['400', '700'],
  subsets: ["latin"]
 });

 const openSans =  Open_Sans({ 
  weight: ['400', '700'],
  subsets: ["latin"]
 });

export const metadata: Metadata = {
  title: "DauntBooks | Home",
  description: "Buy your favourite books here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cardo.className}`}>
        <div className="border-0 border-transparent md:px-[180px]">
          <Header/>
          <HomeHero/>
          {children}
        </div>
      </body>
    </html>
  );
}
