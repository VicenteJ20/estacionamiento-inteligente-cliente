'use client'

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='w-full lg:max-w-2xl 2xl:max-w-4xl bg-white rounded-md p-4'>
      {children}
    </section>
  )
}