import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/route"
import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const handler = async (req: Request, { params }: any) => {

  const session = await getServerSession(authOptions) as any

  if (!session) return new NextResponse(JSON.stringify({ message: 'Unauthorized' }), { status: 401 })

  const { method } = req

  switch (method) {
    case 'GET':
      const prismaGet = new PrismaClient()

      const id = params.id

      if (!id) return new NextResponse(JSON.stringify({ message: 'Not found' }), { status: 404 })

      const boards = await prismaGet.board.findMany({
        where: {
          area: id.toString()
        }
      })

      if (!boards) return new NextResponse(JSON.stringify({ message: 'Not found' }), { status: 404 })

      for (let i = 0; i < boards.length; i++) {
        const emailManager = await prismaGet.user.findUnique({
          where: {
            id: boards[i].installedBy as string
          }, 
          select: {
            email: true
          }
        })

        boards[i].installedBy = emailManager?.email as string
      }

      return new NextResponse(JSON.stringify({ data: boards }), { status: 200 })
    
    case 'PUT':
      const idPut = params.id.toString()

      if (!idPut) return new NextResponse(JSON.stringify({ message: 'Bad request' }), { status: 400 })

      const prismaPut = new PrismaClient()

      try {
        const body = await req.json()

        if (!body) return new NextResponse(JSON.stringify({ message: 'Bad request' }), { status: 400 })

        const board = await prismaPut.board.update({
          where: {
            id: idPut
          },
          data: {
            area: body.area,
          }
        })
        
        return new NextResponse(JSON.stringify({ data: board }), { status: 200 })


      } catch (err) {
        return new NextResponse(JSON.stringify({ message: 'Bad request' }), { status: 400 })
      }

    default:
      return new NextResponse(JSON.stringify({ message: 'Method not allowed' }), { status: 405 })
  }

}

export {
  handler as GET,
  handler as PUT,
}