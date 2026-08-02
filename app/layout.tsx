import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ekemini-eduok.dev"),
  title: "Ekemini Eduok | Frontend Developer & UI Designer",
  description:
    "Ekemini Eduok — Junior Frontend Developer & UI Designer. B.Sc. Computer Information Systems. Specializing in React, Next.js, TypeScript, and fintech web applications.",
  keywords: [
    "Ekemini Eduok",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Fintech UI",
    "UI Designer",
    "Nigeria Frontend Developer",
  ],
  authors: [{ name: "Ekemini Eduok" }],
  openGraph: {
    title: "Ekemini Eduok | Frontend Developer & UI Designer",
    description:
      "Junior Frontend Developer specializing in React, Next.js, TypeScript, and fintech web applications.",
    url: "https://ekemini-eduok.dev",
    siteName: "Ekemini Eduok Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekemini Eduok | Frontend Developer & UI Designer",
    description:
      "Junior Frontend Developer specializing in React, Next.js, TypeScript, and fintech web applications.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-slate-950 text-slate-300 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
