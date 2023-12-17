import Image from 'next/image'
import styles from './promo.module.scss'
import Link from 'next/link'
import { fetchCampaigns } from '@/utils/api'
import { CampaignProps } from '@/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Papa Johns | Promo',
}

const Page = async () => {
  const data = await fetchCampaigns()

  return (
    <section>
      <div className="g-container">
        <h1 className="g-title mt-7">Kampaniyalar</h1>
        <div className={styles.campaign}>
          {data.map((item: CampaignProps) => (
            <div className={styles.campaign__item} key={item.id}>
              <div className={styles.campaign__img}>
                <Image
                  src={item.img}
                  fill
                  sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  alt={item.title} />
              </div>
              <p className={styles.campaign__text}>{item.title}</p>
              <Link href={"/promo/" + item.id} className='g-button'>ƏTRAFLI MƏLUMAT</Link>
            </div>
          )
          )}
        </div>
      </div>
    </section>
  )
}

export default Page