import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Grid } from '../components/Grid';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Slider from '../components/Slider';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Selfcare</title>
        <meta name='description' content='Selfcare Shop' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <main className={styles.content}>
        <Slider />

        <section className={styles.container}>
          <Grid />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
