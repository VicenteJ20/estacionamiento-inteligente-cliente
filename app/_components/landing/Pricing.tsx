import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react"
import { HeaderLanding } from "./HeaderLanding"

const PricingPage = () => {
  return (
    <section className='max-w-7xl mx-auto py-24 min-h-[42rem] flex flex-col items-center justify-center gap-16'>
      <HeaderLanding center={true} overtitle='Tabla de precios' title='Escoja el plan que le acomode'
        description='Escoja el plan que mejor se adapte a su negocio. ¿No encuentras lo que buscas? - Contacta con ventas ahora mismo.' />
      <div className='gap-8 grid grid-cols-1 md:grid-cols-3'>
        <Card className='max-w-md min-w-[20rem] p-4'>
          <CardHeader className='text-lg font-semibold text-zinc-500'>Básico</CardHeader>
          <p className='text-zinc-500 pl-2.5'>Desde</p>
          <CardBody className='flex flex-col gap-6'>
            <article className='flex flex-row gap-2 items-center'>
              <span className='font-medium text-lg text-zinc-500'>$</span>
              <h2 className='text-3xl font-bold'>25.990</h2>
              <span className='text-lg text-zinc-500'>por mes</span>
            </article>
            <ul className='flex flex-col gap-3 text-zinc-500'>
              <li className='text-medium font-bold text-zinc-900'>Características</li>
              <li>2 administradores</li>
              <li>Hasta 100 lugares de estacionamiento</li>
              <li>1 plaza de estacionamiento</li>
              <li>Soporte 8/5</li>
            </ul>
            <button className='bg-teal-500 text-white font-semibold py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-teal-800'>Contratar ahora</button>
          </CardBody>
        </Card>
        <Card className='max-w-md min-w-[20rem] p-4'>
          <CardHeader className='text-lg font-semibold text-zinc-500'>Premium</CardHeader>
          <p className='text-zinc-500 pl-2.5'>Desde</p>
          <CardBody className='flex flex-col gap-6'>
            <article className='flex flex-row gap-2 items-center'>
              <span className='font-medium text-lg text-zinc-500'>$</span>
              <h2 className='text-3xl font-bold'>35.990</h2>
              <span className='text-lg text-zinc-500'>CLP</span>
            </article>
            <ul className='flex flex-col gap-3 text-zinc-500'>
              <li className='text-medium font-bold text-zinc-900'>Características</li>
              <li>20 administradores</li>
              <li>Hasta 250 lugares de estacionamiento</li>
              <li>3 plaza de estacionamiento</li>
              <li>Soporte 24/7</li>
            </ul>
            <button className='bg-teal-500 text-white font-semibold py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-teal-800'>Contratar ahora</button>
          </CardBody>
        </Card>
        <Card className='max-w-md min-w-[20rem] p-4'>
          <CardHeader className='text-lg font-semibold text-zinc-500'>Empresarial</CardHeader>
          <p className='text-zinc-500 pl-2.5'>Desde</p>
          <CardBody className='flex flex-col gap-6'>
            <article className='flex flex-row gap-2 items-center'>
              <span className='font-medium text-lg text-zinc-500'>$</span>
              <h2 className='text-3xl font-bold'>50.990</h2>
              <span className='text-lg text-zinc-500'>CLP</span>
            </article>
            <ul className='flex flex-col gap-3 text-zinc-500'>
              <li className='text-medium font-bold text-zinc-900'>Características</li>
              <li>Administradores ilimitados</li>
              <li>Sensores ilimitados</li>
              <li>Plazas ilimitadas</li>
              <li>Soporte 24/7</li>
            </ul>
            <button className='bg-zinc-900 text-white font-semibold py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-teal-800'>Contacto ventas</button>
          </CardBody>
        </Card>
      </div>
    </section>
  )
}

export { PricingPage }