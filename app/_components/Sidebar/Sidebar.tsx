'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { LINK_ITEMS } from '@/app/_contants/sidebar'
import Link from 'next/link'
import { FiChevronDown } from 'react-icons/fi'
import { signOut, useSession } from "next-auth/react"
import { Avatar, Button, User } from "@nextui-org/react"

const SideBar = () => {

  const session = useSession()
  return (
    <div className='md:w-72 bg-stone-900 text-white h-screen flex-1 fixed border-r border-zinc-800 hidden md:flex'>
      <div className='flex flex-col space-y-8 py-[0.7rem] w-full'>
        <Link
          href='/'
          className='flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-700 pt-1 pb-[0.99rem] w-full'>
          <span className='h-7 w-7 bg-zinc-300 rounded-lg' />
          <span className='font-bold text-xl hidden md:flex '>Smart<span className='text-cyan-500'>Parking</span></span>
        </Link>
        <div className='w-full flex flex-col gap-4 h-full justify-between pb-4 px-4'>
          <div className='flex flex-col space-y-2 md:px-6'>
            {
              LINK_ITEMS.map((item: any, index: number) => {
                return <MenuItem key={index} item={item} />
              })
            }
          </div>
          <div>
            <div className='border border-zinc-600 py-3 px-4 rounded-sm flex flex-row gap-4 items-center'>
              <div>
                <Avatar src={session?.data?.user?.image} />
              </div>
              <div className='flex flex-col gap-1'>
                <span className='font-semibold'>{session?.data?.user?.name}</span>
                <span className='text-xs'>{session?.data?.user?.email}</span>
              </div>
            </div>
            <Button
              className='mt-4 w-full'
              radius='none'
              variant='shadow'
              color='danger'
              onClick={() => signOut()}>
              Cerrar sesión
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar

const MenuItem = ({ item }: { item: any }) => {
  const pathName = usePathname()
  const [subMenuOpen, setSubMenuOpen] = useState(false)
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen)
  }

  return (
    <div className=''>
      {
        item.submenu ? (
          <>
            <button
              onClick={toggleSubMenu}
              className={`transition-all duration-300 ease-in-out flex flex-row items-center py-2 px-3 rounded-sm hover:bg-cyan-600 w-full justify-between ${pathName.includes(item.url) ? 'bg-cyan-600' : ''}`}>
              <div className='flex flex-row space-x-4 items-center'>
                <span>{item.icon}</span>
                <span className='font-semibold text-xl flex'>{item.title}</span>
              </div>
              <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
                <FiChevronDown />
              </div>
            </button>
            {
              subMenuOpen && (
                <div className='my-2 ml-12 flex flex-col space-y-4'>
                  {
                    item.subMenuItems?.map((subItem: any, index: number) => {
                      return (
                        <Link
                          key={index}
                          href={subItem.url}
                          className={`${subItem.url === pathName ? 'font-bold' : ''}`}>
                          <span className='text-lg'>{subItem.title}</span>
                        </Link>
                      )
                    })
                  }
                </div>
              )
            }
          </>
        ) : (
          <Link
            href={item.url}
            className={`transition-all duration-300 ease-in-out flex flex-row space-x-4 items-center py-2 px-3 rounded-sm hover:bg-cyan-600 ${item.url === pathName ? 'bg-cyan-600' : ''}`}>
            <span>{item.icon}</span>
            <span className='font-semibold text-xl flex'>{item.title}</span>
          </Link>
        )
      }
    </div>
  )
}