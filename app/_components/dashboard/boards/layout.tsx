'use client'

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Button, Select, SelectItem } from "@nextui-org/react"
import { FiEye as EyeIcon, FiEdit as EditIcon } from "react-icons/fi"
import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { SelectArea } from "./SelectArea"
import { ParkingPlaceSelector } from "../areas/ParkingPlaceSelector"

const LayoutBoards = () => {
  const router = useRouter()
  const [info, setInfo] = useState([]) as any

  useEffect(() => {
    async function GetParkingPlaces() {
      try {
        const res = await fetch('/api/many-boards?id={areaId}', {
          method: 'GET',
          headers: {
            contentType: 'application/json'
          }
        })

        const resData = await res.json()
        if (res.status === 200) {

          setInfo(resData.data)
        }
        console.log(resData.data)
      } catch (err: any) {
        console.log(err)
      }
    }

    //GetParkingPlaces()
  }, [])
  const renderCell = useCallback((board: any, columnKey: React.Key) => {
    const cellValue = board.id

    switch (columnKey) {
      case 'Modelo':
        return (
          <p>{board.alias}</p>
        )
      case 'Marca':
        return (
          <p>{board.ciudad}</p>
        )
      case 'Serial Number':
        return (
          <p>{board.comuna}</p>
        )
      case 'Area':
        return (
          <p>{board.region}</p>
        )
      case 'Agregado por':
        return (
          <p>{board.manager}</p>
        )
      case "Acciones":
        return (
          <div className="relative flex items-center gap-4 w-full">
            <Tooltip content="Detalles de la placa">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon onClick={() => router.push(`/dashboard/boards/${board.id}`)} />
              </span>
            </Tooltip>
            <Tooltip content="Editar placa">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon onClick={() => router.push(`/dashboard/boards/${board.id}`)} />
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
        <TableBody emptyContent={'No se han registrado placas'} items={info}>
          {(item: any) => (
            <TableRow key={item.id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className='w-full col-span-2 flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
          <h3 className='text-xl font-bold text-gray-700'>Filtros</h3>

          <ParkingPlaceSelector />
          <SelectArea />
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl font-bold text-gray-700'>Acciones de utilidad:</h2>
          <Button onClick={() => router.push('/dashboard/parking-place/agregar')} variant='shadow' color='secondary' className='text-white w-full text-lg' radius='none'>Agregar placa</Button>
        </div>
      </div>
    </section>
  )
}

export default LayoutBoards