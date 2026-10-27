import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Noto_Serif_Telugu } from "next/font/google";
import "./globals.css";
import "./invitation.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSerifTelugu = Noto_Serif_Telugu({
  variable: "--font-telugu",
  subsets: ["telugu"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ishita & Shalin — Wedding Invitation",
  description:
    "With the blessings of our families, we invite you to the wedding of Ishita and Shalin — Friday, 30 October 2026, Nellore.",
};

export const viewport: Viewport = {
  themeColor: "#F6EDE2",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${notoSerifTelugu.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
