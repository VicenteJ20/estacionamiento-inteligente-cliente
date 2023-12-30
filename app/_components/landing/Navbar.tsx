'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

const NavbarItems = [
  {
    title: 'Inicio',
    href: '/'
  },
  {
    title: 'Características',
    href: '/caracteristicas'
  },
  {
    title: 'FAQ',
    href: '/preguntas-frecuentes'
  }
]


const NavbarLanding = () => {

  return (
    <section className={`fixed z-40 left-0 top-0 right-0 max-h-20 py-4 px-8 backdrop-blur-sm bg-opacity-90 bg-stone-950`}>
      <nav className='max-w-7xl mx-auto flex flex-row gap-4 justify-between items-center'>
        <header>
          <h2 className='text-xl font-semibold'>
            <Link href='/' className='hover:text-cyan-600 transition-all duration-300 ease-in-out text-white'>
              Smart
              <span className='text-cyan-600'>Parking</span>
            </Link>
          </h2>
        </header>
        <ul className='flex flex-row gap-4 items-center'>
          {
            NavbarItems && NavbarItems.map((item: any) => (
              <li key={item.title} className='font-medium'>
                <Link href={item.href} className='hover:text-cyan-600 text-white transition-all duration-300 ease-in-out'>
                  {item.title}
                </Link>
              </li>
            ))
          }
          <li className='flex flex-row gap-3 items-center'>
            <button className='text-white border border-zinc-400 py-2 px-4 rounded-sm transition-all duration-300 ease-in-out hover:bg-white hover:text-zinc-900'>Registrarse</button>
            <button className='bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-sm transition-all duration-300 ease-in-out'>
              Iniciar sesión
            </button>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export { NavbarLanding }