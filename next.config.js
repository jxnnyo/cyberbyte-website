const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
})

module.exports = withBundleAnalyzer({
  async headers() {
    return [
      {
        source: "/(.*?)",
        headers: [
          {
            key: 'Referrer-Policy',
            value: 'no-referrer'
          }, {
            key: 'X-Content-Type-Options',
            value: 'X-Content-Type-Options: nosniff'
          }, {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ]
      }
    ]
  }
});
