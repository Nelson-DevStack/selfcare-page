import style from './style.module.css';
import { BsInstagram, BsFacebook, BsPaypal } from 'react-icons/bs';
import {FaCcMastercard, FaCcVisa} from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.flex}>

          <nav className={style.links}>
            <li>
              <a>Contato</a>
            </li>
            <li>
              <a>Termos de Serviço</a>
            </li>
            <li>
              <a>Política de Privacidade</a>
            </li>
            <li>
              <a>Cancelamento, troca e reembolso</a>
            </li>
          </nav>

          <form className={style.form}>
            <h3 className={style.formTitle}>
              Newsletter
            </h3>
            <input type="text" placeholder={"Digite seu melhor e-mail"} />
            <button>Inscrever</button>
          </form>

        </div>

      </div>

      <div className={style.footerBottom}>
        <div className={style.bottomWrapper}>
          <div className={style.socialMedia}>
            <a>
              <BsInstagram />
            </a>
            <a>
              <BsFacebook />
            </a>
          </div>

          <div className={style.paymentMethods}>
            <FaCcMastercard />
            <FaCcVisa />
            <BsPaypal />
          </div>

        </div>
      </div>

    </footer>
  )
};