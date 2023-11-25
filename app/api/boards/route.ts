import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"
import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const handler = async (req: Request, { params }: any) => {
  const session = await getServerSession(authOptions) as any

  if (!session) return new NextResponse(JSON.stringify({ message: 'Unauthorized' }), { status: 401 })

  const { method, url } = req

  switch (method) {
    case 'GET':
      const searchParams = new URLSearchParams(url.split('?')[1])
      const areaId = searchParams.get('areaId')

      if (!areaId) return new NextResponse(JSON.stringify({ message: 'Bad request, you must specify an area to search for' }), { status: 404 })

      const prismaGet = new PrismaClient()

      const boards = await prismaGet.board.findMany({
        where: {
          area: areaId.toString(),
        }
      })

      console.log(boards)

      return new NextResponse(JSON.stringify({ data: boards }), { status: 200 })
  }
}

export {
  handler as GET
}