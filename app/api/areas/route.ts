import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"
import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"


const handler = async (req: Request) => {
  const method = req.method

  const session = await getServerSession(authOptions) as any

  if (!session) return new NextResponse(JSON.stringify({ message: 'No se encuentra autorizado para realizar esta acción' }), { status: 401 })
  switch (method) {
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