import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

const handler = async (req: Request, { params } : any) => {


  const session = await getServerSession(authOptions) as any

  if (!session) return new NextResponse(JSON.stringify({ message: 'Usted no se encuentra autorizado para realizar esta acción' }), { status: 401 })
  
  const prisma = new PrismaClient()

  try {
    const res = await prisma.userRole.findMany({
      select: {
        id: true,
        name: true,
        description: true,
      }
    })

    return new NextResponse(JSON.stringify({ roles: res}), {status: 200})
  } catch (err: any) {
    return new NextResponse(JSON.stringify({ message: err.message }), { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

export {
  handler as GET
}