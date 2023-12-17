'use client'

import Image from 'next/image';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './campaigns.module.scss';
import Link from 'next/link';
import { CampaignProps } from '@/types';

const Campaigns = ({ data }: { data: CampaignProps[] }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}>
        {
          data.map((data: CampaignProps) => (
            <SwiperSlide key={data.id} className={styles.campaigns__slide}>
              <Link href={"/promo/" + data.id}>
                <Image src={data.img} alt={data.title} fill priority />
              </Link>
            </SwiperSlide>
          ))
        }
    </Swiper>
  )
}

export default Campaigns