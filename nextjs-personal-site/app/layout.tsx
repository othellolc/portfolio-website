import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sushil Lamichhane | Educator, Developer & Researcher",
  description: "The professional portfolio and academic profile of Sushil Lamichhane, a computer science educator and software developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
