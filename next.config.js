
const ContentSecurityPolicy = `
  default-src 'self';
  img-src 'self' data:;
  script-src 'self';
`

module.exports = {
  swcMinify: true,
  experimental: {
    serverActions: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*?)",
        headers: [
          {
            key: "Referrer-Policy",
            value: "no-referrer",
          },
          {
            key: "X-Content-Type-Options",
            value: "X-Content-Type-Options: nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
          }
        ],
      },
    ];
  },
};
