import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { PrismaClient } from "@prisma/client"
import { authOptions } from "../auth/[...nextauth]/route"

const handler = async (req: Request) => {
  switch (req.method) {
    case 'GET':

      const sessionGet = await getServerSession(authOptions) as any

      if (!sessionGet) return new NextResponse(JSON.stringify({ message: 'Usted no se encuentra autorizado para realizar esta acción' }), { status: 401 })

      const prismaGet = new PrismaClient()

      try {
        const enterprise = await prismaGet.enterprise.findFirst({
          where: {
            manager: sessionGet?.user?.id
          },
          select: {
            id: true
          }
        })

        const response = await prismaGet.collaboratorRequests.findMany({
          where: {
            enterprise: enterprise?.id,
            pending: true
          },
          select: {
            colaborator: true,
            enterprise: true,
          }
        })

        const collaborators = await prismaGet.user.findMany({
          where: {
            id: {
              in: response.map((item) => item.colaborator)
            }
          }
        })
        return new NextResponse(JSON.stringify({ message: 'Solicitudes encontradas', data: collaborators }), { status: 200 })

      } catch (err: any) {
        console.log(err)
        return new NextResponse(JSON.stringify({ message: err.message }), { status: 500 })
      } finally {
        await prismaGet.$disconnect()
      }
    case 'POST':
      const session = await getServerSession(authOptions) as any

      if (!session) return new NextResponse(JSON.stringify({ message: 'Usted no se encuentra autorizado para realizar esta acción' }), { status: 401 })

      const body = await req.json()

      if (!body.id) return new NextResponse(JSON.stringify({ message: 'Bad request' }), { status: 400 })

      const prisma = new PrismaClient()

      try {
        const res = await prisma.collaboratorRequests.findFirst({
          where: {
            colaborator: body.id,
            pending: true,
          },
          select: {
            status: true,
            managedBy: true,
            pending: true
          }
        })

        if (!res) return new NextResponse(JSON.stringify({ message: 'No se encontró la solicitud' }), { status: 404 })

        return new NextResponse(JSON.stringify({ message: 'Solicitud encontrada', data: res }), { status: 200 })
      } catch (err: any) {
        console.log(err)
        return new NextResponse(JSON.stringify({ message: err.message }), { status: 500 })
      } finally {
        await prisma.$disconnect()
      }

    default:
      return new NextResponse(JSON.stringify({ message: 'Método no permitido' }), { status: 405 })

    case 'PATCH':
      const sessionPatch = await getServerSession(authOptions) as any

      if (!sessionPatch) return new NextResponse(JSON.stringify({ message: 'Usted no se encuentra autorizado para realizar esta acción' }), { status: 401 })

      const prismaPatch = new PrismaClient()

      const bodyPatch = await req.json()

      try {
        // Cambia el rol y status al usuario en la tabla user

        await prismaPatch.user.update({
          where: {
            id: bodyPatch.collaborator
          },
          data: {
            role: 1,
            status: 1,
            accountType: 2
          }
        })

        // Ingresa un colaborador al registor de colaboradores por empresa
        await prismaPatch.colaboratorEnterprise.create({
          data: {
            colaborator: bodyPatch.collaborator,
            enterprise: sessionPatch?.user?.enterprise
          }
        })

        // Actualiza la petición de colaborador a la nueva empresa aprobandola
        await prismaPatch.collaboratorRequests.update({
          where: {
            colaborator: bodyPatch.collaborator,
          },
          data: {
            status: true,
            managedBy: sessionPatch?.user?.id,
            pending: false
          }
        })


        return new NextResponse(JSON.stringify({ message: 'usuario actualizado con éxito' }), { status: 200 })
      } catch (err: any) {
        console.log(err)
        return new NextResponse(JSON.stringify({ message: err.message }), { status: 500 })
      }
    case 'DELETE':

      const prismaDelete = new PrismaClient()

      try {
        const body = await req.json()
        const { userId } = body

        await prismaDelete.collaboratorRequests.delete({
          where: {
            colaborator: userId
          }
        })

        await prismaDelete.user.update({
          where: {
            id: userId
          },
          data: {
            status: 4
          }
        })

        return new NextResponse(JSON.stringify({ data: 'El usuario fue desactivado con éxito' }), { status: 200 })
      } catch (err: any) {
        console.log(err)
        return new NextResponse(JSON.stringify({ message: err.message }), { status: 500 })
      }
  }
}

export {
  handler as GET,
  handler as POST,
  handler as PATCH,
  handler as DELETE
}