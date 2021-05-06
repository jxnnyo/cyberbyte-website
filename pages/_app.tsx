import '../styles/globals.scss'

import { Container } from 'next/app'
import type { AppProps } from 'next/app'
import {DefaultSeo} from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return <Container>
        <DefaultSeo
          defaultTitle="Cyberbyte Software"
          titleTemplate="%s | Cyberbyte Software"
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: 'https://cyberbyte.studios/',
            site_name: 'SiteName',
          }}
          twitter={{
            handle: '@CyberbyteSoft',
            site: '@CyberbyteSoft',
            cardType: 'summary_large_image',
          }}
        />
        <Component {...pageProps} />
      </Container>
}

export default MyApp
