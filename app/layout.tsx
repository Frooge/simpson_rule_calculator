import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import CustomNavbar from "@/components/custom_navbar";

const pd = Playfair_Display({ weight: ["400","500","600"], subsets:['latin']});

export const metadata: Metadata = {
  title: "Simpson's Rule Calculator",
  description: "Discover Numerical Integration using the Simpson's Rule",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pd.className}>
          <Providers>
            <main className="flex flex-col space-y-6 items-center bg-dark_green min-h-screen">
            <CustomNavbar />
              {children}
            </main>
          </Providers>
      </body>
    </html>
  );
}
