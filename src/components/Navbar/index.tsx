import { BsStarFill, BsSearch, BsCart2 } from 'react-icons/bs';
import { motion, Variants } from 'framer-motion';
import style from './style.module.css';
import { BiUser } from 'react-icons/bi';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const { itemsInCart, removeItem } = useContext(CartContext);
  const [showMenu, setShowMenu] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const isShow = localStorage.getItem('showMenu');
    if (!isShow) return;
    setShowMenu(JSON.parse(isShow));
  }, [showMenu]);

  useEffect(() => {
    console.log('calculatetoal')
    calculateTotal();
  }, [itemsInCart]);

  const handleClick = () => {
    setShowMenu(!showMenu);
    localStorage.setItem('showMenu', JSON.stringify(!showMenu));
  };

  const calculateTotal = () => {
    let sum = 0;

    const calc = itemsInCart.forEach((element) => {
      console.log(typeof element.price);
      const num = Number(element.price);
      sum += num;
    });
    setTotal(sum);
    console.log(sum);
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
          <li className={`${style.navItem} ${style.cartWrapper}`} onClick={handleClick}>
            <BsCart2 />
            {itemsInCart.length}
          </li>
        </nav>

        <motion.div
          className={style.cartMenu}
          initial={{ x: '120%', transitionDuration: '120ms' }}
          animate={{ x: showMenu ? 0 : '120%', transitionDuration: '120ms' }}
        >
          <div className={style.totalPrice}>
            <h2>Total: R$ {total.toFixed(2)}</h2>
          </div>

          {itemsInCart.map((item, index) => (
            <div className={style.cartItem} key={index}>
              <div>
                <h3>{item.title}</h3>
                <p>R$ {item.price}</p>
              </div>
              <div className={style.iconWrapper}
                onClick={() => removeItem(item.title)}
              >
                <FaTimes color={'#e06b6b'} fontSize={`1.4em`}/>
              </div>
            </div>
          ))}

        </motion.div>
      </div>
    </header>
  )
};