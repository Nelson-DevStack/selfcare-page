import Image from 'next/image';
import { useRouter } from 'next/router';
import { Footer } from '../../src/components/Footer';
import { Navbar } from '../../src/components/Navbar';
import homeStyle from '../../styles/Home.module.css';
import style from '../../styles/ProductPage.module.css';

const ProductPage = () => {
  const router = useRouter();
  const data = router.query;
  const productTitle = data.name;
  const productDesc = data.description;
  const productImage = data.image;
  const productPrice = Number(data.price);

  return (
    <>
      <Navbar />

      <main className={homeStyle.content2}>
        
        <section className={homeStyle.container2}>

          <div className={style.productPresentation}>
            <div className={style.imageWrapper}>
              <Image src={`/assets/${productImage}`} width={450} height={350} objectFit="cover" />
            </div>
            
            <div className={style.productInfo}>
              <h1 className={style.productTitle}>
                {productTitle}
              </h1>
              <h2 className={style.productPrice}>
                Preço:
                <b className={style.greenValue}>
                  {productPrice.toFixed(2)}
                </b>
              </h2>

              <p className={style.productDescription}>
                {productDesc}
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

      </main>

      <Footer />
    </>
  )
};

export default ProductPage;