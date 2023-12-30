import Link from "next/link"
import { HeaderLanding } from "./HeaderLanding"
import { MdSecurity } from "react-icons/md"
import { TbDevices } from "react-icons/tb"
import { AiFillSecurityScan } from "react-icons/ai"
import { BsRobot } from "react-icons/bs"

const FEATURES = [
  {
    icon: <MdSecurity className='w-8 h-8 text-white -rotate-90' />,
    title: 'Control de acceso',
    description: 'Controla el acceso a tu estacionamiento con un sistema de acceso automatizado y seguro en tiempo real.',
    href: ''
  },
  {
    icon: <TbDevices className='w-8 h-8 text-white -rotate-90' />,
    title: 'Multiplataforma',
    description: 'SmartParking es un sistema multiplataforma que se adapta a cualquier dispositivo y sistema operativo. [Se requiere un navegador web e internet]',
    href: ''
  },
  {
    icon: <AiFillSecurityScan className='w-8 h-8 text-white -rotate-90' />,
    title: 'Seguro y confiable',
    description: 'SmartParking es un sistema seguro y confiable que garantiza la seguridad de tu estacionamiento y de tus clientes en tiempo real y en equipo',
    href: ''
  },
  {
    icon: <BsRobot className='w-8 h-8 text-white -rotate-90' />,
    title: 'Moderno y fácil de usar',
    description: 'SmartParking es un sistema moderno y fácil de usar que se adapta a cualquier tipo de estacionamiento y tamaño.',
    href: ''
  }
]

const FeaturesPage = () => {
  return (
    <section className='max-w-7xl mx-auto py-44 min-h-[42rem] flex flex-col gap-4'>
      <HeaderLanding
        overtitle='Características'
        title='La mejor manera de administrar tu estacionamiento'
        description='SmartParking es una solución de estacionamiento inteligente que le permite administrar sus plazas de estacionamiento de manera eficiente y segura a través de un sistema web multiplataforma y sensores que garantizan el control 24/7 de sus lugares de estacionamiento.'
      />

      <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 py-12'>
        {
          FEATURES && FEATURES.map((feature: any) => (
            <article key={feature.title} className='flex flex-col gap-4 justify-between'>
              <section className='flex flex-col gap-4'>
                <div className='w-16 h-16 rounded-lg rotate-[30deg] bg-teal-200 relative'>
                  <div className='w-16 h-16 rounded-lg rotate-[60deg] bg-teal-500 absolute left-0 top-0 flex items-center justify-center'>
                    {feature.icon}
                  </div>
                </div>
                <h3 className='text-xl font-semibold text-zinc-850'>{feature.title}</h3>
                <p className='text-slate-500 text-sm'>{feature.description}</p>
              </section>
              <Link href={feature.href} className='font-medium text-zinc-800 hover:text-cyan-700 transition-all duration-300 ease-in-out'>Ver más</Link>
            </article>
          ))
        }
      </section>
    </section>
  )
}

export { FeaturesPage }