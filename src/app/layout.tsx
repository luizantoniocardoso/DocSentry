import Sidebar from "@/components/Layout/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DocSentry",
  description: "DocSentry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-r flex flex-col md:flex-row md:gap-0 h-screen w-screen overflow-y-hidden from-white to-gray-300 text-dark `}
      >
        <Sidebar />
        <div className="w-full h-full ">{children}</div>
      </body>
    </html>
  );
}
