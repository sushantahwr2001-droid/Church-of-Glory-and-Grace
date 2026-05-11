import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Church of Glory and Grace Foundation | Faith, Hope & Love",
  description:
    "Church of Glory and Grace Foundation is a faith-based NGO serving communities through prayer, compassion, outreach, and support.",
  keywords: [
    "Church of Glory and Grace Foundation",
    "Christian NGO India",
    "Prayer Request",
    "Faith Based NGO",
    "Church Ministry Madhya Pradesh"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={bodyFont.variable}>{children}</body>
    </html>
  );
}
