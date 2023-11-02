import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "../auth/[...nextauth]/route";


const welcomeHandler = async (req: Request) => {
  const session = await getServerSession(authOptions) as any

  if (!session) return new NextResponse(JSON.stringify({ message: 'Usted no se encuentra autorizado para realizar esta acción' }), { status: 401 })

  const body = await req.json()
  const prisma = new PrismaClient()

  if (body.type === 0) {
    try {
      await prisma.enterprise.create({
        data: {
          name: body.commercialName as string,
          rut: body.rut as string,
          prefix: body.alias as string,
          address: body.address as string,
          manager: session.user.id as string
        }
      })

      await prisma.user.update({
        where: { id: session.user.id },
        data: {
          accountType: 1
        }
      })

      return new NextResponse(JSON.stringify({message: 'Empresa creada con éxito'}), {status: 201})
    } catch (err: any) {
      console.log(err)
      return new NextResponse(JSON.stringify({ message: err.message }), { status: 500 })
    }
  }
}

export {
  welcomeHandler as POST
}