import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { initSentry } from "@/config/sentry";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "Horizon Bank",
  description: "The modern banking platform of Los Santos",
  icons: {
    icon: "/icons/logo.svg",
  },
};

// Initialize Sentry
initSentry();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
