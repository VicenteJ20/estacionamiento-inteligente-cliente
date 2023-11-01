export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <section className='flex flex-col items-center justify-center w-full lg:max-w-2xl 2xl:max-w-3xl bg-white rounded-md py-4 px-8 transition-all ease-in-out duration-500 min-h-[42rem]'>
      {children}
    </section>
  )
}