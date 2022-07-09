import style from './style.module.css';
import { BsStarFill, BsSearch, BsCart2 } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export const Navbar = () => {
  const { itemsInCart, setItem, check } = useContext(CartContext);
  console.log(itemsInCart);

  return (
    <header className={style.navbar}>
      <div className={style.navbarContainer}>
        <Link href={'/'}>
          <div className={style.navbarBrand}>
            <BsStarFill />
            selfcare
          </div>
        </Link>

        <div>
          <p>{itemsInCart.length}</p>
          <button
            onClick={() => setItem({title: 'Oi' , price: 10})}
          >
            setar item
          </button>

        </div>

        <nav className={style.navbarLinks}>
          <li className={style.navItem}>
            <a>
              <BsSearch/>
            </a>
          </li>
          <li className={style.navItem}>
            <a>
              <BiUser />
            </a>
          </li>
          <li className={style.navItem}>
            <a>
              <BsCart2/>
            </a>
          </li>
        </nav>
      </div>
    </header>
  )
};