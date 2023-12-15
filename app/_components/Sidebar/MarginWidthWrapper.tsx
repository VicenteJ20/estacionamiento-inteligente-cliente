import { ReactNode } from "react";

export default function MarginWithWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className='flex flex-col md:ml-72 sm:border-r sm:border-zinc-700 min-h-screen'>
      {children}
    </div>
  )
}