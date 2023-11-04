import { NextResponse } from "next/server"

const Handler = (req: any) => {
  return new NextResponse(JSON.stringify({ message: 'Usted no se encuentra autorizado para realizar esta acción' }), { status: 401 })
}

export {
  Handler as GET
}