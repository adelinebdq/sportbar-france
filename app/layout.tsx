import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SportBar France - Trouvez où regarder vos matchs",
  description: "Trouvez les bars et restaurants qui diffusent vos matchs de sport préférés en France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          crossOrigin=""
        />
      </head>
      <body className={`${geistSans.variable} antialiased min-h-screen bg-slate-900 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
