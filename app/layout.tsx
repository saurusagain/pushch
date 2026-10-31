import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://push-ch-saurus.vercel.app';
const siteTitle = 'Push ch web Via Baileys And sc bot wa - By saurus';
const siteDescription =
  'Layanan Push Channel WhatsApp Newsletter Otomatis Menggunakan Script Bot WA & Baileys Engine. Broadcast pesan cepat, aman, anti-delay, terpusat di /idch.json.';

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Push ch web By saurus',
  },
  description: siteDescription,
  applicationName: 'Push CH Saurus',
  authors: [{ name: 'saurus', url: 'https://wa.me/62895639043495' }],
  generator: 'Next.js',
  keywords: [
    'push ch',
    'push channel wa',
    'push ch baileys',
    'whatsapp newsletter',
    'sc bot wa',
    'bot wa newsletter',
    'saurus',
    'saurus bot wa',
    'broadcast whatsapp channel',
    'idch json',
    'baileys multi device',
    'tier biasa 20k',
    'tier ultra 50k',
  ],
  creator: 'saurus',
  publisher: 'saurus',
  formatDetection: {
    telephone: true,
    date: false,
    address: false,
    email: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: 'Push CH Saurus',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    creator: '@saurus',
    site: '@saurus',
  },
  category: 'technology',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      'name': 'Push ch web Via Baileys And sc bot wa',
      'operatingSystem': 'Web, Cloud, Serverless',
      'applicationCategory': 'UtilitiesApplication',
      'offers': [
        {
          '@type': 'Offer',
          'name': 'Tier Biasa',
          'price': '20000',
          'priceCurrency': 'IDR',
          'description': 'Mampu push hingga 3 channel WhatsApp newsletter.',
        },
        {
          '@type': 'Offer',
          'name': 'Tier Ultra',
          'price': '50000',
          'priceCurrency': 'IDR',
          'description': 'Mampu push UNLIMITED channel WhatsApp newsletter tanpa batas.',
        },
      ],
      'author': {
        '@type': 'Person',
        'name': 'saurus',
        'telephone': '+62895639043495',
      },
    },
    {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Apa itu Push CH?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Push CH adalah metode broadcast pesan otomatis ke WhatsApp Channel (Newsletter) menggunakan script bot WhatsApp berbasis Baileys socket library tanpa batasan kontak personal.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Berapa harga paket Push CH Saurus?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Tersedia Tier Biasa seharga Rp 20.000 (maksimal 3 channel) dan Tier Ultra seharga Rp 50.000 (unlimited channel tanpa batas). Hubungi admin WhatsApp 62895639043495 untuk pembelian.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bagaimana cara menambahkan ID Channel?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Beli akses ke admin terlebih dahulu, lalu buka halaman /create, input nama dan ID channel WhatsApp (@newsletter), lalu kirim format JSON terupdate ke admin untuk di-add secara manual.',
          },
        },
      ],
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
