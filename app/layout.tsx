import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Yemedhnat Internal Medicine Specialty Clinic",
  description:
    "Comprehensive internal medicine care in Bole Bulbula, Addis Ababa. Personalized prevention, diagnosis, and management of complex conditions.",
  keywords: [
    "internal medicine",
    "Yemedhnat",
    "Addis Ababa clinic",
    "preventive care",
    "chronic disease management",
  ],
  openGraph: {
    title: "Yemedhnat Internal Medicine Specialty Clinic",
    description:
      "Navigating your health journey with compassionate, evidence-based internal medicine in Addis Ababa.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yemedhnat Internal Medicine Specialty Clinic",
    description:
      "Comprehensive, personalized healthcare guided by Dr. Medhanit Aberra's 30 years of expertise.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-50 text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
