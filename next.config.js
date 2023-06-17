

module.exports = {
  swcMinify: true,
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
            key: "Report-To",
            value: '{"group":"default","max_age":10886400,"endpoints":[{"url":"https://cb-software.uriports.com/reports"}],"include_subdomains":true}',
          },
          {
            key: "Reporting-Endpoints",
            value: 'default="https://cb-software.uriports.com/reports"',
          },
          {
            key: "NEL",
            value: '{"report_to":"default","max_age":2592000,"include_subdomains":true,"failure_fraction":1.0}',
          },
          {
            key: "Permissions-Policy-Report-Only",
            value: 'accelerometer=(), ambient-light-sensor=(), autoplay=(), battery=(), camera=(), cross-origin-isolated=(), display-capture=(), document-domain=(), encrypted-media=(), execution-while-not-rendered=(), execution-while-out-of-viewport=(), fullscreen=(), geolocation=(), gyroscope=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), navigation-override=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), web-share=(), xr-spatial-tracking=()',
          },
          {
            key: "Cross-Origin-Embedder-Policy-Report-Only",
            value: 'require-corp; report-to="default"',
          },
          {
            key: "Cross-Origin-Opener-Policy-Report-Only",
            value: 'same-origin; report-to="default"',
          },
          {
            key: "Expect-CT",
            value: 'max-age=86400,report-uri="https://cb-software.uriports.com/reports/report"',
          }
        ],
      },
    ];
  },
};
