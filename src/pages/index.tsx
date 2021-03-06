import type { NextPage } from 'next'
import Head from 'next/head';
import { Banner } from '../components/Banner';
import { Footer } from '../components/Footer';
import { Grid } from '../components/Grid';
import { Navbar } from '../components/Navbar';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Selfcare</title>
        <meta name="description" content="Selfcare Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.content}>
        <Banner />

        <section className={styles.container}>
          <Grid />
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Home
