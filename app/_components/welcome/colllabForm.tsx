'use client'

import { Formik, Form, Field, ErrorMessage } from "formik"
import { FiArrowRightCircle } from "react-icons/fi"
import { CollabAccountSchema } from "@/app/_schemas/collabaccount"
import { WelcomeCollaboratorDomains as wd } from "@/app/_dictionaries/es-CL"

const CollabAccountForm = () => {
  const handleSubmit = (values: any, { setSubmitting, resetForm }: any) => {
    console.log(values)
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
                    wd && wd.map((domain) => (
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