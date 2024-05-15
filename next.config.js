
module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["flowbite-react"],
  },
  redirects: async () => {
    return [
      {
        source: "/projects/price-tracking",
        destination: "/projects/competitor-price-tracking",
        permanent: true,
      },
      {
        source: "/projects/competitive-price-tracking",
        destination: "/projects/competitor-price-tracking",
        permanent: true,
      },
      {
        source: "/projects/life-control",
        destination: "/projects/cyberworks-3",
        permanent: true,
      },
    ];
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
          }
        ],
      },
    ];
  },
};
