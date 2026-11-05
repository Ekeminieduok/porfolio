import type { Metadata } from "next";
import "@fontsource-variable/manrope/index.css";
import "@fontsource-variable/outfit/index.css";
import "./globals.css";

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
  themeColor: "#eeedf2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
