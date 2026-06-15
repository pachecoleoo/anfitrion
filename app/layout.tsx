import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

import { novaNook, minionCondItalic, nunitoSans } from "./fonts";

export const metadata: Metadata = {
  title: "Anfitrión Café",
  description: "Barra móvil de café para eventos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${novaNook.variable} ${minionCondItalic.variable} ${nunitoSans.variable}`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
