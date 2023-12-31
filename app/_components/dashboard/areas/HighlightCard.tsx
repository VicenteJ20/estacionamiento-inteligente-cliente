'use client'

import { Card, CardBody, CardHeader, Button } from "@nextui-org/react"
import { FiEdit, FiUser } from "react-icons/fi"
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/navigation"

const HighlightCard = () => {
  const [availableAreas, setAvailableAreas] = useState([]) as any
  const areasRedux = useSelector((state: any) => state.areasReducer)

  const router = useRouter()

  useEffect(() => {
    setAvailableAreas(areasRedux.areas)
  }, [areasRedux])

  return (
    <section className='grid grid-cols-2 w-fit'>
      {
        availableAreas.length > 0 && availableAreas.map((area: any) => (
          <Card key={area.id} radius='none' className='min-w-unit-6 border border-zinc-300' shadow='none'>
            <CardHeader className='flex flex-row gap-10 justify-between items-center'>
              <ul className='text-base font-semibold text-zinc-800 flex flex-row gap-2 items-center'>
                <li><FiUser className='text-lg' /></li>
                <li className='whitespace-nowrap'>{area.areaName}</li>
              </ul>
              <Button isIconOnly variant='ghost' aria-label='edit icon' onClick={() => router.push(`/dashboard/areas/${area.id}`)}>
                <FiEdit />
              </Button>
            </CardHeader>
            <CardBody className='grid grid-cols-2 gap-2'>
              <div>
                <h2 className='font-semibold text-2xl'>{area.capacity}</h2>
                <p className='text-base text-zinc-500 font-medium'>Total</p>
              </div>
            </CardBody>
          </Card>
        ))
      }

    </section>
  )
}

export default HighlightCard