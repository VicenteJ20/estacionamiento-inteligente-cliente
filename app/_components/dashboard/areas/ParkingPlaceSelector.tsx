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
        alreadyFetched.current = true

      } catch (err: any) {
        console.log(err)
      }
    }

    if (!alreadyFetched.current) {
      getAvailableParkingPlace()
    }

  }, [selectedParking, dispatch])

  const handleChange = (e: any) => {
    const selectedParking = parkingPlace.find((place: any) => place.id === e.target.value)
    dispatch(setId(selectedParking.id))
    dispatch(setAlias(selectedParking.alias))
  }

  if (parkingPlace.length > 0) {
    return (
      <Select
        labelPlacement='outside'
        label='Lugar de estacionamiento'
        className='max-w-xs bg-white'
        selectorIcon={<TbSelector />}
        onChange={handleChange}
        defaultSelectedKeys={[selectedParking.id]}
        radius='none'
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