import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GritTemplate",
  description: "The city's fastest-growing sports league. All skill levels welcome.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
