import type { Metadata } from "next";
import "./globals.css";
import Topbar from "@/components/topbar/Topbar";

export const metadata: Metadata = {
  title: "Takoya",
  description: "Japanese Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
