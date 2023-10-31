'use client'

import Image from "next/image"
import { CaruselInfoSignIn } from "@/app/_dictionaries/es-CL"
import { BrandInfo } from "@/app/_dictionaries/es-CL"

const CarouselAuth = () => {
  const { title, description, imageUrl } = CaruselInfoSignIn[0]
  const { title: titleBrand, icon } = BrandInfo
  return (
    <section className='bg-blue-500 lg:p-10 rounded-l-2xl rounded-r hidden md:flex flex-col gap-4 justify-between items-center'>
      <header className='flex flex-row gap-4 items-center justify-self-start w-full text-white select-none'>
        <Image src={icon} alt='logo' width={52} height={52} className='invert' />
        <h3 className='text-xl xl:text-2xl font-semibold'>{titleBrand}</h3>
      </header>
      <article className="flex flex-col gap-2 text-center justify-center items-center">
        <figure className='max-w-[75%] 2xl:max-w-[92%]'>
          <Image src={imageUrl} alt='promotional-image' width={1000} height={900} className='max-w-full' />
        </figure>
        <div className='flex flex-col gap-3 items-center text-center px-5 2xl:px-20'>
          <h2 className='text-white font-semibold text-2xl xl:text-3xl'>{title}</h2>
          <p className='text-white font-normal text-base sm:text-lg'>{description}</p>
        </div>
      </article>
    </section>
  )
}

export { CarouselAuth }