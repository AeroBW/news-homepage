import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | News homepage",
  icons: {
    icon: "/assets/images/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-off-white ${inter.className}`}>
      <body className="grid min-h-screen sm:place-items-center">
        <div className="m-8 max-w-[1200px] lg:my-8">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
