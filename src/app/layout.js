import { Geist, Geist_Mono } from "next/font/google";
import '../styles/globals.css';
import Sidebar from "../components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SecureSight",
  description: "SecureSight Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-[#0a0a0a] dark:text-[#ededed]`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="ml-64 flex-1 p-6 bg-gray-50 dark:bg-gray-950 text-black dark:text-white">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
