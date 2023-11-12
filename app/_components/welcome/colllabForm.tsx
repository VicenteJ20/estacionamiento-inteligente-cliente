'use client'

import { Formik, Form, Field, ErrorMessage } from "formik"
import { FiArrowRightCircle } from "react-icons/fi"
import { CollabAccountSchema } from "@/app/_schemas/collabaccount"
import { getEnterprises } from "@/app/_lib/welcome/getEnterprises"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useRouter } from "next/navigation"
import { setEnterpriseId, setEnterpriseName, setMessage, setType } from "@/app/_redux/slices/collabSlice"

const CollabAccountForm = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [domains, setDomains] = useState([]) as any

  useEffect(() => {
    async function getDomains() {
      const enterprises = await getEnterprises()
      setDomains(enterprises.data)
    }

    getDomains()
  }, [])

  const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
    const { domain, message } = values
    const selectedItem = domains.find((item: any) => item.id === domain)
    dispatch(setType(1))
    dispatch(setEnterpriseId(domain))
    dispatch(setEnterpriseName(selectedItem.name))
    dispatch(setMessage(message))
    setSubmitting(false)

    router.push('/dashboard/welcome/select-account/collaborator/finish')
  }

  return (
    <section>
      <Formik
        initialValues={{
          domain: '',
          message: ''
        }}
        onSubmit={handleSubmit}
        validationSchema={CollabAccountSchema}
      >
        {({ isSubmitting, }) => (
          <>
            <Form className='flex flex-col gap-5'>
              <div className='flex flex-col gap-2'>
                <label htmlFor='domain' className='font-medium'>Dominio</label>
                <Field as='select' name='domain' className='border border-gray-300 rounded-md px-3 py-2'>
                  <option value=''>Seleccione una opción</option>
                  {
                    domains && domains.length > 0 && domains.map((domain: any) => (
                      <option key={domain.id} value={domain.id}>{domain.name}</option>
                    ))
                  }
                </Field>
                <span className='text-red-500'><ErrorMessage name='domain' /></span>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='message' className='font-medium'>Mensaje (Opcional)</label>
                <Field as='textarea' name='message' className='border border-gray-300 rounded-md px-3 py-2 resize-none overflow-y-auto min-h-[10rem]' placeholder='Puede escribir un mensaje personalizado para el administrador del dominio seleccionado.' />
              </div>
              <div className="w-full text-center">
                <button type='submit' disabled={isSubmitting} className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 ease-in-out flex flex-row gap-2 items-center justify-center text-lg max-w-fit mx-auto'>Continuar <FiArrowRightCircle /></button>
              </div>
            </Form>
          </>
        )}

      </Formik>
    </section>
  )
}

export { CollabAccountForm }