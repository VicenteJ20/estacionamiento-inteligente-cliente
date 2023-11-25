'use client'

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Button, Select, SelectItem } from "@nextui-org/react"
import { FiEye as EyeIcon, FiEdit as EditIcon } from "react-icons/fi"
import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { SelectArea } from "./SelectArea"
import { ParkingPlaceSelector } from "../areas/ParkingPlaceSelector"
import { useSelector } from "react-redux"

const LayoutBoards = () => {
  const router = useRouter()
  const [info, setInfo] = useState([]) as any
  const currentArea = useSelector((state: any) => state.selectedArea)

  useEffect(() => {
    async function GetBoardsByArea() {
      try {
        const res = await fetch(`/api/boards?areaId=${currentArea.id}`, {
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

    if (currentArea.id !== '' && currentArea.id !== undefined) {
      GetBoardsByArea()
    }
  }, [currentArea])

  const renderCell = useCallback((board: any, columnKey: React.Key) => {
    const cellValue = board.id

    switch (columnKey) {
      case 'Modelo':
        return (
          <p>{board.model}</p>
        )
      case 'Marca':
        return (
          <p>{board.brand}</p>
        )
      case 'Serial Number':
        return (
          <p>{board.serialNumber}</p>
        )
      case 'Area':
        return (
          <p>{board.area}</p>
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
      <Table aria-label='Registro de boards' radius='none' shadow='sm' className="min-w-fit col-span-4">
        <TableHeader>
          <TableColumn align='start' key='Modelo'>
            Modelo
          </TableColumn>
          <TableColumn align='start' key='Marca'>
            Marca
          </TableColumn>
          <TableColumn align='start' key='serialNumber'>
            Serial Number
          </TableColumn>
          <TableColumn align='start' key='Area'>
            Área
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
          <Button onClick={() => router.push('/dashboard/boards/agregar')} variant='shadow' color='secondary' className='text-white w-full text-lg' radius='none'>Agregar placa</Button>
        </div>
      </div>
    </section>
  )
}

export default LayoutBoards