import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import { CarouselItem } from './CarouselItem';


import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import { Box } from '@chakra-ui/react';

SwiperCore.use([Pagination, Navigation])

export function SwiperCarousel() {
  return (
    <Swiper slidesPerView={1} loop={true} pagination={{
        "clickable": true
      }} navigation={true} style={{ width: '100%', height: '450px' }}>
      <SwiperSlide>
        <Link href="/continents/europe">
          <CarouselItem 
            continent="Europa" 
            description="O continente mais antigo."
            url="/images/europe.jpeg"
          />
        </Link>
      </SwiperSlide>
      
      <SwiperSlide>
        <Link href="/continents/asia">
          <CarouselItem 
            continent="Ásia" 
            description="O continente mais populoso."
            url="/images/europe.jpeg"
          />
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link href="/continents/africa">
          <CarouselItem 
            continent="África" 
            description="O continente mais diverso."
            url="/images/europe.jpeg"
          />
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link href="/continents/north-america">
          <CarouselItem 
            continent="América do Norte" 
            description="O continente mais tecnológico."
            url="/images/europe.jpeg"
          />
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link href="/continents/south-america">
          <CarouselItem 
            continent="América do Sul" 
            description="O continente mais bonito."
            url="/images/europe.jpeg"
          />
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link href="/continents/oceania">
          <CarouselItem 
            continent="Oceania" 
            description="O continente mais isolado."
            url="/images/europe.jpeg"
          />
        </Link>
      </SwiperSlide>
    </Swiper>
  )
}