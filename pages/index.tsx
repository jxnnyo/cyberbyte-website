import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cyberbyte Software</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Cyberbyte Software
        </h1>

      <div className={styles.servicesGrid}>
          <div className={styles.services}>
              <h4>Software Consulting</h4>
              <p>Staring a new project or need help in the middle of an existing one? Reach out and we can share our experience.</p>
          </div>
          <div className={styles.services}>
              <h4>Website Development</h4>
              <p>From custom database structures and admin areas to single page applications we have got it covered.</p>
          </div>
          <div className={styles.services}>
              <h4>Bespoke Hosting</h4>
              <p>We use Kubernetes clusters to ensure our clients apps are fault tolerant and able to handle any traffic spikes.</p>
          </div>
      </div>

      <div className={styles.aboutGrid}>
          <Image
            src="/images/code.jpg"
            alt="code"
            width={500}
            height={500}
          />
          <div className={styles.services}>
              <h2>About</h2>
              <p>Our team of talented software engineers have worked on everything from enterprise billing systems to small e-commerce websites</p>
          </div>
          <div className={styles.flexGrid}>
              <div>
                  <h3>What we love</h3>
                  <p>Python, Django, Postgres, PHP, Wordpress, C#, .NET</p>
              </div>
              <div>
                  <h3>What we are learning</h3>
                  <p>Go, Clojure and Rust</p>
              </div>
          </div>
      </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
