import type { Metadata } from "next";
import "./globals.css";
import { Inter_Tight } from "next/font/google";

/**
 * RootLayout
 * ----------
 * Global application layout for the Next.js App Router.
 *
 * Defines shared HTML structure, global styles, typography,
 * and metadata applied across all routes.
 *
 * - Loads and configures the Inter Tight Google font
 * - Applies global CSS styles
 * - Sets default SEO metadata for the application
 * - Wraps all pages rendered from the `app` directory
 */


const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GemCommerce Test App",
  description: "Developed By Komolafe Faruq Abiodun, my semail: Okegbemigenius@gmail.com, my website: alienartech.vercel.app",
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
          {/* this children is from page.ts in app folder */}
        {children}
      </body>
    </html>
  );
}
