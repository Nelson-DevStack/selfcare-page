import Image from 'next/image';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import homeStyle from '../../styles/Home.module.css';
import style from '../../styles/ProductPage.module.css';

const ProductPage = () => {
  return (
    <>
      <Navbar />

      <main className={homeStyle.topMargin}>
        <section className={homeStyle.container}>

          <div className={style.productPresentation}>
            <div className={style.imageWrapper}>
              <Image src={'/assets/remedy.jpg'} width={450} height={350} objectFit="cover" />
            </div>
            
            <div className={style.productInfo}>
              <h1 className={style.productTitle}>Lorem ipsum dolor sit amet</h1>
              <h2 className={style.productPrice}>
                <b>Preço: </b>
                R$ 50,00
              </h2>

              <p className={style.productDescription}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium nam voluptatem tenetur quia.
              </p>

              <div className={style.buttonsWrapper}>
                <button className={`${style.button} ${style.orange}`}>
                  Adicionar no Carrinho
                </button>

                <button className={`${style.button} ${style.green}`}>
                  Comprar
                </button>
              </div>

            </div>
          </div>

        </section>

        <Footer />
      </main>
    </>
  )
};

export default ProductPage;