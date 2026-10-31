import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Push ch web Via Baileys And sc bot wa - By saurus',
  description: 'Layanan Push Channel WhatsApp Newsletter Otomatis Menggunakan Script Bot WA & Baileys Engine.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
