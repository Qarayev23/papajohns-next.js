'use client'
import Image from 'next/image';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './homePage.module.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { API } from '@/utils/api';
import { CampaignProps } from '@/types';

const Page = () => {
  let [data, setData] = useState<CampaignProps[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await API.get("campaigns");
        setData(data)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [])

  return (
    <section>
      <div className="g-container">
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
            data.map(item => (
              <SwiperSlide key={item.id} className={styles.campaigns__slide}>
                <Link href={"/promo/" + item.id}>
                  <Image src={item.img} alt={item.title} layout="fill" priority={true} />
                </Link>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  );
};

export default Page