import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/componentWeb/navbar/Navbar";
import Footer from "@/componentWeb/footer/Footer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "HCMUT's SmartPrint",
  description: "This is SmartPrint HCMUT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Navbar />
        {/* <div className="h-[calc(60vh)] ">{children}</div>
         */}
        <div className=" ">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
