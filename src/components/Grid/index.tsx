import Image from 'next/image';
import Link from 'next/link';
import { Products } from '../../types/Products';
import style from './style.module.css';

const products: Products[] = [
  {
    title: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet consectetur adispicing',
    image: 'remedy.jpg',
    price: 50.00,
  },
  {
    title: 'Bottle',
    description: 'This is a bottle',
    image: 'pharma.jpg',
    price: 35.50,
  },
  {
    title: 'Botanical Glass',
    description: 'Botanical Glass to help you',
    image: 'botanical.jpg',
    price: 35.25,
  },
]

export const Grid = () => {
  return(
    <main className={style.gridWrapper}>
      <section className={style.info}>
        <h1 className={style.infoTitle}>Promoção</h1>
        <span className={style.infoText}>{products.length} produtos</span>
      </section>

      <hr className={style.separator} />

      <section className={style.grid}>

        {products.map((product, index)=> (
          <div className={style.cardWrapper} key={index}>
            <Link
              href={{
                pathname: `/produto/${product.title}`,
                query: { image: product.image, description: product.description, price: product.price },
              }}
            >
              <div className={style.card}>
                <Image src={`/assets/${product.image}`} width={450} height={350} className={style.image} objectFit="cover" />

                <div className={style.cardContent}>
                  <h2>{product.title}</h2>
                  <h3 className={style.cardPrice}>
                    R$ <b>{product.price.toFixed(2)}</b>
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        ))}        

      </section>
    </main>
  )
};