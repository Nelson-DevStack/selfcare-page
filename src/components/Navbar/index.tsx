import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsStarFill, BsSearch, BsCart2 } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';
import style from './style.module.css';
import { CartContext } from '../../contexts/CartContext';

function Navbar() {
  const { itemsInCart, removeItem } = useContext(CartContext);
  const [showMenu, setShowMenu] = useState(false);
  const [total, setTotal] = useState(0);
  console.log(itemsInCart[0]);

  useEffect(() => {
    const isShow = localStorage.getItem('showMenu');
    if (!isShow) return;
    setShowMenu(JSON.parse(isShow));
  }, [showMenu]);

  const calculateTotal = () => {
    let sum = 0;

    itemsInCart.forEach((element) => {
      const num = Number(element.price);
      sum += num;
    });
    setTotal(sum);
  };

  useEffect(() => {
    calculateTotal();
  }, [itemsInCart]);

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
              <BsSearch />
            </a>
          </li>
          <li className={style.navItem}>
            <a>
              <BiUser />
            </a>
          </li>
          <li
            className={`${style.navItem} ${style.cartWrapper}`}
            onClick={handleClick}
          >
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
                <p>R$ {Number(item.price).toFixed(2)}</p>
              </div>
              <div
                className={style.iconWrapper}
                onClick={() => removeItem(item.id)}
              >
                <FaTimes color={'#e06b6b'} fontSize={`1.4em`} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </header>
  );
}

export default Navbar;
