import Image from 'next/image';
import style from './style.module.css';

export const Grid = () => {
  return(
    <main className={style.gridWrapper}>
      <section className={style.info}>
        <h1 className={style.infoTitle}>Promoção</h1>
        <span className={style.infoText}>X produtos</span>
      </section>

      <hr />

      <section className={style.grid}>

        <div className={style.card}>
          <Image src={'/remedy.jpg'} width={400} height={300} className={style.image} />
          <h2>Lorem ipsum dolor sit</h2>
          <h3 className={style.cardPrice}>
            R$ <b>50,00</b>
          </h3>
        </div>

        <div className={style.card}>
          <Image src={'/pharma.jpg'} width={400} height={300} className={style.image} />
          <h2>Lorem ipsum dolor sit</h2>
          <h3 className={style.cardPrice}>
            R$ <b>50,00</b>
          </h3>
        </div>

        <div className={style.card}>
          <Image src={'/botanical.jpg'} width={400} height={300} className={style.image} />
          <h2>Lorem ipsum dolor sit</h2>
          <h3 className={style.cardPrice}>
            R$ <b>50,00</b>
          </h3>
        </div>

        <div className={style.card}>
          <Image src={'/botanical.jpg'} width={400} height={300} className={style.image} />
          <h2>Lorem ipsum dolor sit</h2>
          <h3 className={style.cardPrice}>
            R$ <b>50,00</b>
          </h3>
        </div>
        
        <div className={style.card}>
          <Image src={'/botanical.jpg'} width={400} height={300} className={style.image} />
          <h2>Lorem ipsum dolor sit</h2>
          <h3 className={style.cardPrice}>
            R$ <b>50,00</b>
          </h3>
        </div>

      </section>
    </main>
  )
};