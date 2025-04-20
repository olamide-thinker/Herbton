import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/sharedUi/Navbar";
import { Footer } from "@/components/sharedUi/Footer";
import { Toaster } from "@/components/ui/sonner";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Load Poppins font
const poppins = Poppins({
  variable: "--font-poppins", // Custom variable to apply the font
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GNHL- Global Natural Herbal Life",
  description: "Wealth From Health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${geistMono.variable} antialiased`}>
        <NavBar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
