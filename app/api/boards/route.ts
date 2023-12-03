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

      for (let i = 0; i < boards.length; i++) {
        const area = await prismaGet.area.findUnique({
          where: {
            id: boards[i].area
          },
          select: {
            areaName: true,
            id: true
          }
        })

        // @ts-ignore
        boards[i].areaName = area as any
      }

      return new NextResponse(JSON.stringify({ data: boards }), { status: 200 })
    
    case 'POST':
      const prismaPost = new PrismaClient()
      const body = await req.json()

      try {
        await prismaPost.board.create({
          data: {
           ...body,
           installedAt: new Date(),
           installedBy: session.user.id
          }
         })
          return new NextResponse(JSON.stringify({ message: 'Board creada con éxito' }), { status: 200 })
      } catch (error: any) {
        console.log(error)
        return new NextResponse(JSON.stringify({ message: error.message }), { status: 500 })
      }


  }
}

export {
  handler as GET,
  handler as POST,
}