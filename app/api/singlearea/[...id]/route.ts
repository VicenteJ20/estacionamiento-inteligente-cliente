import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/route"
import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const handler = async (req: Request, { params }: any) => {
  const session = await getServerSession(authOptions) as any

  if (!session) return new NextResponse(JSON.stringify({ message: 'Usted no se encuentra autorizado para realizar esta acción' }), { status: 401 })

  const { method } = req

  switch (method) {
    case 'GET':
      const prismaGet = new PrismaClient()

      try {
        const id = params.id as any

        if (!id) return new NextResponse(JSON.stringify({ message: 'Bad request' }), { status: 400 })

        const res = await prismaGet.area.findUnique({
          where: {
            id: id.toString()
          }
        })

        if (!res) return new NextResponse(JSON.stringify({ message: 'No se encontró el área' }), { status: 404 })
        
        return new NextResponse(JSON.stringify({ data: res }), { status: 200 })

      } catch (err: any) {
        console.log(err)
        return new NextResponse(JSON.stringify({ message: err.message }), { status: 500 })
      } finally {
        await prismaGet.$disconnect()
      }
  }
}

export {
  handler as GET
}