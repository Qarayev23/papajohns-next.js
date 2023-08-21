import Link from 'next/link'
import styles from './index.module.scss'
import { FaUserAlt } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import Logo from './logo/logo';
import Basket from './basket/basket';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className={styles["header"]}>
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
      {/*
    <div className="header-bottom">
      <ul>
        <li><a href="#">KAMPANİYALAR</a></li>
        <li><a href="#">PAPADİAS</a></li>
        <li><a href="#">PİZZA</a></li>
        <li><a href="#">QƏLYANALTI</a></li>
        <li><a href="#">SALAT</a></li>
        <li><a href="#">PASTA</a></li>
        <li><a href="#">İÇKİ</a></li>
        <li><a href="#">DESERT</a></li>
        <li><a href="#">SOUS</a></li>
      </ul>
    </div> */}
    </header>
  )
}

export default Navbar