import { BsStarFill, BsSearch, BsCart2 } from 'react-icons/bs';
import { motion, Variants } from 'framer-motion';
import style from './style.module.css';
import { BiUser } from 'react-icons/bi';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';

export const Navbar = () => {
  const { itemsInCart, setItem, check } = useContext(CartContext);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const isShow = localStorage.getItem('showMenu');
    if (!isShow) return;
    setShowMenu(JSON.parse(isShow));

  }, [showMenu])

  const variants: Variants = {
    open: { x: 0, transitionDuration: '120ms' },
    closed: { x: '120%', transitionDuration: '200ms' }
  }

  const handleClick = () => {
    setShowMenu(!showMenu);
    localStorage.setItem('showMenu', JSON.stringify(!showMenu));
  };

  return (
    <header className={style.navbar}>
      <div className={style.navbarContainer}>
        <Link href={'/'}>
          <div className={style.navbarBrand}>
            <BsStarFill />
            selfcare
          </div>
        </Link>

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
          <li className={style.navItem} onClick={handleClick}>
              <BsCart2/>
              {itemsInCart.length}
          </li>
        </nav>

        <motion.div
          className={style.cartMenu}
          animate={!showMenu ? 'closed' : 'open'}
          variants={variants}
        >
          {itemsInCart.map((item, index) => (
            <div className={style.cartItem} key={index}>
              <h3>{item.title}</h3>
              <p>R$ {item.price}</p>
            </div>
          ))}

          <div className={style.totalPrice}>
            <h2>Total: R$ 100</h2>
          </div>

        </motion.div>
      </div>
    </header>
  )
};