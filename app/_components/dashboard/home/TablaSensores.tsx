'use client'
import { useEffect, useState, useRef } from "react"
import { Table, TableColumn, TableHeader, TableBody, TableRow, TableCell, Button } from "@nextui-org/react"
import { useSelector } from "react-redux"
import { useRouter } from "next/navigation"


const TablaSensores = () => {
  const fetched = useRef(false)
  const [sensores, setSensores] = useState([])
  const [areas, setAreas] = useState([]) as any
  const selectedParking = useSelector((state: any) => state.parkingPlace)
  const router = useRouter()

  useEffect(() => {
    async function getSensores() {
      
      console.log(areas)
      const res = await fetch('/api/sensores', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await res.json()

      setSensores(data.data)
      fetched.current = true
    }

    async function getAreas() {
      const res = await fetch(`/api/areas/${selectedParking.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      const data = await res.json()
      setAreas(data.data)
    }

    if (!fetched.current && selectedParking.id != '') {
      getSensores()
    }


  }, [selectedParking, areas])

  return (
    <Table radius='none' className='my-4' aria-labelledby='Vista sensores ejemplo'>
      <TableHeader>
        <TableColumn>Identificador</TableColumn>
        <TableColumn>Área</TableColumn>
        <TableColumn>Último registro</TableColumn>
        <TableColumn>Acciones</TableColumn>
      </TableHeader>
      <TableBody emptyContent={'No se ha encontrado información'}>
        {sensores.map((item: any) => (
          <TableRow key={item.ID}>
            <TableCell>{item.ID}</TableCell>
            <TableCell>{areas.find((area: any) => area?.Board === item.id)?.areaName}</TableCell>
            <TableCell>
              {
                item.Status === 'A' ? <span className='font-semibold text-lime-600'>Disponible</span> : <span className='font-semibold text-red-600'>Ocupado</span>
              }
            </TableCell>
            <TableCell>
              <Button color={'success'} variant={'bordered'} className='font-bold' onClick={() => router.push(`/dashboard/sensores/${item._id}`)}>Ver</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export { TablaSensores }