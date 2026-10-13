import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMIT.OS — Personal Portfolio",
  description: "Personal developer portfolio of Amit Kumar. Engineering intelligence. Building what comes next.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
