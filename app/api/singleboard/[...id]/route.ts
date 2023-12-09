import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const handler = async (req: Request, { params }: any) => {
  const session = await getServerSession(authOptions) as any

  if (!session) return new NextResponse(JSON.stringify({ message: 'Unauthorized' }), { status: 401 })

  const { method } = req

  switch (method) {
    case 'GET':
      const prismaGet = new PrismaClient()

      const board = await prismaGet.board.findUnique({
        where: {
          id: params.id.toString()
        },
        select: {
          id: true,
          model: true,
          brand: true,
          serialNumber: true,
          area: true,
        }
      })


      if (!board) return new NextResponse(JSON.stringify({ message: 'Not found' }), { status: 404 })


      try {
        const areaName = await prismaGet.area.findUnique({
          where: {
            id: board?.area
          },
          select: {
            areaName: true,
            parkingPlace: true
          }
        })

        const parking = await prismaGet.parkingPlace.findUnique({
          where: {
            id: areaName?.parkingPlace
          },
          select: {
            id: true
          }
        })

        const finalData = {
          ...board,
          areaName: areaName?.areaName,
          parkingPlace: parking?.id
        }

        return new NextResponse(JSON.stringify({ data: finalData }), { status: 200 })
      } catch (error) {
        return new NextResponse(JSON.stringify({ message: 'Internal server error' }), { status: 500 })
      } finally {
        await prismaGet.$disconnect()
      }

    default:
      return new NextResponse(JSON.stringify({ message: 'Method not allowed' }), { status: 405 })
  }
}

export {
  handler as GET
}