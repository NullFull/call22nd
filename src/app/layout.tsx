import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { GoogleAnalytics } from '@next/third-parties/google'

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const title: string = "콜22 : 제22대 국회에 요구한다"
const desc: string = "제22대 국회의원 후보자들에게 묻습니다"

export const metadata: Metadata = {
  title: title,
  description: desc,
  openGraph: {
    type: "website",
    url: "https://call22nd.works",
    siteName: title,
    description: desc,
    images: [
      {
        url: "./opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "우리동네 국회의원들에게 강간죄 개정&여가부 유지할 건지 물어보러 가기",
      }
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId='G-FN3CMH8E3K' />
    </html>
  );
}
