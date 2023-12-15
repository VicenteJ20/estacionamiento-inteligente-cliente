'use client'

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Button } from "@nextui-org/react"
import { FiEye as EyeIcon, FiEdit as EditIcon } from "react-icons/fi"
import { MdOutlineDeleteOutline as DeleteIcon } from "react-icons/md"
import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

const LayoutParking = () => {
  const router = useRouter()
  const [info, setInfo] = useState([]) as any

  const session = useSession()
  const clientId = session?.data?.user?.id

  useEffect(() => {
    async function GetParkingPlaces() {
      try {
        const res = await fetch(`/api/parking-place?id=${clientId}`, {
          method: 'GET',
          headers: {
            contentType: 'application/json'
          }
        })

        const resData = await res.json()
        setInfo(resData.data)
        console.log(resData.data)
      } catch (err: any) {
        console.log(err)
      }
    }

    GetParkingPlaces()
  }, [clientId])
  
  const renderCell = useCallback((place: any, columnKey: React.Key) => {
    const cellValue = place.id

    switch (columnKey) {
      case 'Alias':
        return (
          <p>{place.alias}</p>
        )
      case 'Ciudad':
        return (
          <p>{place.ciudad}</p>
        )
      case 'Comuna':
        return (
          <p>{place.comuna}</p>
        )
      case 'Region':
        return (
          <p>{place.region}</p>
        )
      case 'Manager':
        return (
          <p>{place.manager}</p>
        )
      case "Acciones":
        return (
          <div className="relative flex items-center gap-4 w-full">
            <Tooltip content="Detalles del lugar">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon onClick={() => router.push(`/dashboard/parking-place/${place.id}`)} />
              </span>
            </Tooltip>
            <Tooltip content="Editar lugar">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon onClick={() => router.push(`/dashboard/parking-place/${place.id}`)} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue
    }
  }, [router])

  return (
    <section className='grid grid-cols-6 gap-16 w-full my-8'>
      <Table aria-label='Registro de lugares de estacionamiento' radius='none' shadow='sm' className="min-w-fit col-span-4">
        <TableHeader>
          <TableColumn align='start' key='Alias'>
            Alias
          </TableColumn>
          <TableColumn align='start' key='Ciudad'>
            Ciudad
          </TableColumn>
          <TableColumn align='start' key='Comuna'>
            Comuna
          </TableColumn>
          <TableColumn align='start' key='Region'>
            Región
          </TableColumn>
          <TableColumn align='start' key='Manager'>
            Manager
          </TableColumn>
          <TableColumn align='start' key='Acciones'>
            Acciones
          </TableColumn>
        </TableHeader>
        <TableBody emptyContent={'No se han registrado lugares de estacionamiento'} items={info}>
          {(item: any) => (
            <TableRow key={item.id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className='w-full col-span-2 flex flex-col gap-4'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl font-bold text-gray-700'>Acciones de utilidad:</h2>
          <Button onClick={() => router.push('/dashboard/parking-place/agregar')} variant='shadow' color='success' className='text-white w-full text-lg' radius='none'>Agregar lugar</Button>
        </div>
      </div>
    </section>
  )
}

export default LayoutParking