'use client'

import { ErrorMessage, Field, Form, Formik } from "formik"
import { useSelector } from "react-redux"
import { Button } from "@nextui-org/react"
import { useRouter } from "next/navigation"

const AddAreaForm = () => {
  const selectedParking = useSelector((state: any) => state.parkingPlace)
  const router = useRouter()

  const handleSubmit = async (values: any, { isSubmitting, resetForm }: any) => {
    try {
      const res = await fetch('/api/areas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          areaName: values.areaName,
          areaDescription: values.areaDescription,
          parkingPlace: selectedParking.id
        })
      })

      if (res.status === 201) {
        router.push('/dashboard/areas')
      }
      console.log(res.status)
    } catch (err: any) {
      console.log(err)
    }
  }

  return (
    <Formik
      initialValues={{
        areaName: '',
        areaDescription: '',
        parkingPlace: '',
      }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className='my-4'>
          <div className='flex flex-col gap-4'>
            <label className='text-zinc-600 font-semibold' htmlFor='areaName'>Nombre de área</label>
            <Field id='areaName' name='areaName' placeholder='Ej: Docentes' className='bg-zinc-50 border border-zinc-300 px-3 py-2 rounded-sm text-zinc-600 outline-none' />
            <span className='text-red-500 font-medium'><ErrorMessage name='areaName' /></span>
          </div>
          <div className='flex flex-col gap-4'>
            <label className='text-zinc-600 font-semibold' htmlFor='areaDescription'>Descripción de área</label>
            <Field as='textarea' id='areaDescription' name='areaDescription' placeholder='Ej: Área de estacionamiento para docentes' className='bg-zinc-50 border border-zinc-300 px-3 py-2 rounded-sm text-zinc-600 outline-none resize-none min-h-[14rem]' />
            <span className='text-red-500'><ErrorMessage name='areaDescription' /></span>
          </div>
          <div className='flex flex-row gap-4 items-center w-full'>
            <Button type='button' onClick={() => router.push('/dashboard/areas')} variant='bordered' radius='none' color='default'>Volver</Button>
            <Button type='submit' variant='shadow' color='primary'  radius='none' disabled={isSubmitting}>Agregar área</Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export { AddAreaForm }