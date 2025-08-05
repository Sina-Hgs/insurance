import type { Metadata } from "next";

import { ReduxProvider, ReactQueryProvider } from "@/providers";
import { MainLayout } from "@/components";
import iranSans from "@/utils/localFonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Insurance Mock Dashboard",
  description: "Mock Project made with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${iranSans.variable}  antialiased`}>
        <ReduxProvider>
          <ReactQueryProvider>
            <MainLayout>{children}</MainLayout>
          </ReactQueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
