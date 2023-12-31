import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "../auth/[...nextauth]/route";
import { sensorConnection } from "@/app/_database/sensoresbd";
import Sensor from "@/models/Sensor";

const handler = async (req: NextRequest) => {
  // const session = await getServerSession(authOptions) as any

  // if (!session) return new NextResponse(JSON.stringify({ message: 'Usted no se encuentra autorizado para realizar esta acción' }), { status: 401 })

  const { method, url } = req

  switch (method) {
    case 'GET':
      const prisma = new PrismaClient()


      try {
        await sensorConnection()


        const searchParams = req.nextUrl?.searchParams
        const parkingPlace = searchParams.get('parkingPlace')
        const getAreas = searchParams.get('getAreas')

        // BUSQUEDA DE TODAS LAS AREAS CON UN PARKING PLACE ESPECÍFICO
        const availableAreas = await prisma.area.findMany({
          where: {
            parkingPlace: parkingPlace?.toString()
          },
          select: {
            id: true,
            areaName: true,
          }
        })

        const boards = []

        for (let i = 0; i < availableAreas.length; i++) {
          const board = await prisma.board.findMany({
            where: {
              area: availableAreas[i].id
            },
            select: {
              id: true,
              area: true
            }
          })

          if (board.length > 0) {
            boards.push(board)
          }
        }

        // console.log(boards)
        // console.log(availableAreas)

        const boardsId = boards.map((board: any) => board[0].id)

        //console.log(boardsId)

        // BUSQUEDA DE TODOS LOS SENSORES CON UNA BOARD ESPECÍFICA
        //const data = await Sensor.find({ Board: searchParams.get('board')?.toString()})
        // const data = await Sensor.find({
        //   Board: {
        //     $in: boardsId
        //   }
        // })

        const data = await Sensor.aggregate([
          {
            $match: {
              Board: {
                $in: boardsId
              }
            }
          },
          {
            $sort: {
              fecha_ingreso: -1
            }
          },
          {
            $group: {
              _id: "$Id",
              doc: {
                $first: "$$ROOT"
              }
            }
          },
          {
            $replaceRoot: {
              newRoot: "$doc"
            }
          }
        ])

        if (data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            let item = { ...data[i] }
            item.Area = availableAreas.find((area: any) => area.id === data[i].Board)
            data[i] = item
          }
        }

        console.log(data)

        return new NextResponse(JSON.stringify({ message: 'Sensores encontrados', data }), { status: 200 })
      } catch (err: any) {
        return new NextResponse(JSON.stringify({ message: err.message }), { status: 500 })
      } finally {
        await prisma.$disconnect()
      }

    case 'POST':
      try {
        await sensorConnection()

        const body = await req.json()

        const newSensor = {
          ...body,
          fecha_ingreso: new Date()
        }
        const res = await Sensor.create(newSensor)

        if (res) {
          console.log(res, 'ENTRÓ AL IF')
          return new NextResponse(JSON.stringify({ message: 'Sensor creado con éxito', data: res }), { status: 201 })
        } else {
          console.log(res, 'ENTRÓ AL ELSE')
          return new NextResponse(JSON.stringify({ message: 'No se pudo crear el sensor' }), { status: 500 })
        }
      } catch (err: any) {
        return new NextResponse(JSON.stringify({ message: err.message }), { status: 500 })
      }
  }
}

export {
  handler as GET,
  handler as POST
}