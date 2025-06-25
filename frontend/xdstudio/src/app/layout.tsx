import type { Metadata } from "next";
import {  Kanit } from "next/font/google";
import "@/styles/globals.css";
import clsx from "clsx";
import { Providers } from "./providers";


export const metadata: Metadata = {
  title: "XD SHOP :: ระบบร้านค้า Fivem",
  description: "Website Developer by XD.STUDIO",
};

const kanit = Kanit({
  subsets: ['thai', 'latin'],
  weight: ['500'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          // geistSans.variable, geistMono.variable,
          `antialiased`, kanit.className
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
