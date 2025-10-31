import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "10 Seconds – Science of Success",
  description:
    "10 Seconds is an organization that unifies training, assessments, and recruitment under one roof. Specializing in aptitude and placement training for universities and students.",
  keywords: [
    "10 Seconds",
    "Aptitude Training",
    "Placements",
    "Consulting",
    "Universities",
    "Recruitment",
  ],
  authors: [{ name: "Anijith Shetty" }, { name: "Ramaprasad" }],
  openGraph: {
    title: "10 Seconds – Science of Success",
    description:
      "Empowering students and institutions with effective aptitude and placement training programs.",
    url: "https://10secondsgroup.in",
    siteName: "10 Seconds",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-gramm="false"
      data-gramm_editor="false"
      data-enable-grammarly="false"
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0d47a1" />
      </Head>
      <body className={poppins.className}>
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
