import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {FaGithub, FaPaypal, FaTwitter} from "react-icons/fa";

export default function Home() {
    return (
        <div className="bg-black h-screen">
            <Head>
                <title>Cyberbyte Software</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"/>
            </Head>

            <main>
{/*<div className="bg-black ">*/}

          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full  ml-auto mr-auto text-center">
                    <h1 className="font-semibold text-5xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                      Cyberbyte Software
                    </h1>
                </div>

              </div>
          </div>
                <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="flex-1">
                    <h2 className="text-white">
                      Software Consulting
                    </h2>
                </div>
                  <div className="flex-1">
                    <h2 className="text-white">
                      Software Consulting
                    </h2>
                </div>
                  <div className="flex-1">
                    <h2 className="text-white">
                      Software Consulting
                    </h2>
                </div>

              </div>
          </div>
                {/*<h1 className={styles.title}>
                    Cyberbyte Software
                </h1>

                <div className={styles.servicesGrid}>
                    <div className={styles.services}>
                        <h4>Software Consulting</h4>
                        <p>Staring a new project or need help in the middle of an existing one? Reach out and we can
                            share our experience.</p>
                    </div>
                    <div className={styles.services}>
                        <h4>Website Development</h4>
                        <p>From custom database structures and admin areas to single page applications we have got it
                            covered.</p>
                    </div>
                    <div className={styles.services}>
                        <h4>Bespoke Hosting</h4>
                        <p>We use Kubernetes clusters to ensure our clients apps are fault tolerant and able to handle
                            any traffic spikes.</p>
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
                        <p>Our team of talented software engineers have worked on everything from enterprise billing
                            systems to small e-commerce websites</p>
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
                </div>*/}
{/*</div>*/}

            </main>

            {/*<footer className={styles.footer}>
                <div className={styles.contact}>
                    <span>Want to chat?</span>
                    <h2>Drop us a message</h2>
                    <a href="mailto:support@cyberbte.org.uk" className={styles.contactButton}>Contact Us</a>
                </div>
                <div>
                    <h4>
                        Our Projects
                    </h4>
                    <h4>
                        Say Hello
                    </h4>
                    <ul>
                        <li><a href="https://github.com/Cyberbyte-Studios" target="_blank"
                               rel="nofollow noopener noreferrer"><FaGithub/></a></li>
                        <li><a href="https://twitter.com/CyberbyteStudio" target="_blank"
                               rel="nofollow noopener noreferrer"><FaTwitter/></a></li>
                        <li><a href="https://www.paypal.me/CyberbyteStudios" target="_blank"
                               rel="nofollow noopener noreferrer"><FaPaypal/></a></li>
                    </ul>
                    <div></div>
                    <p>Copyright &copy; 2021 Cyberbyte Software Ltd. Company Number: <a
                        href="https://beta.companieshouse.gov.uk/company/12691680" target="_blank"
                        rel="nofollow noopener noreferrer">12691680</a> Vat Number: 123.</p>
                </div>
            </footer>*/}
        </div>
    )
}
