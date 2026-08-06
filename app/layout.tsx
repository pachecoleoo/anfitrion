import type { Metadata } from "next";
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import { novaNook, minionCondItalic, nunitoSans } from "./fonts";

const siteUrl = "https://www.anfitrioncafe.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Anfitrión Café | Barra de café para eventos",
    template: "%s | Anfitrión Café",
  },

  description:
    "Barra móvil de café de especialidad para eventos corporativos, sociales, fechas especiales y oficinas en Neuquén y alrededores.",

  applicationName: "Anfitrión Café",
  authors: [{ name: "Anfitrión Café" }],
  creator: "Anfitrión Café",
  publisher: "Anfitrión Café",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Anfitrión Café",
    title: "Anfitrión Café | Barra de café para eventos",
    description:
      "Creamos experiencias de café de especialidad para eventos, empresas, oficinas y celebraciones.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anfitrión Café, barra móvil de café para eventos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Anfitrión Café | Barra de café para eventos",
    description:
      "Experiencias de café de especialidad para eventos, empresas y celebraciones.",
    images: ["/opengraph-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body
        className={`${novaNook.variable} ${minionCondItalic.variable} ${nunitoSans.variable}`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
