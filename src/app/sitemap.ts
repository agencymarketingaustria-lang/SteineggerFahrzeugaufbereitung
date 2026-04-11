import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://steinegger-aufbereitung.de';
  
  return [
    {
      url: baseUrl,
      lastModified: '2026-04-11',
    },
    {
      url: `${baseUrl}/leistungen`,
      lastModified: '2026-04-11',
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: '2026-04-11',
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: '2026-04-11',
    },
    {
      url: `${baseUrl}/ablauf`,
      lastModified: '2026-04-11',
    },
    {
      url: `${baseUrl}/galerie`,
      lastModified: '2026-04-11',
    },
  ];
}
