import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { BsCart4 } from 'react-icons/bs';

import { Footer } from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { NoProduct } from '../../components/NoProduct';
import homeStyle from '../../styles/Home.module.css';
import style from '../../styles/ProductPage.module.css';
import { CartContext } from '../../contexts/CartContext';
import { ProductsType } from '../../types/ProductsType';

const ProductPage = () => {
  const router = useRouter();
  const data = router.query as unknown as ProductsType;
  const { id, title, description, image, price } = data;
  const { itemsInCart, setItem } = useContext(CartContext);

  if (!title || !description || !image || !price) {
    return <NoProduct />;
  }

  const isItemInCart = itemsInCart.filter((item) => item.title === title);
  return (
    <>
      <Head>
        <title>Selfcare - {title}</title>
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
          <motion.div
            className={style.productPresentation}
            initial={{ x: -15, opacity: 0.8, transitionDuration: '100ms' }}
            animate={{ x: 0, opacity: 1, transitionDuration: '100ms' }}
          >
            <div className={style.imageWrapper}>
              <Image
                src={`/assets/${image}`}
                width={450}
                height={350}
                objectFit='cover'
                alt={'Product Image'}
              />
            </div>

            <div className={style.productInfo}>
              <h1 className={style.productTitle}>{title}</h1>
              <h2 className={style.productPrice}>
                Preço:
                <b className={style.greenValue}>{Number(price).toFixed(2)}</b>
              </h2>

              <p className={style.productDescription}>{description}</p>

              <div className={style.buttonsWrapper}>
                {isItemInCart.length > 0 ? (
                  <button className={`${style.button} ${style.orange}`}>
                    Já está no Carrinho
                    <BsCart4 />
                  </button>
                ) : (
                  <button
                    className={`${style.button} ${style.orange}`}
                    onClick={() =>
                      setItem({
                        title: title,
                        description,
                        price: price,
                        image: image,
                        id,
                      })
                    }
                  >
                    Adicionar no Carrinho <BsCart4 />
                  </button>
                )}

                <button className={`${style.button} ${style.green}`}>
                  Comprar
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
