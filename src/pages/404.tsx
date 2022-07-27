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
        <title>Selfcare - Página não encontrada</title>
        <meta name='description' content='Selfcare Shop' />
        <link rel='icon' href='/favicon.ico' />
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
