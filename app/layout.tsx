import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Vamshi Krishna | CSE Developer", description: "Portfolio of Vamshi Krishna — Computer Science Engineering student building with AI, DevOps and modern web technologies." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }