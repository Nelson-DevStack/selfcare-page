import Image from 'next/image';
import Link from 'next/link';
import style from './style.module.css';

const products = [
  {
    title: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet consectetur adispicing',
    image: 'remedy.jpg',
  },
  {
    title: 'Bottle',
    description: 'This is a bottle',
    image: 'pharma.jpg',
  },
]

export const Grid = () => {
  return(
    <main className={style.gridWrapper}>
      <section className={style.info}>
        <h1 className={style.infoTitle}>Promoção</h1>
        <span className={style.infoText}>{products.length} produtos</span>
      </section>

      <hr />

      <section className={style.grid}>

        {products.map((product, index)=> (
          <Link
            key={index}
            href={{
              pathname: `/produto/${product.title}`,
              query: { description: product.description },
            }}
          >
            <div className={style.card}>
              <Image src={`/assets/${product.image}`} width={450} height={350} className={style.image} objectFit="cover" />
              <h2>{product.title}</h2>
              <h3 className={style.cardPrice}>
                R$ <b>50,00</b>
              </h3>
            </div>
          </Link>
        ))}        

      </section>
    </main>
  )
};