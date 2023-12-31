import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.scss'
import { FaFacebookF, FaInstagram, FaTripadvisor, FaTwitter } from "react-icons/fa";
import { footerLinks } from '@/constants';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="g-container">
                <div className={styles.footer__content}>
                    <ul className={styles.footer__list}>
                        {
                            footerLinks.map((item, index) => (
                                <li key={index} className={styles.footer__item}>
                                    <Link href={item.path} className={styles.footer__link}>{item.label}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className={styles.footer__photos}>
                        <Image src="/img/footer-images-az-AZ.png" fill sizes='280px' alt="img" />
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