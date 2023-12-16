'use client'
import { useState } from "react"
import { HeaderDashboard } from "@/app/_components/dashboard/Header"
import { Avatar, Button, Modal, ModalBody, ModalContent, ModalHeader, ModalFooter, useDisclosure, Spinner } from "@nextui-org/react"
import { useRouter } from "next/navigation"

export const RequestPage = (infoUser: any) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const [reject, setReject] = useState(false)
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleRedirect = async () => {
    setConfirm(false)
    setLoading(true)

    try {
      const res = await fetch('/api/request', {
        method: 'PATCH',
        headers: {
          contentType: 'application/json'
        },
        body: JSON.stringify({
          collaborator: infoUser.infoUser[0].id
        })
      })

      if (res.status === 200) {
        setLoading(false)
        setSuccess(true)
        setError(false)
      }
    } catch (err: any) {
      setError(true)
      setSuccess(false)
      setLoading(false)
    }
  }

  const handleReject = async () => {
    try {
      await fetch(`/api/request`, {
        method: 'DELETE',
        headers: {
          contentType: 'application/json'
        },
        body: JSON.stringify({ userId: infoUser.infoUser[0].id })
      })
    } catch (err: any) {
      console.log(err)
    }

    router.push('/dashboard/personal')
  }




  if (infoUser && infoUser.infoUser && infoUser.infoUser.length > 0) {
    return (
      <>
        <section>
          <div className='flex flex-col gap-8'>
            <HeaderDashboard overtitle={`Dashboard / personal / info / ${infoUser.infoUser[0].id}`} title={`Registro de solicitud de acceso `} description='Tenga cuidado con las personas que acepta que se unan a su organización y el nivel de acceso que tenga mediante el rol' />
            <h3 className='text-xl font-semibold text-blue-900'>Datos del solicitante</h3>
            <article className='flex flex-col gap-4'>
              <Avatar src={infoUser.infoUser[0].image ? infoUser.infoUser[0].image : 'https://i.pravatar.cc/150'} size='lg' radius='none' className='w-40 h-40' isBordered={true} color='default' />
              <form className='flex flex-col gap-4 max-w-6xl' onSubmit={(e: any) => e.preventDefault()}>
                <label className='flex flex-col gap-2'>
                  <span className='text-lg text-blue-800 font-medium'>Nombre</span>
                  <input type='text' readOnly value={infoUser.infoUser[0].name} className='w-full border border-gray-300 rounded-sm p-3 outline-none text-zinc-500' />
                </label>
                <label className='flex flex-col gap-2'>
                  <span className='text-lg text-blue-800 font-medium'>Email</span>
                  <input type='email' readOnly value={infoUser.infoUser[0].email} className='w-full border border-gray-300 rounded-sm p-3 outline-none text-zinc-500' />
                </label>
                <label className='flex flex-col gap-2'>
                  <span className='text-lg text-blue-800 font-medium'>Mensaje personalizado:</span>
                  <textarea readOnly value={infoUser.infoUser[0].name} className='w-full border border-gray-300 rounded-sm p-3 outline-none text-zinc-500 resize-none' />
                </label>
              </form>
              <div className='flex flex-row gap-2 items-center justify-start'>
                <Button color='danger' variant='ghost' onClick={() => {
                  setReject(true)
                  setConfirm(false)
                  setSuccess(false)
                  onOpen()
                }}>Rechazar solicitud</Button>
                <Button color='primary' variant='shadow' onClick={() => {
                  setConfirm(true)
                  onOpen()
                }}>Aceptar solicitud</Button>
              </div>
            </article>
          </div>
        </section>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} >
          <ModalContent>
            {(onClose) => (
              <>
                {
                  confirm ? (
                    <>
                      <ModalHeader>Consentimiento</ModalHeader>
                      <ModalBody>
                        <p>Al hacer click en el botón <strong>CONFIRMAR</strong>, aceptará al usuario y le otorgará los permisos de colaborador, los cuales podrán ser cambiados más adelante.</p>
                        <p>Una vez aceptado al nuevo usuario, quedará en el registro su id, como manager a modo de dejar evidencia de las acciones realizadas</p>
                      </ModalBody>
                      <ModalFooter>
                        <Button onClick={onClose} type='button' color='default' variant='ghost'>Cancelar</Button>
                        <Button onClick={handleRedirect} type='button' color='primary' variant='shadow'>Confirmar</Button>
                      </ModalFooter>
                    </>
                  ) : (
                    <>
                      {
                        loading ? (
                          <>
                            <ModalBody className='py-8 flex flex-col gap-4'>
                              <h2 className='text-center text-lg text-blue-700'>Cargando...</h2>
                              <p className='text-center'>Espere un momento mientras realizamos las operaciones necesarias.</p>
                            </ModalBody>
                          </>
                        ) : (
                          <>
                            {
                              success && !error ? (
                                <>
                                  <ModalHeader>¡Listo!</ModalHeader>
                                  <ModalBody className='py-8 flex flex-col gap-4'>
                                    <Spinner color='primary' />
                                    <h2 className='text-center text-lg text-blue-700'>El usuario ha sido aceptado</h2>
                                    <p className='text-center'>Recuerde que el usuario debe volver a iniciar sesión para acceder con su nuevo rol</p>
                                    <Button onClick={() => router.push('/dashboard/personal')} color='primary' variant='shadow'>Volver al dashboard</Button>
                                  </ModalBody>
                                </>
                              ) : (
                                <>
                                  {
                                    reject ? (
                                      <>
                                        <ModalHeader>Confirmación de rechazo</ModalHeader>
                                        <ModalBody className='py-8 flex flex-col gap-4'>
                                          <p>Al hacer click en el botón <strong>CONFIRMAR</strong>, rechazará al usuario y este quedará bloqueado de la plataforma. Esto significa que este, no podrá realizar nuevas solcitudes ni enrolarse en el sistema como un colaborador.</p>
                                          <p>Una vez confirmado el rechazo al nuevo usuario, quedará en el registro su id, como manager a modo de dejar evidencia de las acciones realizadas</p>
                                        </ModalBody>
                                        <ModalFooter>
                                          <Button onClick={onClose} color='default' variant='ghost'>Cancelar</Button>
                                          <Button onClick={handleReject} color='danger' variant='bordered'>Rechazar</Button>
                                        </ModalFooter>
                                      </>
                                    ) : (
                                      <>
                                        <ModalHeader>¡Ooops! ha ocurrido un error.</ModalHeader>
                                        <ModalBody className='py-8 flex flex-col gap-4'>
                                          <h2 className='text-center text-lg text-blue-700'>Error</h2>
                                          <p className='text-center'>Ha ocurrido un error, por favor vuelva a intentarlo más tarde.</p>
                                        </ModalBody>
                                      </>
                                    )
                                  }
                                </>
                              )
                            }
                          </>
                        )
                      }
                    </>
                  )
                }
              </>
            )}
          </ModalContent >
        </Modal >
      </>
    )

  } else {
    return null
  }
}