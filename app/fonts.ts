import localFont from "next/font/local";
import { Nunito_Sans } from "next/font/google";

export const novaNook = localFont({
  src: "../fonts/nova-nook.otf",
  variable: "--font-nova-nook",
  display: "swap",
});

export const minionCondItalic = localFont({
  src: "../fonts/minion-pro-cond-italic.otf",
  variable: "--font-minion-cond-italic",
  display: "swap",
});

export const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-text",
  display: "swap",
});
