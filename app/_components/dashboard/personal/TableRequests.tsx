'use client'

import { useEffect, useCallback, useState, useRef } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Tooltip, } from "@nextui-org/react";
import { FiEye as EyeIcon } from "react-icons/fi";
import { MdOutlineDeleteOutline as DeleteIcon } from "react-icons/md";
import { useRouter } from "next/navigation";

export const TableRequests = () => {

  const alreadyFetched = useRef(false)
  const [info, setInfo] = useState([]) as any
  const router = useRouter()

  useEffect(() => {
    async function GetAllRequest() {
      try {
        const res = await fetch('/api/request', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await res.json()
        setInfo(data.data)
        alreadyFetched.current = true
      } catch (err: any) {
        console.log(err)
      }
    }

    if (!alreadyFetched.current) {
      GetAllRequest()
    }
  }, [info])

  const renderCell = useCallback((user: any, columnKey: React.Key) => {
    const cellValue = user.id

    switch (columnKey) {
      case 'newColaborator':
        return (
          <User
            avatarProps={{ radius: "lg", src: !user.image ? 'https://i.pravatar.cc/150' : user.image, isBordered: true, color: 'warning' }}
            description={user.email}
            name={user.name}
            className="gap-4 justify-start"
          />
        )
      case 'actions':
        return (
          <div className='relative flex items-center gap-4 w-full'>
            <Tooltip content='Ver solicitud'>
              <button className='focus:outline-none'>
                <EyeIcon onClick={() => router.push(`/dashboard/personal/${user.id}`)} className='text-xl text-gray-600' />
              </button>
            </Tooltip>
            <Tooltip content='Eliminar solicitud'>
              <button className='focus:outline-none'>
                <DeleteIcon className='text-xl text-gray-600' />
              </button>
            </Tooltip>
          </div>
        )
      default:
        return cellValue
    }
  }, [router])

  return (
    <Table aria-label='Solicitudes pendientes' radius='none' shadow='sm'>
      <TableHeader>
        <TableColumn align='start' key='newColaborator'>
          SOLICITANTE
        </TableColumn>
        <TableColumn align='start' key='actions'>
          ACCIONES
        </TableColumn>
      </TableHeader>
      <TableBody emptyContent={'No hay solicitudes pendientes'} items={info}>
        {(item: any) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}