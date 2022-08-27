import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper';
import { Products } from '../../data/Products';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Slider = () => {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
      >
        {Products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className={styles.imageWrapper}>
              <Image
                src={`/assets/${product.image}`}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
