'use client'

import { Select, SelectItem } from '@nextui-org/react'
import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TbSelector } from "react-icons/tb";
import { setId, setAlias } from '@/app/_redux/slices/selectedParkingSlice';

const ParkingPlaceSelector = () => {

  const [parkingPlace, setParkingPlace] = useState([]) as any
  const dispatch = useDispatch()

  const selectedParking = useSelector((state: any) => state.parkingPlace)
  const alreadyFetched = useRef(false)


  useEffect(() => {
    async function getAvailableParkingPlace() {
      try {
        const res = await fetch('/api/parking-place', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const data = await res.json()
        setParkingPlace(data.data)

        dispatch(setId(data.data[0].id))
        dispatch(setAlias(data.data[0].alias))

      } catch (err: any) {
        console.log(err)
      }
    }

    if (!alreadyFetched.current) {
      getAvailableParkingPlace()
    }

  }, [selectedParking, dispatch])

  if (parkingPlace.length > 0) {
    return (
      <Select
        labelPlacement='outside'
        label='Lugar de estacionamiento'
        className='max-w-xs'
        selectorIcon={<TbSelector />}
        defaultSelectedKeys={[selectedParking.id]}
      >
        {
          parkingPlace.length > 0 && parkingPlace.map((place: any) => (
            <SelectItem key={place.id} value={place.id}>
              {place.alias}
            </SelectItem>
          ))
        }
      </Select>
    )
  } else return null
}

export { ParkingPlaceSelector }