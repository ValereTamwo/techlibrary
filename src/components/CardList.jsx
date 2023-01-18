import React,{useEffect} from 'react'
import CardItem from './CardItem'
import { Swiper, SwiperSlide } from "swiper/react";
import { data,AddTec } from './Redux';
import '../styles.css'
import '../index.css'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles.css';
import { Pagination, Navigation } from 'swiper';


function CardList() {

  useEffect(() => {
    AddTec(data);
    console.log(data);
  },[])
  return (
      <div className='relative'>
        <section className='relative top-[4vh] ml-[40px] '>
          <fieldset className='border-[1px] w-[80vw] h-[70vh] rounded-[20px] p-[20px] mb-[30px]' >
              <legend className='font-[azonix] text-[20px] text-[#333] ml-[30px]'>
                    Data Analist
               </legend>
        <Swiper
              slidesPerView={3}
              spaceBetween={40}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className='mySwiper'
      >
          <SwiperSlide><CardItem/></SwiperSlide>
          <SwiperSlide><CardItem/></SwiperSlide>
          <SwiperSlide><CardItem/></SwiperSlide>
          <SwiperSlide><CardItem/></SwiperSlide>
          <SwiperSlide><CardItem/></SwiperSlide>
          <SwiperSlide><CardItem/></SwiperSlide>
          <SwiperSlide><CardItem/></SwiperSlide>
          <SwiperSlide><CardItem/></SwiperSlide>
          <SwiperSlide><CardItem/></SwiperSlide>
      </Swiper>
                    {/* <CardItem/> */}
        </fieldset>   
        
        <fieldset className='border-[1px] w-[80vw] h-[70vh] rounded-[20px] p-[20px]' >
              <legend className='font-[azonix] text-[20px] text-[#333] ml-[30px]'>
                    Mobile Developper
               </legend>
        <Swiper
              slidesPerView={3}
              spaceBetween={40}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className='mySwiper'
      >
          <SwiperSlide><CardItem/></SwiperSlide>
          <SwiperSlide><CardItem/></SwiperSlide>
          <SwiperSlide><CardItem/></SwiperSlide>
          <SwiperSlide><CardItem/></SwiperSlide>
          <SwiperSlide><CardItem/></SwiperSlide>
          <SwiperSlide><CardItem/></SwiperSlide>
          <SwiperSlide><CardItem/></SwiperSlide>
          <SwiperSlide><CardItem/></SwiperSlide>
          <SwiperSlide><CardItem/></SwiperSlide>
      </Swiper>
                    {/* <CardItem/> */}
              </fieldset>   
        {/* <CardItem/> */}
              </section>
    </div>
  )
}

export default CardList