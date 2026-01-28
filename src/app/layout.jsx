import { Geist, Geist_Mono, Poppins } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const poppins = Poppins(
  {
    weight: ["100", "200", "400", "500", "600", "800"]
  }
)

export const fontBangla = localFont({
  src: './../fonts/mayaboti-normal.ttf',
})

export const metadata = {
  metadataBase: new URL("https://hero-kidz-flax.vercel.app"),

  title: {
    default: "HeroKidz | Educational Toys for Smart Kids",
    template: "%s | HeroKidz",
  },

  description:
    "HeroKidz offers safe, non-toxic educational toys that help children learn numbers, counting, logic, and creativity through play-based learning.",

  keywords: [
    "educational toys",
    "kids learning toys",
    "counting board",
    "math learning toys",
    "kids educational store",
    "Bangladesh kids toys",
    "preschool learning toys",
  ],

  authors: [{ name: "HeroKidz" }],
  creator: "HeroKidz",
  publisher: "HeroKidz",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "https://i.ibb.co.com/NdwNNgfB/logo.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "HeroKidz",
    title: "HeroKidz | Educational Toys for Smart Kids",
    description:
      "Discover high-quality educational toys designed to improve counting, logic, and cognitive development for kids.",
    images: [
      {
        url: "https://i.ibb.co.com/MygN4KbT/hero-kidz-home.png",
        width: 1200,
        height: 630,
        alt: "HeroKidz Homepage",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "HeroKidz | Educational Toys for Smart Kids",
    description:
      "Safe & fun educational toys for kids. Learn numbers, counting, and logic through play.",
    images: ["https://i.ibb.co.com/MygN4KbT/hero-kidz-home.png"],
    creator: "@kidzlearning",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Education",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar></Navbar>
        </header>
        <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100svh-302px)]">
          {children}
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
