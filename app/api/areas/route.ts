import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"
import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"


const handler = async (req: NextRequest) => {
  const method = req.method

  const session = await getServerSession(authOptions) as any

  if (!session) return new NextResponse(JSON.stringify({ message: 'No se encuentra autorizado para realizar esta acción' }), { status: 401 })

  switch (method) {
    case 'GET':
      const prismaGet = new PrismaClient()

      const params = req.nextUrl.searchParams.get('id')
    
      if (!params) return new NextResponse(JSON.stringify({ message: 'Bad request' }), { status: 400 })

      try {
        const res = await prismaGet.area.findMany({
          where: {
            parkingPlace: params
          },
          select: {
            id: true,
            areaName: true,
            parkingPlace: true,
          }
        })
        
        return new NextResponse(JSON.stringify({ data: res }), { status: 200 })
      } catch (err: any) {
        console.log(err)
        return new NextResponse(JSON.stringify({ message: err.message }), { status: 500 })
      } finally {
        await prismaGet.$disconnect()
      }
    case 'POST':
      const prismaPost = new PrismaClient()

      const body = await req.json()
      if (!body) return new NextResponse(JSON.stringify({ message: 'Bad request' }), { status: 400 })

      try {
        await prismaPost.area.create({
          data: {
            ...body,
            creador: session.user.id as string,
          }
        })

        return new NextResponse(JSON.stringify({ data: 'Area creada con éxito' }), { status: 201 })
      } catch (err: any) {
        console.log(err)
        return new NextResponse(JSON.stringify({ message: err }), { status: 500 })
      } finally {
        await prismaPost.$disconnect()
      }
  }
}

export {
  handler as GET,
  handler as POST
}