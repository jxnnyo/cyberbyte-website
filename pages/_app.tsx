import "../styles/globals.scss";
import "swiper/css";
import Script from "next/script";

import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-K8GX3SWWDX"
        strategy="afterInteractive"
      />
      <DefaultSeo
        defaultTitle="Cyberbyte Software"
        titleTemplate="%s | Cyberbyte Software"
        openGraph={{
          type: "website",
          locale: "en_GB",
          url: "https://cyberbyte.software/",
          site_name: "Cyberbyte Software",
        }}
        twitter={{
          handle: "@CyberbyteSoft",
          site: "@CyberbyteSoft",
          cardType: "summary_large_image",
        }}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', 'GTM-W7NXK3T');
            `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
