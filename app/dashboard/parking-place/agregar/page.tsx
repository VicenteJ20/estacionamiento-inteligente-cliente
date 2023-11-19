'use client'

import { HeaderDashboard } from "@/app/_components/dashboard/Header"
import { FormParkingPlace } from "@/app/_components/dashboard/parking-place/Form"
import { parkingPlaceSchema } from "@/app/_schemas/parkingPlace"
//import { ParkingPlaceMap } from "@/app/_components/dashboard/parking-place/Map"
import { Formik } from "formik"
import dynamic from 'next/dynamic'
import L from 'leaflet'
import { useEffect, useRef } from "react"

const ParkingPlaceMap = dynamic(
  () => import('@/app/_components/dashboard/parking-place/Map').then((mod) => mod.ParkingPlaceMap),
  { ssr: false }
);

const AddParkingPlacePage = () => {

  const initialValues = {
    latitude: '',
    longitude: '',
    region: '',
    comuna: '',
    ciudad: '',
    postalCode: '',
  }

  const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
    console.log(values)
  }


  return (
    <section>
      <HeaderDashboard title='Agregar nuevo lugar de estacionamiento' overtitle='Dashboard / parking-place / agregar' />
      <div className='h-96 my-8'>
        <ParkingPlaceMap />
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={parkingPlaceSchema}
      >
        {({ isSubmitting, }) => (
          <FormParkingPlace isSubmitting={isSubmitting} />
        )}

      </Formik>
    </section>
  )
}

export default AddParkingPlacePage