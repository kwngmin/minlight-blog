import Footer from "@/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Minlight Log",
    template: "Minlight Log | %s",
  },
  description: "Front end Developer & Designer - Minlight Log",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col">
        <Header />
        <main className="max-w-screen-lg mx-auto w-full grow px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
