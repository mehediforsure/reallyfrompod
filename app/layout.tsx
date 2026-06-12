import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "The Immigrant Perspective — Immigrant Stories Podcast",
    template: "%s | The Immigrant Perspective",
  },
  description:
    "A podcast that amplifies the voices of immigrants and their unique journeys. Stories of nostalgia, culture shock, and the triumphs of finding home in a new land.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
