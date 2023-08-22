import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.scss'
import { FaFacebookF, FaInstagram, FaTripadvisor, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__content}>
                    <ul className={styles.footer__list}>
                        <li className={styles.footer__item}>
                            <Link href="" className={styles.footer__link}>Haqqımızda</Link>
                        </li>
                        <li className={styles.footer__item}>
                            <Link href="" className={styles.footer__link}>Sual-Cavab</Link>
                        </li>
                        <li className={styles.footer__item}>
                            <Link href="" className={styles.footer__link}>Karyera</Link>
                        </li>
                        <li className={styles.footer__item}>
                            <Link href="" className={styles.footer__link}>Xəmir</Link>
                        </li>
                        <li className={styles.footer__item}>
                            <Link href="" className={styles.footer__link}>Papa Talk</Link>
                        </li>
                    </ul>
                    <div className={styles.footer__photos}>
                        <Image src="/img/download.png" fill alt="img" />
                    </div>
                    <ul className={styles.footer__icons}>
                        <li className={styles.footer__icons__item}>
                            <Link href="/" className={styles.footer__icons__link}>
                                <FaFacebookF />
                            </Link>
                        </li>
                        <li className={styles.footer__icons__item}>
                            <Link href="/" className={styles.footer__icons__link}>
                                <FaTwitter />
                            </Link>
                        </li>
                        <li className={styles.footer__icons__item}>
                            <Link href="/" className={styles.footer__icons__link}>
                                <FaInstagram />
                            </Link>
                        </li>
                        <li className={styles.footer__icons__item}>
                            <Link href="/" className={styles.footer__icons__link}>
                                <FaTripadvisor />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer