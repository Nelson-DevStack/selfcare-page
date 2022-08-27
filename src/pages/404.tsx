import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import homeStyle from '../styles/Home.module.css';
import style from '../styles/NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Selfcare - Ops... Página não encontrada</title>
        <meta name='description' content='Selfcare Shop' />
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
      <main className={homeStyle.content2}>
        <section className={homeStyle.container2}>
          <div className={style.contentWrapper}>
            <h1 className={style.productTitle}>
              Erro 404 | Essa página não foi encontrada
            </h1>
            <div className={style.link}>
              <Link href={'/'}>Clique aqui para ir à Página Inicial</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default NotFoundPage;
