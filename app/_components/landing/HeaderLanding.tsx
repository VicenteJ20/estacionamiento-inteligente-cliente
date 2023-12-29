interface HeaderLandingProps {
  overtitle: string;
  title: string;
  description: string;
  center?: boolean;
}

const HeaderLanding = ({overtitle, title, description, center}: HeaderLandingProps) => {
  return (
    <header className={`flex flex-col gap-1.5 ${center ? 'text-center max-w-[45%] mx-auto' : ''}`}>
      <h3 className='font-semibold text-teal-600'>{overtitle}</h3>
      <h2 className='text-3xl font-bold text-zinc-900'>{title}</h2>
      <p className='text-slate-500'>{description}</p>
    </header>
  )
}

export { HeaderLanding }