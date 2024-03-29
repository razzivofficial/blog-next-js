import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "blog-app",
  description: "by razzivofficial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <h1>Common Layout</h1> */}
        {children}
      </body>
    </html>
  );
}
