import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "../auth/[...nextauth]/route";
import { sensorConnection } from "@/app/_database/sensoresbd";
import Sensor from "@/models/Sensor";

const handler = async (req: NextRequest) => {
  //const session = await getServerSession(authOptions) as any

  //if (!session) return new NextResponse(JSON.stringify({ message: 'Usted no se encuentra autorizado para realizar esta acción' }), { status: 401 })

  const { method } = req

  switch (method) {
    case 'GET':
      const prisma = new PrismaClient()


      const searchParams = req.nextUrl.searchParams

      console.log(searchParams)

      try {
        await sensorConnection()

        /*
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0); // Establecer la hora a 00:00:00 para comparar solo la fecha

        const hoy_mas_uno = new Date(hoy);
        hoy_mas_uno.setDate(hoy.getDate() + 1);

        const x1 = new Date()
        x1.setDate(hoy.getDate() - 1); // Obtener la fecha de ayer

        const x2 = new Date()
        x2.setDate(hoy.getDate() - 2); // Obtener la fecha de anteayer

        const x3 = new Date()
        x3.setDate(hoy.getDate() - 3); // Obtener la fecha de hace 3 dias

        const x4 = new Date()
        x4.setDate(hoy.getDate() - 4); // Obtener la fecha de hace 4 dias

        const x5 = new Date()
        x5.setDate(hoy.getDate() - 5); // Obtener la fecha de hace 5 dias

        const x6 = new Date()
        x6.setDate(hoy.getDate() - 6); // Obtener la fecha de hace 6 dias
        */



        /*
        const dataHoy = await Sensor.find({ fecha_ingreso: hoy.toString })
        const dataX = dataHoy.length;

        const dataX1s = await Sensor.find({ fecha_ingreso: x1.toString })
        const dataX1 = dataX1s.length;

        const dataX2s = await Sensor.find({ fecha_ingreso: x2.toString })
        const dataX2 = dataX2s.length;

        const dataX3s = await Sensor.find({ fecha_ingreso: x3.toString })
        const dataX3 = dataX3s.length;

        const dataX4s = await Sensor.find({ fecha_ingreso: x4.toString })
        const dataX4 = dataX4s.length;

        const dataX5s = await Sensor.find({ fecha_ingreso: x5.toString })
        const dataX5 = dataX5s.length;

        const dataX6s = await Sensor.find({ fecha_ingreso: x6.toString })
        const dataX6 = dataX6s.length;
        */
        const fechaActual = new Date();
        const fechaAnterior = new Date(fechaActual.getTime() - (7 * 24 * 60 * 60 * 1000));

        console.log(fechaActual)
        const data = await Sensor.find({
          fecha_ingreso: {
            $gte: fechaAnterior,
            $lte: fechaActual,
          },
        });


        const fechas = [fechaAnterior, fechaActual];

        const sensores = await Sensor.find({
          fecha_ingreso: {
            $in: fechas,
          },
        });

        /*
        console.log("x")
        console.log(hoy)
        console.log(x1)
        console.log(x2)
        console.log(x3)
        console.log(x4)
        console.log(x5)
        console.log(x6)
        */

        /*
        console.log("Datos:lenght")
        console.log(dataX)
        console.log(dataX1)
        console.log(dataX2)
        console.log(dataX3)
        console.log(dataX4)
        console.log(dataX5)
        console.log(dataX6)
        */


        return new NextResponse(JSON.stringify({ message: 'Sensores encontrados', sensores }), { status: 200 })
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