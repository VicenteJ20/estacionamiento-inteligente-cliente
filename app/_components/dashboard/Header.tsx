interface HeaderProps {
  title: string,
  description?: string,
  overtitle?: string
}

export const HeaderDashboard = ({title, description, overtitle}: HeaderProps) => {
  return (
    <header className='flex flex-col gap-2'>
      <h4 className='font-normal text-zinc-400 text-lg'>{overtitle}</h4>
      <h1 className='text-2xl 2xl:text-3xl font-semibold text-blue-900'>{title}</h1>
      <p>{description}</p>
    </header>
  )
}