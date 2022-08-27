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
        <title>Selfcare | Produtos Naturais</title>
        <meta
          name='description'
          content='Selfcare é uma loja fictícia de produtos naturais voltados à estética, beleza e cuidados pessoais.'
        />
        <meta name='robots' content='follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='author'
          content='Nelson Carvalho | Github: Nelson-DevStack'
        />
        <link rel='canonical' href='/' />
        <link rel='icon' type='image/png' href='/favicon.png' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
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
