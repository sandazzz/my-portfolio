import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/ui/star-background";
import Header from "@/components/ui/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "This is my Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/*<GoogleAnalytics />*/}
      <body
        className={`${inter.className} bg-slate-950`}
      >
        {<StarsCanvas />}
        <Header />
        {children}
      </body>
    </html>
  );
}
