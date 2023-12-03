//import TablaSensores from "@/app/_components/dashboard/TablaSensores"
//import RechartsGrafico from "@/app/_components/dashboard/GraficoSensores"
import TablaSensores from '@/app/_components/dashboard/TablaSensores';
import TarjetaDeUso from '@/app/_components/dashboard/TarjetaUso';
import dynamic from 'next/dynamic';


const RechartsGrafico = dynamic( () => import('@/app/_components/dashboard/GraficoSensores'), {ssr: false})

const SensorHomePage = async () => {
  return (
    <div>
      <p> sensores home view</p>
      <section className=" min-h-screen w-screen relative"> 
      
      <RechartsGrafico/>
      <TablaSensores/>
      <TarjetaDeUso/>
      </section>

    </div>
  )
}

export default SensorHomePage