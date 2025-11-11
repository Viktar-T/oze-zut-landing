import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Katedra Inżynierii Odnawialnych Źródeł Energii",
  description: "Aktualności, laboratoria i projekty Katedry Inżynierii Odnawialnych Źródeł Energii ZUT.",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    title: "Katedra Inżynierii Odnawialnych Źródeł Energii",
    description: "Aktualności, laboratoria i projekty Katedry Inżynierii Odnawialnych Źródeł Energii ZUT.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <Navbar />
        <main id="main-content">
          <div className="container page-content">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}


