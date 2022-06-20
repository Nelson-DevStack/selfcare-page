import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import homeStyle from '../../styles/Home.module.css';
import style from './style.module.css';
import Link from "next/link";

export const NoProduct = () => {
  return (
    <>
      <Navbar />
        <main className={homeStyle.content2}>        
          <section className={homeStyle.container2}>
            <div className={style.contentWrapper}>
              <h1 className={style.productTitle}>
                Ops, não temos esse produto
              </h1>
              <div className={style.link}>
                <Link href={'/'}>
                  Clique aqui para ir à Página Inicial
                </Link>
              </div>
            </div>
          </section>
        </main>
      <Footer />
    </>
  )
};