import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devlup - Gestion moderne pour écoles de tennis",
  description:
    "Simplifiez votre enseignement, engagez vos élèves et fidélisez les parents avec la solution de gestion complète pour écoles de tennis.",
  icons: {
    icon: [
      { url: "/assets/favicon/favicon.ico", sizes: "any" },
      { url: "/assets/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/assets/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/assets/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/assets/favicon/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#1B112C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
