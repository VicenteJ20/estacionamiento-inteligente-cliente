'use client'

import { LoginShema } from "@/app/_schemas/login"
import { Button } from "@nextui-org/react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const LoginForm = () => {
  const router = useRouter()
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
                <label htmlFor='email' className='text-lg text-zinc-800 font-medium'>Correo electrónico:</label>
                <Field type='email' name='email' id='email' placeholder='Ingrese su correo electrónico' className='border rounded-lg border-zinc-300 px-4 py-3 text-lg outline-none' />
                <span className='text-red-500 font-medium'><ErrorMessage name='email' /></span>
              </div>
              <div className='flex flex-col gap-3'>
                <label htmlFor='password' className='text-lg text-zinc-800 font-medium'>Contraseña:</label>
                <Field type='password' name='password' id='password' placeholder='Ingrese su contraseña' className='border rounded-lg border-zinc-300 px-4 py-3 text-lg outline-none' />
                <span className="text-red-500 font-medium"><ErrorMessage name='password' /></span>
              </div>
              <div className='text-end'>
                <Link href='/auth/forgot-password' className='text-blue-500 hover:text-blue-300 transition-all duration-300 ease-in-out visited:text-purple-400 text-base'>¿Olvidaste tu contraseña?</Link>
              </div>
              <div className='w-full flex flex-col gap-8'>
                <Button variant='shadow' className='bg-zinc-800 text-white' disabled={isSubmitting} type='submit' size='lg' radius='none'>Ingresar</Button>
                <p className='text-center text-zinc-800'>¿Aún no tienes cuenta?</p>
                <Button variant='ghost' color='default' onClick={() => router.push('/auth/signup')} radius='none'>Regístrate</Button>
              </div>
            </Form>
          </>
        )}

      </Formik>
    </section>
  )
}

export { LoginForm }