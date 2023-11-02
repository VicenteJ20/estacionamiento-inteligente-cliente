import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

const handler = async (req: Request) => {
  const session = await getServerSession(authOptions) as any

  if (!session) return new NextResponse(JSON.stringify({ message: 'Usted no se encuentra autorizado para realizar esta acción' }), { status: 401 })

  
  switch (req.method) {
    case 'GET':
      const prisma = new PrismaClient()

      try {
        const res = await prisma.enterprise.findMany({
          select: {
            id: true,
            name: true,
          }
        })

        return new NextResponse(JSON.stringify({ data: res }), { status: 200 })
      } catch (err: any) {
        return new NextResponse(JSON.stringify({ message: err.message }), { status: 500 })
      } finally {
        await prisma.$disconnect()
      }
    default:
      return new NextResponse(JSON.stringify({ message: 'Método no permitido' }), { status: 405 })
  }
}

export {
  handler as GET,
  handler as POST
}