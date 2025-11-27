import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

export const metadata = {
  title: "SYNTX Frontend",
  description: "Next.js App with Clerk",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
