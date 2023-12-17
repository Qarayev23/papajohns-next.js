import Image from 'next/image'
import Link from 'next/link'
import styles from './logo.module.scss'

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link href="/">
                <Image src="/img/pj_logo_web_new.png" fill sizes='250px' alt="PapaJohns logo" />
            </Link>
        </div>
    )
}

export default Logo