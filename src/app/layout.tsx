import type { Metadata } from "next";
import "./globals.css";
import "./font.css";

export const metadata: Metadata = {
  title: "SALES UP AI",
  description: "is a lively advergaming platform that links businesses and customers through fun interactive games.",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>
) {

  return (
    <html>
      <body className="antialiased">
        <>
          {children}
        </>
      </body>
    </html>
  );
}