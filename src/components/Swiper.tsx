import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import { CarouselItem } from './CarouselItem';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

SwiperCore.use([Pagination, Navigation])

export function SwiperCarousel() {
  return (
    <Swiper slidesPerView={1} loop={true} pagination={{
        "clickable": true
      }} navigation={true} style={{ width: '100%', height: '100%' }}>
      <SwiperSlide>
        <CarouselItem 
          continent="Europa" 
          description="O continente mais antigo."
          url="/images/europe.jpeg"
          slug="europe"
        />
      </SwiperSlide>
      
      <SwiperSlide>
        <CarouselItem 
          continent="Ásia" 
          description="O continente mais populoso."
          url="/images/asia.jpeg"
          slug="asia"
        />
      </SwiperSlide>

      <SwiperSlide>
        <CarouselItem 
          continent="África" 
          description="O continente mais diverso."
          url="/images/africa.jpeg"
          slug="africa"
        />
      </SwiperSlide>

      <SwiperSlide>
        <CarouselItem 
          continent="América do Norte" 
          description="O continente mais tecnológico."
          url="/images/north-america.jpeg"
          slug="north-america"
        />
      </SwiperSlide>

      <SwiperSlide>
        <CarouselItem 
          continent="América do Sul" 
          description="O continente mais bonito."
          url="/images/south-america.jpeg"
          slug="south-america"
        />
      </SwiperSlide>

      <SwiperSlide>
        <CarouselItem 
          continent="Oceania" 
          description="O continente mais isolado."
          url="/images/oceania.jpeg"
          slug="oceania"
        />
      </SwiperSlide>
    </Swiper>
  )
}