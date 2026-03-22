import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ── Security ──────────────────────────────────
  poweredByHeader: false, // Removes "X-Powered-By: Next.js" header

  // ── Performance ───────────────────────────────
  compress: true, // Enables Gzip/Brotli compression
  images: {
    formats: ['image/avif', 'image/webp'], // Prefer AVIF > WebP > JPEG
  },

  // ── Security Headers ──────────────────────────
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
      ],
    },
  ],
};

export default nextConfig;
