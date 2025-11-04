import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bolívar C. Porta, P.A.',
    short_name: 'Bo Porta',
    description:
      'Miami trial attorney practicing Criminal Defense and Family Law. 29 years experience and 1,550+ cases.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#0A1929',
    theme_color: '#0A1929',
    icons: [
      { src: '/bp-mini-logo.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
    ],
  };
}

