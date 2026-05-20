import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Judielle Villacrusis | Virtual Assistant",
  description: "Premium virtual assistant services: organized, efficient, and beautifully handled.",
  keywords: "virtual assistant, administrative support, calendar management, email management, VA services",
  openGraph: {
    title: "Judielle Villacrusis | Virtual Assistant",
    description: "Premium virtual assistant services: organized, efficient, and beautifully handled.",
    type: "website",
  },
   icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=DM+Serif+Display:ital@0;1&family=Nunito:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain-overlay antialiased">
        {children}
      </body>
    </html>
  );
}