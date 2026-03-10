import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';
import Header from '../components/Header';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Prototype Lab",
  description: "Learn AI tools by building small prototypes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="bg-gradient-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
        </div>
        <main className="main-content relative z-10">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
