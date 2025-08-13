'use client'

import Image from "next/image"
export default function Header() {
  return (
    <header className='bg-blue-900 text-white shadow-lg'>
      <div className='container mx-auto px-4 py-6'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center'>
              <Image
                src={'/images/logo.png'}
                alt="Logo"
                width={130}
                height={130}
              />
            </div>
            <div>
              <h1 className='text-2xl font-bold'>Colegio de Enfermeras de Bolivia</h1>
              <p className='text-blue-200 text-sm'>Portal Institucional</p>
            </div>
          </div>
          <div className='hidden md:flex items-center space-x-4'>
            <div className='text-right'>
              <p className='text-sm text-blue-200'>Bienvenid@ al</p>
              <p className='font-semibold'>Portal Oficial</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
