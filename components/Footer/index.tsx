import style from './style.module.css';
import { BsInstagram, BsFacebook, BsPaypal } from 'react-icons/bs';
import {FaCcMastercard, FaCcVisa} from 'react-icons/fa';

const socialMediaLinks = [
  {
    href: 'https://instagram.com',
    icon: <BsInstagram />,
  },
  {
    href: 'https://facebook.com',
    icon: <BsFacebook />,
  }
]

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

          <form className={style.form} onSubmit={(e)=> e.preventDefault()}>
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
            {socialMediaLinks.map((element, index)=>(
              <a href={element.href} key={index}>
                {element.icon}
              </a>
            ))}
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