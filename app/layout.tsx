import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DigiDocs",
  description: "Transform paper documents into structured digital data with AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
