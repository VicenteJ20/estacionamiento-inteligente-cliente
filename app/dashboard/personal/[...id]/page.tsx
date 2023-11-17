'use client'

import { HeaderDashboard } from "@/app/_components/dashboard/Header"
import { RequestPage } from "@/app/_components/dashboard/personal/RequestPage"
import { UserPage } from "@/app/_components/dashboard/personal/UserPage"
import { getAllRoles } from "@/app/_lib/personal/roles"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addManyRoles } from "@/app/_redux/slices/rolesSlice"
import { Accordion, AccordionItem } from '@nextui-org/react'

const PersonalInfo = ({ params }: any) => {
  const [personalInfo, setPersonalInfo] = useState([]) as any
  const dispatch = useDispatch()
  const availableRoles = useSelector((state: any) => state.availableRoles.roles)

  useEffect(() => {
    async function fetchPersonalInfo() {
      const response = await fetch(`/api/collaborator/${params.id}`)
      const res = await response.json()

      if (response.status === 200) {
        setPersonalInfo([res.data])
      }

      if (availableRoles.length === 0) {
        const roles =  await getAllRoles()
        dispatch(addManyRoles(roles.roles))
      }
    }

    

    fetchPersonalInfo()
  }, [params, availableRoles, dispatch])

  return (
    <>
      <section className='grid grid-cols-6 gap-4 w-full h-full pr-8'>
        <div className='col-span-4'>
          {
            personalInfo && personalInfo.length > 0 && !personalInfo[0].role && !personalInfo[0].accountType ? (
              <RequestPage infoUser={personalInfo} />
            ) : (
              <UserPage infoUser={personalInfo} />
            )
          }
        </div>
        <div className='col-span-2 bg-zinc-50 p-8 flex flex-col gap-8'>
          <HeaderDashboard title='Detalles adicionales' description='Aquí puede visualizar los detalles de cada uno de los roles disponibles, para que seleccione el más adecuado para cada colaborador.' />
          <Accordion variant="light" className="max-h-[40rem] ">
            {
              availableRoles.length > 0 && (
                availableRoles.map((role: any) => (
                  <AccordionItem key={role.id} aria-label={`role-${role.name}`} title={role.name}>
                    {role.description}
                  </AccordionItem>
                ))
              )
            }
          </Accordion>

        </div>
      </section>
    </>
  )
}

export default PersonalInfo