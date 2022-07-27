import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Products } from '../../data/Products';
import style from './style.module.css';

export const Grid = () => {
  return (
    <main className={style.gridWrapper}>
      <section className={style.info}>
        <h1 className={style.infoTitle}>Promoção</h1>
        <span className={style.infoText}>{Products.length} produtos</span>
      </section>

      <hr className={style.separator} />

      <section className={style.grid}>
        {Products.map((product, index) => (
          <div className={style.cardWrapper} key={index} id='div'>
            <Link
              href={{
                pathname: `/produto/${product.title}`,
                query: {
                  id: product.id,
                  image: product.image,
                  description: product.description,
                  price: product.price,
                },
              }}
            >
              <div className={style.card}>
                <Image
                  src={`/assets/${product.image}`}
                  width={450}
                  height={350}
                  className={style.image}
                  objectFit='cover'
                />

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
  );
};
