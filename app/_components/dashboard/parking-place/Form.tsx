'use client'

import { Form, Field, ErrorMessage, useFormikContext } from 'formik'
import { useState, useEffect } from 'react'

const FormParkingPlace = (isSubmitting: any) => {
  const [handleLocationPermission, setHandleLocationPermission] = useState(true)

  const { setFieldValue } = useFormikContext()

  useEffect(() => {
    async function GetLocation() {
      navigator.geolocation.getCurrentPosition((position: any) => {
        console.log(position)
        setFieldValue('latitude', position.coords.latitude)
        setFieldValue('longitude', position.coords.longitude)
      }, (error: any) => {
        console.log(error)
      })
    }

    if (handleLocationPermission) {
      GetLocation()
    }
  }, [handleLocationPermission, setFieldValue])


  return (
    <Form className='flex flex-col gap-5'>
      <section className='flex flex-row items-center gap-4 w-full'>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor='latitude' className='font-medium text-zinc-600'>Latitud:</label>
          <Field type='number' id='latitude' name='latitude' className='border border-zinc-300 py-2 px-4' placeholder='Ej: 38.8711718' />
          <span><ErrorMessage name='latitude' className='text-medium text-red-500' /></span>
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor='longitude' className='font-medium text-zinc-600'>Longitud:</label>
          <Field type='number' id='longitude' name='longitude' className='border border-zinc-300 py-2 px-4' placeholder='Ej: -77.056578' />
          <span className='text-medium text-red-500'><ErrorMessage name='longitude'  /></span>
        </div>
      </section>
      <section className='flex flex-row items-center gap-4 w-full'>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor='region' className='font-medium text-zinc-600'>Region:</label>
          <Field type='number' id='region' name='region' className='border border-zinc-300 py-2 px-4' placeholder='Ej: Maule' />
          <span className='text-medium text-red-500'><ErrorMessage name='region'  /></span>
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor='comuna' className='font-medium text-zinc-600'>Comuna:</label>
          <Field type='number' id='comuna' name='comuna' className='border border-zinc-300 py-2 px-4' placeholder='Ej: Curicó' />
          <span className='text-medium text-red-500'><ErrorMessage name='comuna'  /></span>
        </div>
      </section>
      <section className='flex flex-row items-center gap-4 w-full'>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor='ciudad' className='font-medium text-zinc-600'>Ciudad:</label>
          <Field type='number' id='ciudad' name='ciudad' className='border border-zinc-300 py-2 px-4' placeholder='Ej: Curicó' />
          <span className='text-medium text-red-500'><ErrorMessage name='ciudad'  /></span>
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor='postalCode' className='font-medium text-zinc-600'>Código postal:</label>
          <Field type='number' id='postalCode' name='postalCode' className='border border-zinc-300 py-2 px-4' placeholder='Ej: Curicó' />
          <span className='text-medium text-red-500'><ErrorMessage name='postalCode'  /></span>
        </div>
      </section>
    </Form>
  )
}

export { FormParkingPlace }