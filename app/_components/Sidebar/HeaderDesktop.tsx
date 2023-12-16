'use client'
import Link from "next/link"
import useScroll from "@/app/_hooks/useScroll"
import { useSelectedLayoutSegment } from "next/navigation"
import { cn } from '@/app/_lib/utils'

const HeaderDesktop = () => {
  const scrolled = useScroll(5)
  const selectedLayout = useSelectedLayoutSegment()

  return (
    <div
      className={cn(
        `sticky inset-x-0 bg-stone-900 top-0 py-1.5 z-40 w-full transition-all border-b border-gray-200`,
        {
          'border-b border-gray-200 bg-stone-900 backdrop-blur-lg': scrolled,
          'border-b border-gray-200 bg-stone-900': selectedLayout,
        },
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center md:hidden"
          >
            <span className="h-7 w-7 bg-zinc-300 rounded-sm" />
            <span className="font-bold text-xl flex text-white">SmartParking</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export { HeaderDesktop }