import type { Metadata } from "next";
import "./globals.css";
import { Lexend } from "next/font/google";


const lexend = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Lina Rivero",
  description: "Soy Lina, hago música.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} antialiased`}>
        {children}</body>
    </html>
  );
}
