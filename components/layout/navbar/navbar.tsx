import Link from 'next/link'
import styles from './navbar.module.scss'
import { FaUserAlt } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import Logo from './logo/logo';
import Basket from './basket/basket';
import Image from 'next/image';
import { navLinks } from '@/constants';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className="g-container">
        <div className={styles.header__top}>
          <Logo />
          <ul className={styles.header__top__left}>
            <li className={styles.header__top__item}>
              <Link href="" className={styles.header__top__link}>Restoranlar</Link>
            </li>
            <li className={styles.header__top__item}>
              <Link href="" className={styles.header__top__link}>PapaBonus</Link>
            </li>
          </ul>
          <div className={styles.header__top__right}>
            <button className={styles.lang}>
              <Image src="/img/flag_az.png" width={33} height={33} alt="flag" />
              <span>Azərbaycanca</span>
              <AiFillCaretDown className={styles.lang__icon} />
            </button>
            <button className={styles.register}>Giriş/Qeydiyyat</button>
            <Basket />
          </div>
        </div>

        <div className={styles.header__mobile}>
          <Logo />
          <button className={styles.lang}>
            <Image src="/img/flag_az.png" width={25} height={25} alt="flag" />
            <span>Az</span>
          </button>
          <Link href="/" className={styles.register}>
            <FaUserAlt className={styles.register__icon} />
            <span>Giriş</span>
          </Link>
          <Basket />
        </div>
      </div>
      <nav className={styles.nav}>
        <div className="g-container">
          <ul className={styles.nav__list}>
            {navLinks.map(item => {
              return (
                <li className={styles.nav__item}>
                  <Link href={item.path} className={styles.nav__link}>{item.label}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar