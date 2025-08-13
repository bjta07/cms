'use client'

export default function Header() {
  return (
    <header className='bg-blue-900 text-white shadow-lg'>
      <div className='container mx-auto px-4 py-6'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center'>
              <span className='text-blue-900 font-bold text-xl'>CMS</span>
            </div>
            <div>
              <h1 className='text-2xl font-bold'>Sistema de Gestión</h1>
              <p className='text-blue-200 text-sm'>Portal Institucional</p>
            </div>
          </div>
          <div className='hidden md:flex items-center space-x-4'>
            <div className='text-right'>
              <p className='text-sm text-blue-200'>Bienvenido al</p>
              <p className='font-semibold'>Portal Oficial</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
