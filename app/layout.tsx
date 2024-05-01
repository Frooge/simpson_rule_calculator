import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";

const roboto = Roboto({ weight: ["100","300","500"], subsets:['latin']});

export const metadata: Metadata = {
  title: "Simpson's Calculator",
  description: "Discover Numerical Integration using the Simpson's Rule",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
          <Providers>
            <main className="flex flex-col space-y-6 items-center bg-dark_green min-h-screen">
              {children}
            </main>
          </Providers>
      </body>
    </html>
  );
}
