import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "../auth/[...nextauth]/route";
import { sensorConnection } from "@/app/_database/sensoresbd";
import Sensor from "@/models/Sensor";

const handler = async (req: NextRequest) => {
  const session = await getServerSession(authOptions) as any

  if (!session) return new NextResponse(JSON.stringify({ message: 'Usted no se encuentra autorizado para realizar esta acción' }), { status: 401 })

  const { method } = req

  switch (method) {
    case 'GET':
      const prisma = new PrismaClient()

      
      const searchParams = req.nextUrl.searchParams

      console.log(searchParams)

      try {
        await sensorConnection()
        // BUSQUEDA DE TODOS LOS SENSORES CON UNA BOARD ESPECÍFICA
        //const data = await Sensor.find({ Board: searchParams.get('board')?.toString()})

        const x = new Date()
        console.log(x)
        const cambioF = await Sensor.findOne({
            Status: "F",
            
        });
        const cambioT = await Sensor.findOne({
            Status: "T",
           
        });
        const sumaSensoresHoyx = await Sensor.find({
            fecha_ingreso: x.toString,    
          });

          const sumaSensoresHoy =  sumaSensoresHoyx.length;
          
          const sumaSensoresADMx = await Sensor.find({
            Id: /^asA/,
            
          });

          const sumaSensoresADM = sumaSensoresADMx.length;

          const sumaSensoresALMx = await Sensor.find({
            Id: /^asE/,
            
          });
          
          const sumaSensoresALM = sumaSensoresALMx.length;

          const sumaSensoresILMx = await Sensor.find({
            Id: /^asV/,
            
          });

          const sumaSensoresILM = sumaSensoresILMx.length;

          console.log(Sensor)
          console.log(cambioT)
          console.log(cambioF)
          console.log(sumaSensoresHoy)
          console.log(sumaSensoresADM)
          console.log(sumaSensoresALM)
          console.log(sumaSensoresILM)
          



        const data = {
            ultimoCambioF: cambioF,
            ultimoCambioT: cambioT,
            sumaSensoresHoy: sumaSensoresHoy,
            sumaSensoresADM: sumaSensoresADM,
            sumaSensoresALM: sumaSensoresALM,
            sumaSensoresILM: sumaSensoresILM
          };

        return new NextResponse(JSON.stringify({data}), { status: 200 })
      } catch (err: any) {
        return new NextResponse(JSON.stringify({ message: err.message }), { status: 500 })
      } finally {
        await prisma.$disconnect()
      }
  }
}

export {
  handler as GET
}