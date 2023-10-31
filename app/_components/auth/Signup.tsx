'use client'

import { SignUpSchema } from "@/app/_schemas/signup"
import { Formik, Form, Field, ErrorMessage } from "formik"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"

const SignUpForm = () => {
  const [error, setError] = useState('')
  const [captcha, setCaptcha] = useState(false)

  const router = useRouter()

  const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          lastname: values.lastname,
          email: values.email,
          password: values.password
        })
      })

      if (res.status === 201) {
        setSubmitting(false)
        resetForm()
        router.push('/auth/signin')
      }

      resetForm()
    } catch (err: any) {
      console.log('Error: ', err)
    }

    setSubmitting(false)
  }

  const handleChange = () => {
    setCaptcha(true)
  }

  return (
    <section>
      <Formik
        initialValues={{ name: '', lastname: '', email: '', password: '', confirmpassword: '' }}
        onSubmit={handleSubmit}
        validationSchema={SignUpSchema}
      >
        {({ isSubmitting, }) => (
          <>
            <Form className='flex flex-col gap-5'>
              <div className='flex flex-row gap-4 w-full'>
                <div className='flex flex-col gap-3 w-full'>
                  <label htmlFor='name' className='text-lg text-zinc-800'>Nombres</label>
                  <Field type='text' name='name' id='name' placeholder='Vicente' className='border rounded-lg border-zinc-300 px-4 py-3 text-xl w-full' />
                  <span className='text-red-500 font-medium'><ErrorMessage name='name' /></span>
                </div>
                <div className='flex flex-col gap-3 w-full'>
                  <label htmlFor='lastname' className='text-lg text-zinc-800'>Apellidos:</label>
                  <Field type='text' name='lastname' id='lastname' placeholder='Jorquera' className='border rounded-lg border-zinc-300 px-4 py-3 text-xl w-full' />
                  <span className="text-red-500 font-medium"><ErrorMessage name='lastname' /></span>
                </div>
              </div>
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
              <div className='flex flex-col gap-3'>
                <label htmlFor='confirmpassword' className='text-lg text-zinc-800'>Confirmar contraseña:</label>
                <Field type='password' name='confirmpassword' id='confirmpassword' placeholder='Vuelva a ingresar su contraseña' className='border rounded-lg border-zinc-300 px-4 py-3 text-xl' />
                <span className="text-red-500 font-medium"><ErrorMessage name='confirmpassword' /></span>
              </div>
              <div className='text-end'>
                <Link href='/auth/signin' className='text-blue-500 hover:text-blue-300 transition-all duration-300 ease-in-out visited:text-purple-400 text-sm md:text-lg'>¿Ya tienes una cuenta? - Inicia sesión aquí.</Link>
              </div>
              <div className='flex flex-col gap-4 item-start'>
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
                  onChange={handleChange}
                  size='normal'
                  theme='light'
                  onExpired={() => setCaptcha(false)}
                />
              </div>
              {
                captcha && (
                  <div className='w-full flex flex-col gap-8'>
                    <button disabled={isSubmitting} type='submit' className='bg-blue-500 px-4 w-full py-3 rounded-md text-lg xl:text-xl text-white font-medium hover:bg-blue-400 transition-all ease-in-out duration-300'>Registrarse</button>
                  </div>
                )
              }
            </Form>
          </>
        )}

      </Formik>
    </section>
  )
}

export { SignUpForm }