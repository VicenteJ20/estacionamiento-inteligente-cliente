import Link from "next/link"

const ListOptions = [
  {
    'name': 'Política de privacidad',
    'url': '/politica-de-privacidad'
  },
  {
    'name': 'Términos y condiciones',
    'url': '/terminos-y-condiciones'
  },
]

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const startDate = 2023
  const date = new Date()
  const year = date.getFullYear()
  return (
    <section className='w-screen bg-zinc-50 grid grid-cols-1 xl:grid-cols-2 gap-4 relative'>
      <div className="relative col-span-1  pb-24 flex flex-col items-center justify-around h-screen">
        <div className='w-full xl:w-[80%] bg-white py-12 border border-zinc-100 shadow-xl rounded-sm shadow-zinc-300'>
          {children}
        </div>
        <div className=" text-zinc-900 absolute left-0 bottom-0 right-0 px-5 py-5 flex flex-col sm:flex-row gap-4 justify-between w-full text-center">
          <h3 className='flex flex-row gap-2 items-center whitespace-nowrap text-sm text-zinc-700'>&copy; {year === startDate ? year : `${startDate} - ${year}`} SmartParking. Todos los derechos reservados.</h3>
          <ul className="flex flex-row gap-4 items-center justify-center">
            {
              ListOptions.map((item, index) => (
                <li key={index}>
                  <Link className='text-zinc-600 hover:text-blue-600 transition-all duration-500 ease-in-out visited:text-purple-600 text-xs whitespace-nowrap' href={item.url}>{item.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1618371731836-2b9bff9ac72a?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }} className="w-full relative hidden xl:block">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-start">
          <article className='text-zinc-100 px-8 py-16 flex flex-col gap-3'>
            <h2 className="text-xl xl:text-4xl font-bold">Seguridad de primer nivel</h2>
            <p className='text-lg'>En SmartParking nos especializamos en brindarte una experiencia segura y eficiente. Con la seguridad de tu información pensada desde el inicio.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default AuthLayout