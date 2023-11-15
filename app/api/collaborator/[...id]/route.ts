import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

const handler = async (req: Request, { params }: any) => {


  const session = await getServerSession(authOptions) as any

  if (!session) return new NextResponse(JSON.stringify({ message: 'Usted no se encuentra autorizado para realizar esta acción' }), { status: 401 })

  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const prisma = new PrismaClient()
        const id = params.id as any

        try {
          const res = await prisma.user.findUnique({
            where: {
              id: id.toString()
            },
            select: {
              id: true,
              name: true,
              email: true,
              emailVerified: true,
              role: true,
              accountType: true,
            }
          })


          if (res?.accountType !== null) {
            const accountType = await prisma.accountType.findUnique({
              where: {
                id: res?.accountType as any
              },
              select: {
                name: true
              }
            })

            if (res) {
              res.accountType = accountType?.name as any
            }
          }

          return new NextResponse(JSON.stringify({ data: res }), { status: 200 })
        } catch (err: any) {
          return new NextResponse(JSON.stringify({ message: err.message }), { status: 500 })
        } finally {
          await prisma.$disconnect()
        }
      } catch (err: any) {
        return new NextResponse(JSON.stringify({ message: err.message }), { status: 500 })
      }

    case 'PATCH':
      const prisma1 = new PrismaClient()

      try {
        //const authId = session?.user?.id as any
        const body = await req.json()
        const { userId, newrole } = body
        console.log(req.body)
        const res = await prisma1.user.update({
          where: {
            id: userId
          },
          data: {
            role: newrole
          }
        })

        return new NextResponse(JSON.stringify({ data: res }), { status: 200})

      } catch (err: any) {
        console.log(err)
        return new NextResponse(JSON.stringify({ message: err.message }), { status: 500 })
      }
  }

}
export {
  handler as GET,
  handler as PATCH,
}