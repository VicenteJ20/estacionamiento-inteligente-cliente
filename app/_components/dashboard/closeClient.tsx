'use client'

import { Button } from "@nextui-org/react"
import { signOut } from "next-auth/react"


export const CloseClient = () => {
  const handleClose = () => {
    signOut()
  }
  return (
    <Button onClick={handleClose} variant='shadow' color='danger' className="mt-12">Cerrar sesión</Button>
  )
}