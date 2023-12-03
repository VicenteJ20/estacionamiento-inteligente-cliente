import { PrismaClient } from "@prisma/client"
import { getServerSession } from "next-auth"
import { authOptions } from "../[...nextauth]/route"
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'

const handler = async (req: Request) => {
  const session = await getServerSession(authOptions)

  if (!session) {
    
    const body = await req.json()

    const prisma = new PrismaClient()

    const passwordHash = await bcrypt.hash(body.password, 12)
    
    try {
      await prisma.user.create({
        data: {
          name: body.name,
          lastName: body.lastname,
          email: body.email,
          passwordHash: passwordHash,
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
    console.log('Usted no se encuentra autorizado para realizar esta acción')
    return new NextResponse(JSON.stringify({ message: 'Usted no se encuentra autorizado para realizar esta acción' }), { status: 401 })
  }
}

export {
  handler as POST
}