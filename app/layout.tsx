import React from"react";
import type { Metadata } from"next";
import { Public_Sans } from"next/font/google";
import Header from "./components/Header";
import"./globals.css";

const publicSans = Public_Sans({
  variable:"--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:"Productivity Pilot POC",
  description:"A proof of concept for daily energy and task optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${publicSans.variable} font-display bg-background-light text-slate-900 min-h-screen transition-colors duration-200`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
