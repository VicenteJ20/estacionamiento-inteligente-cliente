import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { PrismaClient } from "@prisma/client"
import { authOptions } from "../auth/[...nextauth]/route"

const handler = async (req: Request) => {
  const session = await getServerSession(authOptions) as any

  if (!session) return new NextResponse(JSON.stringify({ message: 'Usted no se encuentra autorizado para realizar esta acción' }), { status: 401 })

  const body = await req.json()

  if (!body.id) return new NextResponse(JSON.stringify({ message: 'Bad request' }), { status: 400 })

  const prisma = new PrismaClient()

  try {
    const res = await prisma.collaboratorRequests.findFirst({
      where: {
        colaborator: body.id,
        pending: true,
      },
      select: {
        status: true,
        managedBy: true,
        pending: true
      }
    })

    if (!res) return new NextResponse(JSON.stringify({ message: 'No se encontró la solicitud' }), { status: 404 })

    return new NextResponse(JSON.stringify({ message: 'Solicitud encontrada', data: res }), { status: 200 })
  } catch (err: any) {
    console.log(err)
    return new NextResponse(JSON.stringify({ message: err.message }), { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

export {
  handler as POST
}