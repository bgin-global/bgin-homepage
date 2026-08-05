import "./globals.css";
import type { Metadata } from "next";
import { Familjen_Grotesk, Inter, Noto_Sans_JP } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BGIN",
  description: "Blockchain Governance Initiative Network",
  // TODO: OGP
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${familjen.variable} ${notoSansJp.variable}`}
    >
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
