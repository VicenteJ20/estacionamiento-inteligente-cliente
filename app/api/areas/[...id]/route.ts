import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/route"
import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const handler = async (req: Request, { params }: any) => {
  const session = await getServerSession(authOptions) as any

  if (!session) return new NextResponse(JSON.stringify({ message: 'Usted no se encuentra autorizado para realizar esta acción' }), { status: 401 })

  const { method } = req

  switch (method) {
    case 'GET':
      const prismaGet = new PrismaClient()
      const id = params.id as any

      try {
        const res = await prismaGet.area.findMany({
          where: {
            parkingPlace: id.toString()
          },
          select: {
            id: true,
            areaName: true,
            areaDescription: true,
            parkingPlace: true,
          }
        })

        for (let i = 0; i < res.length; i++) {
          const capacity = await prismaGet.board.count({
            where: {
              area: res[i].id
            }
          })
          // @ts-ignore
          res[i].capacity = capacity as any
        }

        return new NextResponse(JSON.stringify({ data: res }), { status: 200 })
      } catch (err: any) {
        return new NextResponse(JSON.stringify({ message: err.message }), { status: 500 })
      } finally {
        await prismaGet.$disconnect()
      }
  }
}

export {
  handler as GET
}