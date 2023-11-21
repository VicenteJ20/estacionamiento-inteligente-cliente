'use client'

import HighlightCard from '@/app/_components/dashboard/areas/HighlightCard'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { FiPlusCircle } from 'react-icons/fi'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { addManyAreas } from '@/app/_redux/slices/areasSlice'

const headers = [
  {
    name: 'Nombre',
    key: 'areaName'
  },
  {
    name: 'Descripción',
    key: 'areaDescription'
  },
  {
    name: 'Capacidad',
    key: 'capacity'
  },
  {
    name: 'Acciones',
    key: 'actions'
  }
]


const DynamicLayoutArea = () => {
  const router = useRouter()
  const selectedParking = useSelector((state: any) => state.parkingPlace)
  const [availableAreas, setAvailableAreas] = useState([]) as any
  const dispatch = useDispatch()

  useEffect(() => {
    async function getAvailableAreas() {
      const res = await fetch(`/api/areas/${selectedParking.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await res.json()

      setAvailableAreas(data.data)
      dispatch(addManyAreas(data.data))
    }

    if (selectedParking.id) {
      getAvailableAreas()
    }
  }, [selectedParking, dispatch])

  return (
    <section className='flex flex-col gap-4'>
      <div className='w-full grid grid-cols-2 gap-4'>
        <HighlightCard />
      </div>
      <div className='w-full flex flex-col gap-4 pt-5'>
        <header className='flex flex-row gap-4 justify-between items-center'>
          <h2 className='font-semibold text-xl text-blue-900'>Todas las áreas</h2>
          <Button 
            onClick={() => router.push('/dashboard/areas/agregar')}
          size='md' variant='ghost' color='default'>Agregar área <FiPlusCircle /></Button>
        </header>
        <Table aria-label='Areas disponibles' radius='none'>
          <TableHeader>
            {
              headers.map((header: any) => <TableColumn key={header.key}>{header.name}</TableColumn>)
            }
          </TableHeader>
          <TableBody emptyContent='No se ha encontrado información'>
            {
              availableAreas.length > 0 && availableAreas.map((area: any, index: number) => (
                <TableRow key={index}>
                  <TableCell key='nombre' className='font-semibold'>{area.areaName}</TableCell>
                  <TableCell key='descripcion' className='max-w-[28rem] overflow-x-auto whitespace-nowrap overflow-hidden'>{area.areaDescription}</TableCell>
                  <TableCell key='capacidad' align='center'>{area.capacity}</TableCell>
                  <TableCell key='actions' className='flex flex-row gap-2 flex-nowrap items-center'>
                    <Button onClick={() => router.push(`/dashboard/areas/${area.id}`)} size='sm' variant='ghost' color='default'>Editar</Button>
                    <Button size='sm' variant='ghost' color='danger'>Eliminar</Button>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>
    </section>
  )
}

export { DynamicLayoutArea }