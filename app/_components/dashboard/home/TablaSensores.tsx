'use client'
import { useEffect, useState, useRef } from "react"
import { Table, TableColumn, TableHeader, TableBody, TableRow, TableCell, Button, Chip } from "@nextui-org/react"
import { useSelector } from "react-redux"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { addManyAreas } from "@/app/_redux/slices/areasSlice"


const TablaSensores = () => {
  const fetched = useRef(false)
  const [sensores, setSensores] = useState([])
  const [areas, setAreas] = useState([]) as any
  const router = useRouter()
  const dispatch = useDispatch()

  const selectedParking = useSelector((state: any) => state.parkingPlace)
  const areasRedux = useSelector((state: any) => state.areasReducer.areas)

  useEffect(() => {

    async function getSensores() {
      console.log('redux')
      console.log(areasRedux)

      console.log(areas)
      const res = await fetch(`/api/sensores?parkingPlace=${selectedParking.id} ${areasRedux.length === 0 ? '&getAreas=true' : ''}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await res.json()

      setSensores(data.data)
      fetched.current = true
      console.log(data.data)
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


  }, [selectedParking, areas, dispatch, areasRedux])

  return (
    <Table radius='none' className='my-4' aria-labelledby='Vista sensores ejemplo'>
      <TableHeader>
        <TableColumn>Identificador</TableColumn>
        <TableColumn>Área</TableColumn>
        <TableColumn>Estado</TableColumn>
        <TableColumn>Último registro</TableColumn>
        {/* <TableColumn>Acciones</TableColumn> */}
      </TableHeader>
      <TableBody emptyContent={'No se ha encontrado información'}>
        {sensores && sensores.map((item: any) => (
          <TableRow key={item.Id}>
            <TableCell>{item.Id}</TableCell>
            <TableCell>{!item.Area ? 'No disponible' : item.Area}</TableCell>
            <TableCell>
              {
                item.fecha_ingreso ?  new Date(item.fecha_ingreso).toLocaleString('es-CL') : 'Sin registro'
              }
            </TableCell>
            <TableCell>
              {
                item.Status === 'F' ? <Chip color='success'>Disponible</Chip> :
                  item.Status === 'I' ? <Chip color='warning'>Interferencia</Chip> : <Chip color='danger'>Ocupado</Chip>
              }
            </TableCell>
            {/* <TableCell>
              <Button color={'success'} variant={'bordered'} className='font-bold' onClick={() => router.push(`/dashboard/sensores/${item._id}`)}>Ver</Button>
            </TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export { TablaSensores }