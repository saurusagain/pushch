import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Push ch web Via Baileys And sc bot wa - By saurus',
    short_name: 'Push CH Saurus',
    description: 'Layanan Push Channel WhatsApp Newsletter Otomatis Menggunakan Script Bot WA & Baileys Engine.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/icon',
        sizes: '48x48',
        type: 'image/png',
      },
    ],
  };
}
