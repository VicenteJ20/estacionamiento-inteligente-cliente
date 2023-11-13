'use client'

import { HeaderDashboard } from "@/app/_components/dashboard/Header"
import { Avatar, Input, Select, SelectItem, Button, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { getAllRoles } from "@/app/_lib/personal/roles"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addManyRoles } from "@/app/_redux/slices/rolesSlice"

export const UserPage = (infoUser: any) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const roleData = useSelector((state: any) => state.availableRoles.roles)
  const [actualRole, setActualRole] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    async function handler() {
      const roles = await getAllRoles()
      dispatch(addManyRoles(roles.roles))
    }

    if (roleData.length === 0) {
      handler()
    }
  }, [dispatch, roleData])

  const handleSubmit = () => {
    console.log('ID DEL USUARIO: ', infoUser.infoUser[0].id)
    console.log('ROL ANTERIOR: ', roleData[infoUser.infoUser[0].role].name)
    console.log('ROL NUEVO: ', actualRole)
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
                actualRole !== '' && actualRole !== roleData[infoUser.infoUser[0].role].name && (
                  <Button onPress={onOpen} color="primary" variant="shadow">
                    Confirmar
                  </Button>
                )
              }
              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                  {(onClose) => (
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
                  )}
                </ModalContent>
              </Modal>
            </form>
          </article>
        </div>
      </section>
    )
  } else {
    return null
  }
}