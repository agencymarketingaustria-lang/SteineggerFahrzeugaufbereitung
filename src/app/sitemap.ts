import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://steinegger-aufbereitung.de';
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  
  return [
    {
      url: baseUrl,
      lastModified: today,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/leistungen`,
      lastModified: today,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/galerie`,
      lastModified: today,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ablauf`,
      lastModified: today,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: today,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: today,
      priority: 0.8,
    },
  ];
}
