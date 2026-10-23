import type { Metadata, Viewport } from "next";
import { Fraunces, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const sans = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ปาร์ตี้วันเกิด Misfortune",
    template: "%s · Misfortune",
  },
  description: "เกมตอบคำถามวันเกิดของ Misfortune วันที่ 26 ตุลาคม",
  openGraph: {
    title: "ปาร์ตี้วันเกิด Misfortune",
    description: "เกมตอบคำถามวันเกิด วันที่ 26 ตุลาคม",
    locale: "th_TH",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#2a1216",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${sans.variable} ${display.variable} dark h-full antialiased`}
    >
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
