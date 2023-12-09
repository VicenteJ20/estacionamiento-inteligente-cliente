'use client'

import { NotFoundItem } from "@/app/_components/dashboard/404"
import { HeaderDashboard } from "@/app/_components/dashboard/Header"
import { useRef, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Spinner, Button, Modal, ModalHeader, ModalBody, ModalFooter, useDisclosure, ModalContent } from "@nextui-org/react"
import { EditBoard } from "@/app/_components/dashboard/boards/EditBoard"
import { useDispatch } from "react-redux"
import { setId, setName } from "@/app/_redux/slices/selectedAreaSlice"

const EditAreaPage = ({ params }: any) => {
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()

  const [data, setData] = useState([]) as any
  const [loading, setLoading] = useState(true)
  const [statusFetch, setStatusFetch] = useState(0)
  const trigger = useRef(false)
  const router = useRouter()

  useEffect(() => {
    async function getSingleAreaInfo() {
      try {
        const res = await fetch(`/api/singleboard/${params.id}`, {
          method: 'GET',
          headers: {
            contentType: 'application/json'
          }
        })

        const data = await res.json()
        setStatusFetch(res.status)
        if (res.status === 200) {
          dispatch(setId(data.data.area))
          dispatch(setName(data.data.areaName))
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
  }, [params, dispatch])

  const handleSubmit = async (values: any, { isSubmitting, resetForm }: any) => {
    onOpen()
    try {
      const res = await fetch(`/api/singleboard/${params.id}`, {
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
                <NotFoundItem title='No se ha encontrado esta placa' description='Revise el identificador que está buscando o póngase en contacto con su administrador' redirect='/dashboard/boards' />
              ) : (
                <>
                  <HeaderDashboard title='Editar placa' description='En esta sección usted podrá editar la información de la placa que seleccione, esta placa puede ser modificada más adelante para que cambiar su área' overtitle={`Dashboard / boards / editar / ${data[0].id}`} />
                  <EditBoard data={data[0]} />
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
                            <Button onClick={() => router.push('/dashboard/boards')} variant='ghost' color='default' radius='none'>volver al menú</Button>
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