import { ReactNode } from "react";

export default function Wrapper({children}: {children: ReactNode}) {
  return (
    <div className='flex flex-col p-8 space-y-2 bg-zinc-100 flex-grow pb-4'>
      { children }
    </div>
  )
}