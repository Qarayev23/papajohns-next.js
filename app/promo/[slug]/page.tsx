import Image from 'next/image'
import styles from './promoDetail.module.scss'
import { fetchCampaign } from '@/utils/api'
import { CampaignProps } from '@/types';
import type { Metadata } from 'next'

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const data: CampaignProps = await fetchCampaign(params.slug)

    return {
        title: `Papa Johns | ${data.title}`,
    }
}

export default async function Page({ params }: { params: { slug: string } }) {
    const data: CampaignProps = await fetchCampaign(params.slug)

    return (
        <section>
            <div className="g-container">
                <div className={styles.campaign__detail}>
                    <div className={styles.campaign__detail__img}>
                        <Image src={data.img} layout="fill" alt={data.title} />
                    </div>
                    <div className={styles.campaign__detail__content}>
                        <h1 className='g-title mb-9'>{data.title}</h1>
                        <p className={styles.campaign__detail__text}>
                            {data.text}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
