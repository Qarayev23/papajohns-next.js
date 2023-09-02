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
import Skelton from '@/components/skeleton/rowSkleton';

const Page = () => {
  const [data, setData] = useState<CampaignProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const { data } = await API.get("campaigns");
        setData(data)
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }
    getData()
  }, [])

  if (loading) return <Skelton />

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
                  <Image src={item.img} alt={item.title} layout="fill" />
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