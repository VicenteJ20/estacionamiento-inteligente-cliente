import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"
import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"


const handler = async (req: Request) => {
  const method = req.method

  const session = await getServerSession(authOptions) as any

  if (!session) return new NextResponse(JSON.stringify({ message: 'No se encuentra autorizado para realizar esta acción'}), {status: 401})
  switch (method) {
    case 'GET':
      const prismaGet = new PrismaClient()

      try {
        const res = await prismaGet.area.findMany({
          where: {
            parkingPlace: session.enterpriseId
          },
          select: {
            id: true,
            areaName: true,
            parkingPlace: true,
            creador: true
          }
        })

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