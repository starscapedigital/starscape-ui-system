import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Starscape - Where Ideas Take Shape",
  description: "A mysterious real-time collaborative canvas for creative minds. Experience the future of digital collaboration.",
  keywords: ["starscape", "canvas", "collaboration", "real-time", "creative", "design"],
  authors: [{ name: "Starlove" }],
  creator: "Starlove",
  openGraph: {
    title: "Starscape - Where Ideas Take Shape",
    description: "A mysterious real-time collaborative canvas for creative minds.",
    url: "https://canvas.starscape.app",
    siteName: "Starscape",
    type: "website",
    images: [
      {
        url: "/starscape-star.png",
        width: 512,
        height: 512,
        alt: "Starscape Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Starscape - Where Ideas Take Shape",
    description: "A mysterious real-time collaborative canvas for creative minds.",
    images: ["/starscape-star.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/starscape-star.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Starscape",
              description: "A mysterious real-time collaborative canvas for creative minds.",
              url: "https://canvas.starscape.app",
              applicationCategory: "DesignApplication",
              creator: {
                "@type": "Person",
                name: "Starlove",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

