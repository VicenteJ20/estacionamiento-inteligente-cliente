'use client'

import { NotFoundItem } from '@/app/_components/dashboard/404'
import { HeaderDashboard } from '@/app/_components/dashboard/Header'
import { parkingPlaceSchema } from '@/app/_schemas/parkingPlace'
import { Button, Spinner } from '@nextui-org/react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'

const ParkingPlaceByIdPage = ({ params }: any) => {
  const [parkingInfo, setParkingInfo] = useState([]) as any
  const [loading, setLoading] = useState(true)
  const [statusFetch, setStatusFetch] = useState(0)
  const trigger = useRef(false)
  const router = useRouter()

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()
  useEffect(() => {
    async function fetchParkingInfo() {
      const response = await fetch(`/api/parking-place/${params.id}`)
      const res = await response.json()

      if (response.status === 200) {
        setParkingInfo([res.data])
      }

      setLoading(false)
      trigger.current = true
    }

    if (!trigger.current) {
      fetchParkingInfo()

    }
  }, [params])


  const handleSubmit = async  (values: any, { setSubmitting, resetForm }: any) => {
    const areTheSame = JSON.stringify(values) == JSON.stringify(parkingInfo[0])

    if (areTheSame) {
      setStatusFetch(200)
    } else {
      try {
        const response = await fetch(`/api/parking-place/${parkingInfo[0].id}}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        })

        setStatusFetch(response.status)
      } catch (err: any) {
        setStatusFetch(400)
        console.log(err)
      }
    }
    onOpen()
    setSubmitting(false)

  }

  return (
    <>
      {
        loading ? (
          <div className='flex flex-col gap-4 items-center justify-center my-[25%]'>
            <Spinner color='primary' />
            <h2 className='text-2xl text-blue-800 font-medium'>Un momento</h2>
            <p className='xl:max-w-[50%] font-base text-center text-zinc-700'>
              Espere un momento mientras consultamos la información en la base de datos.
            </p>
          </div>
        ) : (
          <>
            {
              parkingInfo.length == 0 ? (
                <NotFoundItem title='Lugar no encontrado' description='Al parecer no hemos encontrado el lugar que estás buscando, revisa el identificador que buscas o ponte en contacto con tu administrador' redirect='/dashboard/parking-place' />
              ) : (
                <>
                  <HeaderDashboard title='Información del lugar de estacionamiento' overtitle={`Dashboard / parking-place / ${parkingInfo[0].id}`} description='Aquí puede editar o visualizar la información asociada al lugar de estacionamiento' />
                  <Formik
                    initialValues={parkingInfo[0]}
                    onSubmit={handleSubmit}
                    validationSchema={parkingPlaceSchema}
                    validateOnChange={true}
                  >
                    {({ isSubmitting, values }) => (
                      <Form className='grid grid-cols-2 gap-4 my-4'>
                        <div className='flex flex-col gap-2 col-span-2'>
                          <label htmlFor='alias' className='text-zinc-800 font-medium'>Alias</label>
                          <Field type='text' id='alias' name='alias' className='border border-zinc-300 py-2 px-4 outline-none bg-zinc-100' placeholder='Ej: Sede curicó' />
                          <span className='text-red-600'><ErrorMessage name='alias' /></span>
                        </div>
                        <div className='flex flex-col gap-2'>
                          <label htmlFor='region' className='text-zinc-800 font-medium'>Región</label>
                          <Field type='text' id='region' name='region' className='border border-zinc-300 py-2 px-4 outline-none bg-zinc-100' placeholder='Ej: Maule' />
                          <span className='text-red-600'><ErrorMessage name='region' /></span>
                        </div>
                        <div className='flex flex-col gap-2'>
                          <label htmlFor='comuna' className='text-zinc-800 font-medium'>Comuna</label>
                          <Field type='text' id='comuna' name='comuna' className='border border-zinc-300 py-2 px-4 outline-none bg-zinc-100' placeholder='Ej: Curicó' />
                          <span className='text-red-600'><ErrorMessage name='comuna' /></span>
                        </div>
                        <div className='flex flex-col gap-2'>
                          <label htmlFor='ciudad' className='text-zinc-800 font-medium'>Ciudad</label>
                          <Field type='text' id='ciudad' name='ciudad' className='border border-zinc-300 py-2 px-4 outline-none bg-zinc-100' placeholder='Ej: Curicó' />
                          <span className='text-red-600'><ErrorMessage name='ciudad' /></span>
                        </div>
                        <div className='flex flex-col gap-2'>
                          <label htmlFor='postalCode' className='text-zinc-800 font-medium'>Código Postal</label>
                          <Field type='number' id='postalCode' name='postalCode' className='border border-zinc-300 py-2 px-4 outline-none bg-zinc-100' placeholder='Ej: 3380000' />
                          <span className='text-red-600'><ErrorMessage name='postalCode' /></span>
                        </div>
                        <div className='col-span-2 flex flex-row items-center gap-4'>
                          <Button type='button' variant='ghost' color='default' radius='none' className='w-full' onClick={() => router.push('/dashboard/parking-place')}>Volver</Button>

                          <Button type='submit' variant='shadow' color='primary' radius='none' className='w-full' disabled={isSubmitting}>Guardar cambios</Button>

                        </div>
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
                                    'Se ha actualizado el lugar de estacionamiento con éxtio, ahora podrá visualizarlo en la lista de lugares de estacionamiento y asignar áreas a esta ubicación.'
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
                </>
              )
            }
          </>
        )
      }
    </>
  )

}

export default ParkingPlaceByIdPage