import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  breadcrumbs,
}: {
  children: React.ReactNode;
  breadcrumbs: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-5xl mx-auto px-6 py-4 `}>
        <div>{breadcrumbs}</div>
        <div className="mt-4">{children}</div>
      </body>
    </html>
  );
}
