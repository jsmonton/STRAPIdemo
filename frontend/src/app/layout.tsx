import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { getGlobalPageData, getGlobalPageMetaData } from "@/data/loader";
import { Header } from "@/components/custom/Header";
import { Footer } from "@/components/custom/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function  generateMetadata(): Promise<Metadata> {
  const metadata = await getGlobalPageMetaData();
  
  return{
    title: metadata?.data.Title,
    description: metadata?.data.Description,
  }
 
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = await getGlobalPageData();
  console.log(globalData);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header data={globalData.data.header} />
        <div>{children}</div>
        <Footer data={globalData.data.footer} />
      </body>
    </html>
  );
}
