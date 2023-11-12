'use client'

import { HeaderDashboard } from "@/app/_components/dashboard/Header"
import { Avatar, Input, Select, SelectItem, useSelect } from "@nextui-org/react"
import { useEffect } from "react"
import { getAllRoles } from "@/app/_lib/personal/roles"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addManyRoles } from "@/app/_redux/slices/rolesSlice"

export const UserPage = (infoUser: any) => {

  const roleData = useSelector((state: any) => state.availableRoles.roles)
  const dispatch = useDispatch()

  useEffect(() => {
    async function handler() {
      const roles =  await getAllRoles()
      dispatch(addManyRoles(roles.roles))
    }

    if (roleData.length === 0) {
      handler()
    }
  }, [dispatch, roleData])

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
            </form>
          </article>
        </div>
      </section>
    )
  } else {
    return null
  }
}