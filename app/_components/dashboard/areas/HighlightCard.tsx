'use client'

import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { FiEdit, FiUser } from "react-icons/fi"
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"

const HighlightCard = () => {
  const [availableAreas, setAvailableAreas] = useState([]) as any
  const areasRedux = useSelector((state: any) => state.areasReducer)

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
                <li>{area.areaName}</li>
              </ul>
              <FiEdit />
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