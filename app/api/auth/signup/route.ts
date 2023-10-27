import { PrismaClient } from "@prisma/client"
import { getServerSession } from "next-auth"
import { authOptions } from "../[...nextauth]/route"
import { NextResponse } from "next/server"

const handler = async (req: Request) => {
  const session = await getServerSession(authOptions)

  if (!session) {
    
    const body = await req.json()

    const prisma = new PrismaClient()

    try {
      await prisma.user.create({
        data: {
          name: body.name,
          email: body.email,
          passwordHash: body.passwordHash,
          role: body.role || null
        }
      })
      
      return new NextResponse(JSON.stringify({
        message: 'Usuario creado exitosamente'
      }), { status: 201 })
    } catch (error: any) {
      return new NextResponse(JSON.stringify({ message: error.message }), { status: 500 })
    }

  } else {
    return new NextResponse(JSON.stringify({ message: 'Usted no se encuentra autorizado para realizar esta acción' }), { status: 401 })
  }
}

export {
  handler as POST
}