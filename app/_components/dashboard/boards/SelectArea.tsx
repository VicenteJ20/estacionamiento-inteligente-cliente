'use client'
import { Select, SelectItem, select } from "@nextui-org/react"
import { useEffect, useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setId, setName } from "@/app/_redux/slices/selectedAreaSlice"

const SelectArea = () => {

  const dispatch = useDispatch()
  const alreadyFetched = useRef(false)
  const [oldArea, setOldArea] = useState('')
  const [areas, setAreas] = useState([]) as any
  const selectedArea = useSelector((state: any) => state.selectedArea)
  const currentParking = useSelector((state: any) => state.parkingPlace)

  useEffect(() => {
    async function GetAreaById() {
      try {
        const res = await fetch(`/api/areas/${currentParking.id}`, {
          method: 'GET',
          headers: {
            contentType: 'application/json'
          }
        })

        if (res.status === 200) {
          const resData = await res.json()
          dispatch(setId(resData.data[0].id))
          dispatch(setName(resData.data[0].areaName))
          setAreas(resData.data)
          setOldArea(selectedArea.id)
        }
      } catch (err: any) {
        console.log(err)
      } finally {
        alreadyFetched.current = true
      }
    }

    if (currentParking.id !== '') {
      GetAreaById()
    }
  }, [selectedArea, dispatch, currentParking])

  const handleChange = (e: any) => {
    const selectedArea = areas.find((area: any) => area.id === e.target.value)
    dispatch(setId(selectedArea.id))
    dispatch(setName(selectedArea.alias))
  }

  if (oldArea === selectedArea.id && areas.length > 0 ) {
    return (
      <div className='flex flex-col gap-4'>
        <Select
          radius='none'
          labelPlacement='outside'
          label='Seleccione un área'
          placeholder='Seleccione un área'
          className='w-full'
          onChange={handleChange}
          defaultSelectedKeys={[selectedArea.id]}
        >
          {
            areas.length > 0 && areas.map((area: any) => (
              <SelectItem key={area.id}>{area.areaName}</SelectItem>
            ))
          }
        </Select>
      </div>
    )
  } else return null
}

export { SelectArea }