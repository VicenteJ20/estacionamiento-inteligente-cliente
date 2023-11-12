//import TablaSensores from "@/app/_components/dashboard/TablaSensores"
//import RechartsGrafico from "@/app/_components/dashboard/GraficoSensores"
import dynamic from 'next/dynamic';


const RechartsGrafico = dynamic( () => import('@/app/_components/dashboard/GraficoSensores'), {ssr: false})

const SensorHomePage = async () => {
  return (
    <div>
      <p> sensores home view</p>
      <section className=" min-h-screen w-screen relative"> 
      
      <RechartsGrafico/>
      </section>

    </div>
  )
}

export default SensorHomePage