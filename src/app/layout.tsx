import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "AiWizard",
  description: "Ai assitant which helps you to generate gifts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="monts">
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
