import Image from 'next/image';
import React from 'react';
import style from './style.module.css';

export const Banner = () => {
  return (
    <section className={style.bannerSection}>
      <div className={style.imageWrapper}>
        <Image
          src={'/banner.png'}
          layout='responsive'
          width={500}
          height={130}
        />
      </div>
    </section>
  );
};
