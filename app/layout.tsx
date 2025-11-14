import "./globals.css";
import type { Metadata } from "next";

const APP_TITLE = "Quantum Reflective Mode";

export const metadata: Metadata = {
  title: APP_TITLE,
  description:
    "An experiential interface for harmonic coherence, reflective evolution, and source alignment."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
