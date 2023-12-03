'use client'

import { NotFoundItem } from "@/app/_components/dashboard/404"
import { HeaderDashboard } from "@/app/_components/dashboard/Header"
import { useRef, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Spinner, Button, Modal, ModalHeader, ModalBody, ModalFooter, useDisclosure, ModalContent } from "@nextui-org/react"
import { Form, Formik, Field, ErrorMessage } from "formik"
import { areasSchema } from "@/app/_schemas/area"

const EditAreaPage = ({ params }: any) => {

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()

  const [data, setData] = useState([]) as any
  const [loading, setLoading] = useState(true)
  const [statusFetch, setStatusFetch] = useState(0)
  const trigger = useRef(false)
  const router = useRouter()

  useEffect(() => {
    async function getSingleAreaInfo() {
      try {
        const res = await fetch(`/api/singlearea/${params.id}`, {
          method: 'GET',
          headers: {
            contentType: 'application/json'
          }
        })

        const data = await res.json()
        setStatusFetch(res.status)
        if (res.status === 200) {
          setData([data.data])
        }

        setLoading(false)
        trigger.current = true
      } catch (err: any) {
        console.log(err)
      }
    }

    if (!trigger.current) {
      getSingleAreaInfo()
    }
  }, [params])

  const handleSubmit = async (values: any, { isSubmitting, resetForm }: any) => {
    onOpen()
    try {
      const res = await fetch(`/api/areas/${params.id}`, {
        method: 'PATCH',
        headers: {
          contentType: 'application/json'
        },
        body: JSON.stringify(values)
      })


      setStatusFetch(res.status)

      isSubmitting = false
    } catch (err: any) {
      console.log(err)
    }
  }

  return (
    <section className='flex flex-col gap-4 w-full'>
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
              data.length === 0 ? (
                <NotFoundItem title='No se ha encontrado esta área' description='Revise el identificador que está buscando o póngase en contacto con su administrador' redirect='/dashboard/areas' />
              ) : (
                <>
                  <HeaderDashboard title='Editar área' overtitle={`Dashboard / areas / singlearea / ${data[0].id}`} description='Aquí puede editar los datos references del área seleccionada. Las acciones realizadas quedarán en el registro.' />
                  <Formik
                    initialValues={data[0]}
                    onSubmit={handleSubmit}
                    validationSchema={areasSchema}>
                    {({ isSubmitting }) => (
                      <Form>
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
                          <Button type='submit' variant='shadow' color='primary' radius='none' disabled={isSubmitting}>Confirmar cambios</Button>
                        </div>
                      </Form>
                    )}
                  </Formik>

                </>
              )
            }
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
                              'Se ha actualizado el área con éxtio, ahora podrá visualizarlo en la lista de áreas y asignar boards a esta ubicación.'
                              : statusFetch === 400 ?
                                'Ha ocurrido un error'
                                : 'Ocurrió un error de nuestra parte'}</p>
                          </ModalBody>
                          <ModalFooter>
                            <Button onClick={() => router.push('/dashboard/areas')} variant='ghost' color='default' radius='none'>volver al menú</Button>
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
    </section>
  )
}

export default EditAreaPage