import style from './style.module.css';
import { BsStarFill, BsSearch, BsCart2 } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import Link from 'next/link';

export const Navbar = () => {
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