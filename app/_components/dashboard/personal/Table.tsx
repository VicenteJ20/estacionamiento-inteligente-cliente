'use client'

import { useEffect, useCallback, useState, useRef } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps } from "@nextui-org/react";
import { FiEdit as EditIcon, FiEye as EyeIcon } from "react-icons/fi";
import { MdOutlineDeleteOutline as DeleteIcon } from "react-icons/md";
import { useRouter } from "next/navigation";

const statusColorMap: Record<string, ChipProps["color"]> = {
  null: "default",
  1: "success",
  2: "danger",
  3: "warning",
  4: "danger"
};

const userStatus: any = [
  '', 'Activo', 'Inactivo', 'Vacaciones', 'Suspendido'
]


const TablePersonal = () => {
  const alreadyFetched = useRef(false)
  const [info, setInfo] = useState([]) as any
  const router = useRouter()

  useEffect(() => {
    async function GetAllCollaborators(id: string) {
      try {
        const res = await fetch('/api/collaborator?id=' + id, {
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
      GetAllCollaborators('closx5d7s00032c7osbttudg3')
    }
  }, [info])

  const renderCell = useCallback((user: any, columnKey: React.Key) => {

    const cellValue = user.id
    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: !user.image ? 'https://i.pravatar.cc/150' : user.image, 
            isBordered: true, color: 'default' }}
            description={user.email}
            name={user.name}
            className="gap-4 justify-start"
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{user.role}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
            {userStatus[user.status] ? userStatus[user.status] : 'Desconocido'}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-4 w-full">
            <Tooltip content="Detalles del usuario">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon onClick={() => router.push(`/dashboard/personal/${user.id}`)} />
              </span>
            </Tooltip>
            <Tooltip content="Editar usuario">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon onClick={() => router.push(`/dashboard/personal/${user.id}`)} />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Desvincular usuario">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, [router]);

  return (
    <Table aria-label="Usuarios previamente registrados y aprobados" radius="none" shadow="sm">
      <TableHeader>
        <TableColumn align="start" key='name' className='text-md'>COLABORADOR</TableColumn>
        <TableColumn align="start" key='role' className='text-md'>ROL</TableColumn>
        <TableColumn align="center" key='status' className='text-md'>ESTADO</TableColumn>
        <TableColumn align="center" key='actions' className='text-md'>ACCIONES</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No hay usuarios registrados"} items={info}>
        {(item: any) => (
          <TableRow key={item.user.id}>
            {(columnKey) => <TableCell>{renderCell(item.user, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default TablePersonal;