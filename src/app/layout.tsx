import type { Metadata, Viewport } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

export const metadata: Metadata = {
  title: {
    default: "Minerva Holdings | Your Legal Backbone",
    template: "%s | Minerva Holdings",
  },
  description:
    "AI-native legal operations for corporate legal teams, working alongside trusted counsel. Privacy, cyber response, forensics, and IP portfolio management at scale.",
  keywords: [
    "legal managed services",
    "AI legal services",
    "corporate legal operations",
    "legal ops",
    "cyber incident response",
    "digital forensics",
    "DPO as a service",
    "data privacy operations",
    "trademark docketing",
    "IP portfolio management",
    "legal tech",
    "law firm partner",
  ],
  authors: [{ name: "Minerva Holdings" }],
  creator: "Minerva Holdings",
  publisher: "Minerva Holdings",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://minervaholdco.com",
    siteName: "Minerva Holdings",
    title: "Minerva Holdings | Your Legal Backbone",
    description:
      "AI-native legal operations for corporate legal teams, working alongside trusted counsel. Privacy, cyber response, forensics, and IP management at scale.",
    images: [
      {
        url: "/Minerva_Holdings_Logo.png",
        width: 1200,
        height: 630,
        alt: "Minerva Holdings - Your Legal Backbone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Minerva Holdings | Your Legal Backbone",
    description:
      "AI-native legal operations. Privacy, cyber response, forensics, and IP management at scale.",
    images: ["/Minerva_Holdings_Logo.png"],
    creator: "@minervaholdco",
  },
  icons: {
    icon: [
      { url: "/Minerva_Holdings_Logo_favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/Minerva_Holdings_Logo_favicon.png", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  category: "Legal Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://minervaholdco.com" />
      </head>
      <body className={cn(inter.variable, cinzel.variable, "antialiased")}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
