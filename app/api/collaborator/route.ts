import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const Handler = async (req: any) => {
  const { method } = req

  switch (method) {
    case 'GET':
      const prisma = new PrismaClient()
      const search = req.url.split('?')[1]
      const enterpriseId = search.split('=')[1]

      try {
        const response = await prisma.colaboratorEnterprise.findMany({
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                emailVerified: true,
                image: true,
                role: true,
                accountType: true,
                status: true
              }
            }
          },
          where: {
            enterprise: enterpriseId
          }
        })

        for (const colab of response) {
          if (typeof colab.user.role === 'number') {
            const userRole = await prisma.userRole.findUnique({
              where: {
                id: colab.user.role
              },
              select: {
                name: true,
              }
            })
        
            colab.user.role = userRole?.name as any
          }
        }

        return new NextResponse(JSON.stringify({ data: response }), { status: 200 })
      } catch (err: any) {
        console.log(err)
        return new NextResponse(JSON.stringify({ message: 'ERROR INTERNO DEL SERVIDOR' }), { status: 200 })
      } finally {
        await prisma.$disconnect()
      }

    case 'POST':
      break
  }
}

export {
  Handler as GET,
  Handler as POST
}