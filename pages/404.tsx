import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Head>
        <title>404 Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          404 Not found
        </h1>
      </main>
    </div>
  )
}
