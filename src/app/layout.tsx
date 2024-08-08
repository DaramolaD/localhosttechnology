import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Custom IT Solutions for All Industries | Local Host Technology",
  description:
    "Discover tailored IT software solutions designed to meet the unique challenges of businesses across all industries. From custom software development to robust cybersecurity and cloud solutions, we provide end-to-end services to enhance productivity, security, and efficiency. Partner with us to transform your technology landscape.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
