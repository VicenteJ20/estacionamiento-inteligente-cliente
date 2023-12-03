'use client'

import { HeaderDashboard } from "@/app/_components/dashboard/Header"
import { Avatar, Input, Select, SelectItem, Button, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { getAllRoles } from "@/app/_lib/personal/roles"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addManyRoles } from "@/app/_redux/slices/rolesSlice"
import { useRouter } from "next/navigation"

export const UserPage = (infoUser: any) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [finish, setFinish] = useState(false)
  const [status, setStatus] = useState(0)
  const roleData = useSelector((state: any) => state.availableRoles.roles)
  const [actualRole, setActualRole] = useState('')
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    async function handler() {
      const roles = await getAllRoles()
      dispatch(addManyRoles(roles.roles))
    }

    if (roleData.length === 0) {
      handler()
    }
  }, [dispatch, roleData])

  const handleSubmit = async () => {
    const roleIndex = roleData.findIndex((role: any) => role.name === actualRole)

    const res = await fetch(`/api/collaborator/${infoUser.infoUser[0].id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: infoUser.infoUser[0].id,
        oldrole: infoUser.infoUser[0].role,
        newrole: roleIndex
      })
    })

    if (res.status === 200) {
      setStatus(200)
    } else {
      setStatus(400)
    }

    setFinish(true)
  }

  const handleRedirect = () => {
    return router.push('/dashboard/personal')
  }

  if (infoUser && infoUser.infoUser && infoUser.infoUser.length > 0) {
    return (
      <section>
        <div className='flex flex-col gap-8'>
          <HeaderDashboard overtitle={`Dashboard / personal / info / ${infoUser.infoUser[0].email}`} title={`Perfil del usuario`} description='Cualquier modificación al rol del usuario quedará registrada en los logs del sistema y no podrá ser eliminada.' />
          <article className='flex flex-col gap-4'>
            <Avatar src={infoUser.infoUser[0].image ? infoUser.infoUser[0].image : 'https://i.pravatar.cc/150'} size='lg' radius='none' className='w-40 h-40' isBordered={true} color='default' />
            <form onSubmit={(e: any) => e.preventDefault()} className='flex flex-col gap-6 mt-5 max-w-6xl'>
              <Input
                isReadOnly
                type="text"
                label="Nombre"
                variant="bordered"
                defaultValue={infoUser.infoUser[0].name}
                radius="none"
                className="max-w-6xl outline-none"
              />
              <Input
                isReadOnly
                type="email"
                label="Email"
                variant="bordered"
                defaultValue={infoUser.infoUser[0].email}
                radius="none"
                className="max-w-6xl outline-none"
              />
              <Select
                isDisabled
                label="Tipo de cuenta"
                placeholder="Seleccione una opción"
                radius='none'
                defaultSelectedKeys={[infoUser.infoUser[0].accountType]}
              >
                <SelectItem key="Cuenta de colaborador" value="Cuenta de colaborador">Cuenta de Colaborador</SelectItem>
                <SelectItem key="Administrativa" value="Administrativa">Administrativa</SelectItem>
              </Select>
              <Select
                isDisabled={infoUser.infoUser[0].status === 2 ? true : false}
                onChange={(e: any) => setActualRole(e.target.value)}
                label='Rol'
                placeholder="Seleccione una opción"
                radius='none'
                defaultSelectedKeys={[roleData[infoUser.infoUser[0].role].name]}
              >
                {
                  roleData && roleData.length > 0 ? (
                    roleData.map((role: any) => (
                      <SelectItem key={role.name} value={role.id}>{role.name}</SelectItem>
                    ))
                  ) : null
                }
              </Select>
              {
                infoUser.infoUser[0].status !== 2 ? (
                  <>
                    {
                      actualRole !== '' && actualRole !== roleData[infoUser.infoUser[0].role].name && (
                        <Button onPress={onOpen} color="primary" variant="shadow">
                          Confirmar
                        </Button>
                      )
                    }
                  </>
                ) : null
              }
              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                  {(onClose) => (
                    <>
                      {
                        finish ? (
                          <>
                            {
                              status === 200 ? (
                                <>
                                  <ModalHeader className="flex flex-col gap-1">Proceso exitoso</ModalHeader>
                                  <ModalBody className='mt-2 mb-4 text-center'>
                                    <p className='text-blue-700'><span className='font-semibold text-zinc-900'>El usuario:</span> {infoUser.infoUser[0].email}</p>
                                    <p className='font-semibold text-zinc-900'>Rol: <span className='text-blue-700'>{actualRole}</span></p> 

                                    <div className='flex flex-row gap-3 w-full text-center justify-center my-2'>
                                      <Button onClick={handleRedirect} color='success' variant='bordered'>Volver al inicio</Button>
                                    </div>

                                  </ModalBody>
                                </>
                              ) : (
                                <>
                                  <ModalHeader className="flex flex-col gap-1">Aviso de confirmación</ModalHeader>
                                  <ModalBody>
                                    <h2>¡Ocurrió un error!</h2>
                                    <p>Lo sentimos, ha ocurrido un error de nuestra parte, vuelva a intentarlo más tarde</p>
                                  </ModalBody>
                                </>
                              )
                            }
                          </>
                        ) : (
                          <>
                            <ModalHeader className="flex flex-col gap-1">Aviso de confirmación</ModalHeader>
                            <ModalBody>
                              <h3 className='font-medium text-zinc-800'>Información actual del usuario</h3>
                              <ul className='flex flex-col gap-1'>
                                <li><span className="font-medium text-zinc-950">Usuario:</span> {infoUser.infoUser[0].name}</li>
                                <li><span className="font-medium text-zinc-950">Correo electrónico:</span> {infoUser.infoUser[0].email}</li>
                                <li><span className="font-medium text-zinc-950">Rol previo:</span> {roleData[infoUser.infoUser[0].role].name}</li>
                                <li className='my-3'>
                                  <h3 className="font-medium text-zinc-800">¿Está seguro de realizar los siguientes cambios?</h3>
                                </li>
                                <li className='text-blue-600'>Cambio de rol a: {actualRole}</li>
                              </ul>
                            </ModalBody>
                            <ModalFooter>
                              <Button color="danger" variant="light" onPress={onClose}>
                                Cancelar
                              </Button>
                              <Button color="primary" onPress={handleSubmit}>
                                Confirmar cambios
                              </Button>
                            </ModalFooter>
                          </>
                        )
                      }
                    </>
                  )}
                </ModalContent>
              </Modal>
            </form>
          </article>
        </div>
      </section >
    )
  } else {
    return null
  }
}