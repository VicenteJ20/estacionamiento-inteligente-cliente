'use client'

import { ErrorMessage, Field, Form, Formik } from "formik"
import { Button, Modal, ModalContent, ModalBody, ModalHeader, Spinner, ModalFooter, useDisclosure } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { boardSchema } from "@/app/_schemas/board"
import { useSelector } from "react-redux"
import { SelectAreaEdit } from "./selectAreaEdit"

const EditBoard = ({ data }: any) => {
  const router = useRouter()
  const [statusFetch, setStatusFetch] = useState(0)
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()
  const selectedArea = useSelector((state: any) => state.selectedArea)

  
  const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
    onOpen()
    values.area = selectedArea.id as string

    const res = await fetch(`/api/boards/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })

    setStatusFetch(res.status)

    setSubmitting(false)
  }

  return (
    <section className='my-5'>
      <Formik
        initialValues={
          {
            model: data.model || '',
            brand: data.brand || '',
            serialNumber: data.serialNumber || '',
          }
        }
        onSubmit={handleSubmit}
        validationSchema={boardSchema}
      >
        {({ isSubmitting }) => (
          <Form className='flex flex-col gap-3'>
            <SelectAreaEdit area={data.area} parking={data.parkingPlace} />
            <div className='flex flex-col gap-3'>
              <label htmlFor='brand' className='font-medium text-zinc-800'>Marca</label>
              <Field type='text' name='brand' id='brand' placeholder='ej: Arduino' className='border border-zinc-400 rounded-sm px-4 py-2 outline-none max-w-xl' readOnly />
              <span className='text-red-500 font-medium'><ErrorMessage name='brand' /></span>
            </div>
            <div className='flex flex-col gap-3'>
              <label htmlFor='model' className='font-medium text-zinc-800'>Modelo</label>
              <Field type='text' name='model' id='model' placeholder='ej: Arduino uno' className='border border-zinc-400 rounded-sm px-4 py-2 outline-none max-w-xl' readOnly />
              <span className='text-red-500 font-medium'><ErrorMessage name='model' /></span>
            </div>
            <div className='flex flex-col gap-3'>
              <label htmlFor='serialNumber' className='font-medium text-zinc-800'>Serial Number</label>
              <Field type='text' name='serialNumber' id='serialNumber' placeholder='ej: A458B123P1' className='border border-zinc-400 rounded-sm px-4 py-2 outline-none max-w-xl' readOnly />
              <span className='text-red-500 font-medium'><ErrorMessage name='serialNumber' /></span>
            </div>
            <div className='flex flex-row gap-3 my-4'>
              <Button type='button' variant='bordered' color='default' className='font-medium px-4 py-2 rounded-sm' onClick={() => router.push('/dashboard/boards')}>Cancelar</Button>
              <Button type='submit' disabled={isSubmitting} variant='shadow' color='secondary' className='font-medium px-4 py-2 rounded-sm'>Modificar</Button>
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
                      <Spinner color='secondary' />
                      <p>Estamos procesando su solicitud, espere un momento.</p>
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                  </>
                ) : (
                  <>
                    <ModalHeader className="flex flex-col gap-1">{statusFetch === 200 ? 'Proceso exitoso' : statusFetch === 400 ? 'Ha ocurrido un error' : 'Ocurrió un error de nuestra parte'}</ModalHeader>
                    <ModalBody>
                      <p>{statusFetch === 200 ?
                        'Se ha registrado la nueva placa con éxito, ahora podrá visualizar su información en la lista de placas y asignar áreas a esta misma.'
                        : statusFetch === 400 ?
                          'Ha ocurrido un error'
                          : 'Ocurrió un error de nuestra parte'}</p>
                    </ModalBody>
                    <ModalFooter>
                      <Button onClick={() => router.push('/dashboard/boards')} variant='ghost' color='default' radius='none'>volver al menú</Button>
                      <Button onClick={() => router.push('/dashboard')} variant='ghost' color='secondary' radius='none'>Ir al dashboard</Button>
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

export { EditBoard }