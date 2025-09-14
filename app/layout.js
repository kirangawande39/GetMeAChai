import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./provider";
import ClientWrapper from "@/components/ClientWrapper";
import { ToastContainer, toast } from 'react-toastify';





const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "GetMeAChai - Support Creators by Buying a Chai ☕",
  description: "GetMeAChai is a platform where fans can support their favorite creators with a chai. Built with Next.js and Razorpay.",
  keywords: ["GetMeAChai", "BuyMeACoffee", "Support Creators", "Donate", "Next.js"],
  authors: [{ name: "Kiran Gawande", url: "https://getmeachai.vercel.app" }],
  creator: "Kirna Gawande",
  publisher: "GetMeAChai",


  openGraph: {
    title: "GetMeAChai - Support Creators by Buying a Chai ☕",
    description: "Support your favorite creators with a chai. Built on Next.js + Razorpay.",
    url: "https://getmeachai.vercel.app",
    siteName: "GetMeAChai",
    images: [
      {
        url: "https://getmeachai.vercel.app/og-image.png", 
        width: 1200,
        height: 630,
        alt: "GetMeAChai Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

 
  twitter: {
    card: "summary_large_image",
    title: "GetMeAChai - Support Creators",
    description: "A chai-powered way to support your favorite creators ☕",
    images: ["https://getmeachai.vercel.app/og-image.png"],
    creator: "@KiranGa28867429",
  },


  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://getmeachai.vercel.app"),
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          <ClientWrapper className={`${geistSans.variable} ${geistMono.variable}`}>
            <div className="min-h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
              <ToastContainer/>
              <Navbar />
              <main className="min-h-[78vh] text-white">{children}</main>
              <Footer />
            </div>
          </ClientWrapper>
        </Providers>
      </body>
    </html>
  );
}
