import "../styles/globals.scss";

import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
    </>
  );
}

export default MyApp;
