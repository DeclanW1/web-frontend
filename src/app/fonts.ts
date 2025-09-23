import { Poppins, IBM_Plex_Mono } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plexmono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
