import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google"
import "./globals.css";

// components
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster"
// import PageTransition from "@/components/PageTransition";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
})

export const metadata: Metadata = {
  title: "Rozy | Home",
  icons: "/favicon.png",
  description: "Firmansyah Rozy | Software Engineer",
  metadataBase: new URL('https://rozy.dev'),
  openGraph: {
    type: "website",
    url: "https://rozy.dev",
    title: "Firmansyah Rozy",
    description: "Software Engineer",
    siteName: "Firmansyah Rozy's portfolio site",
    images: 'https://raw.githubusercontent.com/rozy97/rozy.dev/refs/heads/main/public/capture-main.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} antialiased`}
      >
        <Header />
        {/* <PageTransition>{children}</PageTransition> */}
        {children}
        <Toaster />
        
      </body>
    </html>
  );
}
