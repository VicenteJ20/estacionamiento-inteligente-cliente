'use client'

import { Formik, Form, Field, ErrorMessage } from "formik"
import { AdminAccountSchema } from "@/app/_schemas/adminaccount"
import { FiArrowRightCircle } from "react-icons/fi"

const AdminAccountForm = () => {
  const handleSubmit = (values: any, { setSubmitting, resetForm }: any) => {
    console.log(values)
  }

  return (
    <section>
      <Formik
        initialValues={{
          name: '',
          rut: '',
          alias: '',
          address: ''
        }}
        onSubmit={handleSubmit}
        validationSchema={AdminAccountSchema}
      >
        {({ isSubmitting, }) => (
          <>
            <Form className='flex flex-col gap-5'>
              <div className='flex flex-col gap-2'>
                <label htmlFor='name' className='font-medium'>Nombre comercial</label>
                <Field type='text' name='name' className='border-2 border-zinc-300 rounded-md p-2' placeholder='ej: Smart parking ltda.' />
                <span className='text-red-500'><ErrorMessage name='name' /></span>
              </div>
              <section className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='rut' className='font-medium'>RUT empresa y/o sociedad</label>
                  <Field type='text' name='rut' className='border-2 border-zinc-300 rounded-md p-2' placeholder='ej: 11.111.111-1' />
                  <span className='text-red-500'><ErrorMessage name='rut' /></span>
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='alias' className='font-medium'>Alias personalizado</label>
                  <Field type='text' name='alias' className='border-2 border-zinc-300 rounded-md p-2' placeholder='ej: Smart parking' />
                  <span className='text-red-500'><ErrorMessage name='alias' /></span>
                </div>
              </section>
              <div className='flex flex-col gap-2'>
                <label htmlFor='adress' className='font-medium'>Dirección casa matriz</label>
                <Field type='text' name='address' className='border-2 border-zinc-300 rounded-md p-2' placeholder='ej: Curicó 123. Rauquén' />
                <span className='text-red-500'><ErrorMessage name='address' /></span>
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

export { AdminAccountForm }