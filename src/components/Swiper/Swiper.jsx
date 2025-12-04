import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import p1 from "../../assets/Pet-Careffh.webp"
import p2 from "../../assets/dogs-in-line-stockcake.jpg"
import p3 from "../../assets/vet-min.webp"
import p4 from "../../assets/pexels-chevanon-1108099.jpg"

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        pagination={{ dynamicBullets: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-11/12 lg:w-10/12 mx-auto"
      >
        <SwiperSlide><img className='h-[300px] md:h-[500px] lg:h-[700px] w-full' src={p1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[300px] md:h-[500px] lg:h-[700px] w-full' src={p2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[300px] md:h-[500px] lg:h-[700px] w-full' src={p3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[300px] md:h-[500px] lg:h-[700px] w-full' src={p4} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
