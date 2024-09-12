import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'
import Navbar from "@/components/Navbar";

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: "Phishing Campaign",
  description: "Cybersecurity Threat Awareness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
