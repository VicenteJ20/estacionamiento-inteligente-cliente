'use client'

import { LoginShema } from "@/app/_schemas/login"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { signIn } from "next-auth/react"
import Link from "next/link"

const LoginForm = () => {
  const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
    try {
      await signIn('credentials', {
        email: values.email,
        password: values.password,
      })
    } catch (err: any) {
      console.log(err)
    }
    setSubmitting(false)
    resetForm(true)
  }

  return (
    <section>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={LoginShema}
      >
        {({ isSubmitting, }) => (
          <>
            <Form className='flex flex-col gap-5'>
              <div className='flex flex-col gap-3'>
                <label htmlFor='email' className='text-lg text-zinc-800'>Correo electrónico:</label>
                <Field type='email' name='email' id='email' placeholder='Ingrese su correo electrónico' className='border rounded-lg border-zinc-300 px-4 py-3 text-xl' />
                <span className='text-red-500 font-medium'><ErrorMessage name='email' /></span>
              </div>
              <div className='flex flex-col gap-3'>
                <label htmlFor='password' className='text-lg text-zinc-800'>Contraseña:</label>
                <Field type='password' name='password' id='password' placeholder='Ingrese su contraseña' className='border rounded-lg border-zinc-300 px-4 py-3 text-xl' />
                <span className="text-red-500 font-medium"><ErrorMessage name='password' /></span>
              </div>
              <div className='text-end'>
                <Link href='/auth/forgot-password' className='text-blue-500 hover:text-blue-300 transition-all duration-300 ease-in-out visited:text-purple-400 text-lg'>¿Olvidaste tu contraseña?</Link>
              </div>
              <div className='w-full flex flex-col gap-8'>
                <button disabled={isSubmitting} type='submit' className='bg-blue-500 px-4 w-full py-3 rounded-md text-lg xl:text-xl text-white font-medium hover:bg-blue-400 transition-all ease-in-out duration-300'>Ingresar</button>
                <p className='text-center text-zinc-800'>¿Aún no tienes cuenta?</p>
                <Link className='bg-white px-4 w-full py-3 rounded-md text-lg xl:text-xl text-zinc-400 border border-zinc-300 font-medium hover:bg-blue-400 hover:text-white transition-all ease-in-out duration-300 text-center' href='/auth/signup'>Regístrate</Link>
              </div>
            </Form>
          </>
        )}

      </Formik>
    </section>
  )
}

export { LoginForm }