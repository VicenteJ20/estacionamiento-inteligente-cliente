'use client'

import { HeaderDashboard } from "@/app/_components/dashboard/Header"
import { parkingPlaceSchema } from "@/app/_schemas/parkingPlace"
import { Form, Field, ErrorMessage } from 'formik'
//import { ParkingPlaceMap } from "@/app/_components/dashboard/parking-place/Map"
import { Formik } from "formik"
import dynamic from 'next/dynamic'
import { Button, Spinner } from '@nextui-org/react'
import { useEffect, useState } from "react"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react"
import { useRouter } from "next/navigation"


const ParkingPlaceMap = dynamic(
  () => import('@/app/_components/dashboard/parking-place/Map').then((mod) => mod.ParkingPlaceMap),
  { ssr: false }
);

const AddParkingPlacePage = () => {

  const router = useRouter()

  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [altitude, setAltidude] = useState(0)
  const [statusFetch, setStatusFetch] = useState(0)

  const initialValues = {
    latitude: '',
    longitude: '',
    region: '',
    comuna: '',
    ciudad: '',
    postalCode: '',
    alias: ''
  }

  useEffect(() => {
    async function GetLocation() {
      navigator.geolocation.getCurrentPosition((position: any) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        setAltidude(position.coords.altitude)
      }, (error: any) => {
        console.log(error)
      })
    }

    GetLocation()
  }, [])

  const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
    onOpen()
    values.latitude = latitude
    values.longitude = longitude

    !altitude ? values.altitude = 0 : values.altitude = altitude

    const res = await fetch('/api/parking-place', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })

    setStatusFetch(res.status)
  }

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <section>
      <HeaderDashboard title='Agregar nuevo lugar de estacionamiento' overtitle='Dashboard / parking-place / agregar' />
      <div className={`h-96 my-8 relative ${isOpen ? 'z-0' : ''}`}>
        <ParkingPlaceMap />
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={parkingPlaceSchema}
      >
        {({ isSubmitting, }) => (
          <Form className='flex flex-col gap-5'>
            <section className='flex flex-row items-center gap-4 w-full'>
              <div className='flex-col gap-2 w-full hidden'>
                <label htmlFor='latitude' className='font-medium text-zinc-600'>Latitud:</label>
                <Field type='hidden' id='latitude' name='latitude' className='border border-zinc-300 py-2 px-4 outline-none bg-zinc-200' placeholder='Ej: 38.8711718' readOnly />
                <span><ErrorMessage name='latitude' className='text-medium text-red-500' /></span>
              </div>
              <div className='flex-col gap-2 w-full hidden'>
                <label htmlFor='longitude' className='font-medium text-zinc-600'>Longitud:</label>
                <Field type='hidden' id='longitude' name='longitude' className='border border-zinc-300 py-2 px-4 outline-none bg-zinc-200' placeholder='Ej: -77.056578' readOnly />
                <span className='text-medium text-red-500'><ErrorMessage name='longitude' /></span>
              </div>
            </section>
            <div className='w-full flex flex-col gap-2'>
              <label htmlFor='alias' className='font-medium text-zinc-600'>Alias:</label>
              <Field type='text' id='alias' name='alias' className='border border-zinc-300 py-2 px-4' placeholder='Ej: SEDE CURICÓ' />
              <span className='text-medium text-red-500'><ErrorMessage name='alias' /></span>
            </div>
            <section className='flex flex-row items-center gap-4 w-full'>
              <div className='flex flex-col gap-2 w-full'>
                <label htmlFor='region' className='font-medium text-zinc-600'>Region:</label>
                <Field type='text' id='region' name='region' className='border border-zinc-300 py-2 px-4' placeholder='Ej: Maule' />
                <span className='text-medium text-red-500'><ErrorMessage name='region' /></span>
              </div>
              <div className='flex flex-col gap-2 w-full'>
                <label htmlFor='comuna' className='font-medium text-zinc-600'>Comuna:</label>
                <Field type='text' id='comuna' name='comuna' className='border border-zinc-300 py-2 px-4' placeholder='Ej: Curicó' />
                <span className='text-medium text-red-500'><ErrorMessage name='comuna' /></span>
              </div>
            </section>
            <section className='flex flex-row items-center gap-4 w-full'>
              <div className='flex flex-col gap-2 w-full'>
                <label htmlFor='ciudad' className='font-medium text-zinc-600'>Ciudad:</label>
                <Field type='text' id='ciudad' name='ciudad' className='border border-zinc-300 py-2 px-4' placeholder='Ej: Curicó' />
                <span className='text-medium text-red-500'><ErrorMessage name='ciudad' /></span>
              </div>
              <div className='flex flex-col gap-2 w-full'>
                <label htmlFor='postalCode' className='font-medium text-zinc-600'>Código postal:</label>
                <Field type='number' id='postalCode' name='postalCode' className='border border-zinc-300 py-2 px-4' placeholder='Ej: Curicó' />
                <span className='text-medium text-red-500'><ErrorMessage name='postalCode' /></span>
              </div>
            </section>
            <section className='flex flex-row gap-4 items-center py-12'>
              <Button type='button' onClick={() => router.push('/dashboard/parking-place')} variant='ghost' color='default' radius='none' className='w-full'>Cancelar</Button>
              <Button type='submit' variant='shadow' color='primary' radius='none' className='w-full' disabled={isSubmitting}>Guardar</Button>
            </section>
          </Form>
        )}

      </Formik>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className='z-40'>
        <ModalContent>
          {(onClose) => (
            <>
              {
                statusFetch === 0 ? (
                  <>
                    <ModalHeader className="flex flex-col gap-1">Espere...</ModalHeader>
                    <ModalBody>
                      <Spinner color='primary' />
                      <p>Estamos procesando su solicitud, espere un momento.</p>
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                  </>
                ) : (
                  <>
                    <ModalHeader className="flex flex-col gap-1">{statusFetch === 200 ? 'Proceso exitoso' : statusFetch === 400 ? 'Ha ocurrido un error' : 'Ocurrió un error de nuestra parte'}</ModalHeader>
                    <ModalBody>
                      <p>{statusFetch === 200 ?
                        'Se ha creado el lugar de estacionamiento con éxtio, ahora podrá visualizarlo en la lista de lugares de estacionamiento y asignar áreas a esta ubicación.'
                        : statusFetch === 400 ?
                          'Ha ocurrido un error'
                          : 'Ocurrió un error de nuestra parte'}</p>
                    </ModalBody>
                    <ModalFooter>
                      <Button onClick={() => router.push('/dashboard/parking-place')} variant='ghost' color='default' radius='none'>volver al menú</Button>
                      <Button onClick={() => router.push('/dashboard')} variant='ghost' color='primary' radius='none'>Ir al dashboard</Button>
                    </ModalFooter>
                  </>
                )
              }
            </>
          )}
        </ModalContent>

      </Modal>
    </section>
  )
}

export default AddParkingPlacePage