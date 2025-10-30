import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yemedhnat Internal Medicine Specialty Clinic",
  description:
    "Compassionate, evidence-based internal medicine care in Bole Bulbula, Addis Ababa with personalized diagnostics and long-term support.",
  keywords: [
    "internal medicine",
    "clinic",
    "Addis Ababa",
    "Ethiopia",
    "healthcare",
    "medical care",
    "diabetes",
    "hypertension",
    "preventive care",
  ],
  authors: [{ name: "Yemedhnat Clinic" }],
  openGraph: {
    title: "Yemedhnat Internal Medicine Specialty Clinic",
    description:
      "Compassionate, evidence-based internal medicine care in Bole Bulbula, Addis Ababa",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
