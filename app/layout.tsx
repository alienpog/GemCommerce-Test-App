import type { Metadata } from "next";
import "./globals.css";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GemCommerce Test App",
  description: "Developed By Komolafe Faruq Abiodun, email: Okegbemigenius@gmail.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} font-sans bg-white pb-14`}>
        {children}
      </body>
    </html>
  );
}
