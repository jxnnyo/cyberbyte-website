import "../styles/globals.scss";
import 'swiper/css';
import Script from 'next/script'

import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { IntercomProvider } from 'react-use-intercom';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IntercomProvider appId="jsfuplo3" autoBoot>
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
      <Component {...pageProps} />
    </IntercomProvider>
  );
}

export default MyApp;
