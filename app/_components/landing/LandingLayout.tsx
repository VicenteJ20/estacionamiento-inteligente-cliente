const LandingLayout = (
  {
    children
  }: {
    children: React.ReactNode
  }
) => {
  return (
    <main className='relative'>
      {children}
    </main>
  )
}

export { LandingLayout }