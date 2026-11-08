import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Angkringan Ndeso | Kuliner Tradisional Yogyakarta",
  description:
    "Angkringan Ndeso di Jl. Gamelan Kidul No.30, Kraton, Yogyakarta. Aneka sate, gorengan, nasi kucing, dan wedang hangat dengan suasana akrab.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
