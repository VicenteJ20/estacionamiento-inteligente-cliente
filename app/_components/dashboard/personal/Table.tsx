'use client'

import { useEffect, useCallback, useState, useRef } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps } from "@nextui-org/react";
import { FiEdit as EditIcon, FiEye as EyeIcon } from "react-icons/fi";
import { MdOutlineDeleteOutline as DeleteIcon } from "react-icons/md";

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
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader>
        <TableColumn align="start" key='name'>Colaborador</TableColumn>
        <TableColumn align="start" key='role'>Rol</TableColumn>
        <TableColumn align="center" key='status'>Estado</TableColumn>
        <TableColumn align="center" key='actions'>Acciones</TableColumn>
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