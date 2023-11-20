'use client'

import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { FiEdit, FiUser } from "react-icons/fi"
import { useEffect, useState } from 'react'

const HighlightCard = () => {

  useEffect(() => {
    async function getAvailableAreas() {
      const response = await fetch('/api/areas')
      const data = await response.json()
      console.log(data)
    }
  }, [])

  return (
    <section className='grid grid-cols-2 w-fit'>
      <Card radius='none' className='min-w-unit-6 border border-zinc-300' shadow='none'>
        <CardHeader className='flex flex-row gap-10 justify-between items-center'>
          <ul className='text-base font-semibold text-zinc-800 flex flex-row gap-2 items-center'>
            <li><FiUser className='text-lg' /></li>
            <li>Docentes</li>
          </ul>
          <FiEdit />
        </CardHeader>
        <CardBody className='grid grid-cols-2 gap-2'>
          <div>
            <h2 className='font-semibold text-2xl'>25</h2>
            <p className='text-base text-zinc-500 font-medium'>Total</p>
          </div>
        </CardBody>
      </Card>
      <Card radius='none' className='min-w-unit-6 border border-zinc-300' shadow='none'>
        <CardHeader className='flex flex-row gap-10 justify-between items-center'>
          <ul className='text-base font-semibold text-zinc-800 flex flex-row gap-2 items-center'>
            <li><FiUser className='text-lg' /></li>
            <li>Docentes</li>
          </ul>
          <FiEdit />
        </CardHeader>
        <CardBody className='grid grid-cols-2 gap-2'>
          <div>
            <h2 className='font-semibold text-2xl'>25</h2>
            <p className='text-base text-zinc-500 font-medium'>Total</p>
          </div>
        </CardBody>
      </Card>
      <Card radius='none' className='min-w-unit-6 border border-zinc-300' shadow='none'>
        <CardHeader className='flex flex-row gap-10 justify-between items-center'>
          <ul className='text-base font-semibold text-zinc-800 flex flex-row gap-2 items-center'>
            <li><FiUser className='text-lg' /></li>
            <li>Docentes</li>
          </ul>
          <FiEdit />
        </CardHeader>
        <CardBody className='grid grid-cols-2 gap-2'>
          <div>
            <h2 className='font-semibold text-2xl'>25</h2>
            <p className='text-base text-zinc-500 font-medium'>Total</p>
          </div>
        </CardBody>
      </Card>
      <Card radius='none' className='min-w-unit-6 border border-zinc-300' shadow='none'>
        <CardHeader className='flex flex-row gap-10 justify-between items-center'>
          <ul className='text-base font-semibold text-zinc-800 flex flex-row gap-2 items-center'>
            <li><FiUser className='text-lg' /></li>
            <li>Docentes</li>
          </ul>
          <FiEdit />
        </CardHeader>
        <CardBody className='grid grid-cols-2 gap-2'>
          <div>
            <h2 className='font-semibold text-2xl'>25</h2>
            <p className='text-base text-zinc-500 font-medium'>Total</p>
          </div>
        </CardBody>
      </Card>
    </section>
  )
}

export default HighlightCard