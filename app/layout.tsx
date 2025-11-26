import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "SYNTX - Resonance System",
  description: "SYNTX isn't AI. It's the resonance that governs it.",
  icons: {
    icon: "/Logo1.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="de">
        <body className="antialiased">{children}</body>
      </html>
    </ClerkProvider>
  );
}
