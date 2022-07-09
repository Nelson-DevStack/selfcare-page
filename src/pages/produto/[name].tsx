import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { BsCart4 } from 'react-icons/bs';

import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { NoProduct } from '../../components/NoProduct';
import homeStyle from '../../styles/Home.module.css';
import style from '../../styles/ProductPage.module.css';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { ProductsType } from '../../types/ProductsType';

const ProductPage = () => {
  const router = useRouter();
  const data = router.query;
  const { name, description, image, price } = data;
  const productPrice = Number(price);
  const { itemsInCart, setItem } = useContext(CartContext);
  
  if(!name || !description || !image || !price ) {
    return (
      <NoProduct />
    )
  };

  function handleClick() {
    console.log('ckic')
  }


  return (
    <>
      <Head>
        <title>Selfcare - {name}</title>
        <meta name="description" content="Selfcare Shop" />
        <link rel="icon" href="/favicon.ico" />
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
                objectFit="cover"
                alt={'Product Image'}
              />
            </div>
            
            <div className={style.productInfo}>
              <h1 className={style.productTitle}>
                {name}
              </h1>
              <h2 className={style.productPrice}>
                Preço:
                <b className={style.greenValue}>
                  {productPrice.toFixed(2)}
                </b>
              </h2>

              <p className={style.productDescription}>
                {description}
              </p>

              <div className={style.buttonsWrapper}>
                <button
                  className={`${style.button} ${style.orange}`}
                  onClick={() => setItem({title: name, price: productPrice.toFixed(2)})}
                >
                  Adicionar no Carrinho <BsCart4 />
                </button>

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
  )
};

export default ProductPage;