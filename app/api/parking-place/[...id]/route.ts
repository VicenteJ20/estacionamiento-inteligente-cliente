import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/route"
import { PrismaClient } from "@prisma/client"

const handler = async (req: Request, {params}: any) => {
  const method = req.method

  const session = await getServerSession(authOptions)

  if (!session) return new NextResponse(JSON.stringify({ message: 'UNAUTHORIZED' }), { status: 401 })

  switch (method) {
    case 'GET':
      const prismaGet = new PrismaClient()
      
      try {
        const id = params.id
        
        const res = await prismaGet.parkingPlace.findUnique({
          where: {
            id: id.toString()
          }
        })

        if (!res) return new NextResponse(JSON.stringify({ data: 'Lugar no encontrado'}), { status: 404})

        return new NextResponse(JSON.stringify({ data: res }), { status: 200 })

      } catch (err: any) {
        return new NextResponse(JSON.stringify({ message: err.message }), { status: 500 })
      } finally {
        await prismaGet.$disconnect()
      }
    case 'PATCH':
      const prismaPatch = new PrismaClient()

      const body = await req.json()

      if (!body) return new NextResponse(JSON.stringify({ message: 'BAD REQUEST'}), { status: 400 })

      try {
        const res = await prismaPatch.parkingPlace.update({
          where: {
            id: body.id
          },
          data: {
            latitude: body.latitude,
            longitude: body.longitude,
            alias: body.alias,
            region: body.region,
            comuna: body.comuna,
            ciudad: body.ciudad,
            postalCode: body.postalCode
          }
        })

        return new NextResponse(JSON.stringify({ data: res }), { status: 200 })
      } catch (err: any) {
        return new NextResponse(JSON.stringify({ message: err.message }), { status: 500 })
      } finally {
        await prismaPatch.$disconnect()
      }
  }
}

export {
  handler as GET,
  handler as PATCH
}