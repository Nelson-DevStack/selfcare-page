import Image from 'next/image';
import { useRouter } from 'next/router';
import { BsCart4 } from 'react-icons/bs';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { NoProduct } from '../../components/NoProduct';
import homeStyle from '../../styles/Home.module.css';
import style from '../../styles/ProductPage.module.css';

const ProductPage = () => {
  const router = useRouter();
  const data = router.query;
  const { name, description, image, price } = data;
  const productPrice = Number(price);
  
  if(!name || !description || !image || !price ) {
   console.log('Produto inválido');
    return (
      <NoProduct />
    )
  };
  

  return (
    <>
      <Navbar />

      <main className={homeStyle.content2}>
        
        <section className={homeStyle.container2}>

          <div className={style.productPresentation}>
            <div className={style.imageWrapper}>
              <Image src={`/assets/${image}`} width={450} height={350} objectFit="cover" />
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
                <button className={`${style.button} ${style.orange}`}>
                  Adicionar no Carrinho <BsCart4 />
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