import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"
import { PrismaClient } from "@prisma/client"


const handler = async (req: Request, {params} : any) => {
  const session = await getServerSession(authOptions) as any

  if (!session) return new NextResponse(JSON.stringify({ message: 'Usted no se encuentra autorizado para realizar esta acción' }), { status: 401 })

  const { method } = req

  switch (method) {
    case 'GET':
      const prisma = new PrismaClient()

      try {
        const res = await prisma.parkingPlace.findMany({
          where: {
            manager: session.id
          }
        })

        for (const manager of res) {
          const user = await prisma.user.findUnique({
            where: {
              id: manager.manager
            },
            select: {
              email: true,
            }
          })
      
        //@ts-ignore
        manager.manager = user?.email as unknown as string
        }

        return new NextResponse(JSON.stringify({ data: res }), { status: 200 })
      } catch (err: any) {
        return new NextResponse(JSON.stringify({ message: err.message }), { status: 500 })
      } finally {
        await prisma.$disconnect()
      }
    
    case 'POST':
      const body = await req.json()

      if (!body) return new NextResponse(JSON.stringify({ message: 'Bad request' }), { status: 400 })

      const prismaPost = new PrismaClient()

      try {
        await prismaPost.parkingPlace.create({
          data: {
            ...body,
            manager: session.user.id,
            enterprise: session.user.enterprise
          }
        })

        return new NextResponse(JSON.stringify({ message: 'Lugar de estacionamiento creado' }), { status: 200 })
      } catch (err: any) {
        console.log(err)
        return new NextResponse(JSON.stringify({ message: err }), {
          status: 500
        })
      } finally {
        await prismaPost.$disconnect()
      }

    default:
      return new NextResponse(JSON.stringify({ message: 'Método no permitido' }), { status: 405 })
  }
}

export {
  handler as GET,
  handler as POST
}