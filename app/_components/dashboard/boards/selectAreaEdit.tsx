'use client'
import { Select, SelectItem, select } from "@nextui-org/react"
import { useEffect, useState, useRef } from "react"
import { setId, setName } from "@/app/_redux/slices/selectedAreaSlice"
import { useDispatch, useSelector } from "react-redux"

interface SelectAreaEditProps {
  area: any,
  parking: any
}

const SelectAreaEdit = ({ area, parking }: SelectAreaEditProps) => {

  const alreadyFetched = useRef(false)
  const [areas, setAreas] = useState([]) as any
  const selectedArea = useSelector((state: any) => state.selectedArea)
  const dispatch = useDispatch()

  useEffect(() => {
    async function GetAreaById() {
      try {
        const res = await fetch(`/api/areas/${parking}`, {
          method: 'GET',
          headers: {
            contentType: 'application/json'
          }
        })

        if (res.status === 200) {
          const resData = await res.json()
          setAreas(resData.data)
        }
      } catch (err: any) {
        console.log(err)
      } finally {
        alreadyFetched.current = true
      }
    }

    GetAreaById()
  }, [alreadyFetched,]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e: any) => {
    const selectedArea = areas.find((area: any) => area.id === e.target.value)

    if (selectedArea) {
      dispatch(setId(selectedArea.id))
      dispatch(setName(selectedArea.areaName))
    }
  }

  if (areas.length > 0) {
    return (
      <div className='flex flex-col gap-4'>
        <Select
          label='Seleccione un área'
          radius='none'
          labelPlacement='outside'

          onChange={handleChange}
          defaultSelectedKeys={[selectedArea.id]}
          value={selectedArea.id}
          className='max-w-xl'
          variant='bordered'
          color='secondary'
        >
          {
            areas.map((area: any, index: number) => (
              <SelectItem value={area.id} key={area.id}>{area.areaName}</SelectItem>
            ))
          }
        </Select>
      </div>
    )
  } else return null
}

export { SelectAreaEdit }