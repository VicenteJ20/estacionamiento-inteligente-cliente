import { HeaderWelcome } from "./Header"

export const Loading = ({ loading }: { loading: boolean }) => {
  return (
    <div className={`bg-white flex flex-col gap-4 items-center justify-center absolute top-0 bottom-0 right-0 left-0 transition-all duration-300 ease-in-out ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none '}`}>
      <HeaderWelcome title='Procesando...' description='Espere un momento por favor' />
    </div>
  )
}