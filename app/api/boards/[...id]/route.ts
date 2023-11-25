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

    default:
      return new NextResponse(JSON.stringify({ message: 'Method not allowed' }), { status: 405 })
  }

}

export {
  handler as GET
}