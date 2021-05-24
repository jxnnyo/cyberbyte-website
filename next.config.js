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
          }, {
            key: 'Content-Security-Policy',
            value: "default-src 'self' 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com data: www.google-analytics.com www.googletagmanager.com formspree.io *.hs-scripts.com *.hscollectedforms.net *.hs-analytics.net *.hs-banner.com *.hsadspixel.net;"
          },
        ]
      }
    ]
  }
});
