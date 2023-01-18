import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import '../styles.css'
import '../index.css'
import CardItem from './CardItem';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles.css';
import { Pagination, Navigation } from 'swiper';

export default function Fieldset(props) {
    return (
        
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
                {
                    props.data.map((data) => {
                        return ( 
                                <SwiperSlide>
                                      <CardItem data />
                                </SwiperSlide>
                    )

                    })
                }
ta
      </Swiper>
        </fieldset>   
  )
}
