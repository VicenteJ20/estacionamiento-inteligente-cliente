'use client'

import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { CaruselInfoSignIn, CarouselInfo } from "@/app/_dictionaries/es-CL"
import { BrandInfo } from "@/app/_dictionaries/es-CL"
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const CarouselAuth = () => {

  const { title: titleBrand, icon } = BrandInfo

  return (
    <section className='bg-zinc-950 lg:p-10 rounded-l-2xl rounded-r hidden lg:flex flex-col gap-4 relative items-center justify-center pt-52'>
      <header className='flex flex-row gap-4 items-center justify-self-start w-full text-white select-none absolute top-10 left-10'>
        <Image src={icon} alt='logo' width={38} height={38} className='invert' />
        <h3 className='text-lg xl:text-xl font-semibold'>{titleBrand}</h3>
      </header>
      <Swiper
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
        pagination={{ type: 'fraction', clickable: true }}
        loop
        className='container top-10 bottom-0 pb-10'
        modules={[Navigation, Pagination, EffectFade]}
        effect='flip'
      >
        {
          CarouselInfo && CarouselInfo.length > 0 && CarouselInfo.map((item: any) => (
            <SwiperSlide key={item.title}>
              <div className='flex flex-col text-center gap-12 items-center justify-center text-white my-auto'>
                <NextImage
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={600}
                  className='rounded-sm max-w-full block bg-cover h-96'
                />
                <div className='flex flex-col gap-4'>
                  <h3 className='xl:text-2xl font-semibold '>{item.title}</h3>
                  <p className='text-center'>{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}

export { CarouselAuth }