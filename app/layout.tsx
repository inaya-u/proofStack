import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "proofStack",
  description: "Figma-to-code proof of work — pitch designs built out as real, functioning frontends.",
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
