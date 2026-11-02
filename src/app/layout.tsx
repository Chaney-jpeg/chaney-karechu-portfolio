import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chaney Karechu — Full-Stack Developer",
  description: "Portfolio of Chaney Karechu, a full-stack developer building thoughtful digital experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
