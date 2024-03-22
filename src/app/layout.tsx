import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const title: string = "제22대 국회에 요구한다"

export const metadata: Metadata = {
  title: title,
  description: "제22대 국회의원 후보자들에게 묻습니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">

      <meta property="og:title" content={title} />
      <meta property="og:image" content="./opengraph-image.png" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
