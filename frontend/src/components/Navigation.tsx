'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navigationItems = [
  { name: 'Home', href: '/', label: 'Inicio' },
  {
    name: 'Institucionalidad',
    href: '/institucionalidad',
    label: 'Institucionalidad',
  },
  { name: 'Normativa', href: '/normativa', label: 'Normativa' },
  { name: 'Prensa', href: '/prensa', label: 'Prensa' },
  { name: 'Documentos', href: '/documentos', label: 'Documentos' },
  { name: 'Formación', href: '/formacion', label: 'Formación' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='bg-blue-800 text-white shadow-md'>
      <div className='container mx-auto px-4'>
        {/* Desktop Navigation */}
        <div className='hidden md:flex space-x-1'>
          {navigationItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-3 rounded-t-lg transition-all duration-200 hover:bg-blue-700 ${
                  isActive
                    ? 'bg-white text-blue-900 font-semibold'
                    : 'text-white hover:text-blue-100'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Mobile Navigation */}
        <div className='md:hidden'>
          <div className='flex justify-between items-center py-3'>
            <span className='font-semibold'>Menú</span>
            <button
              onClick={toggleMenu}
              className='p-2 rounded-md hover:bg-blue-700 focus:outline-none'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {isMenuOpen ? (
                  <path d='M6 18L18 6M6 6l12 12' />
                ) : (
                  <path d='M4 6h16M4 12h16M4 18h16' />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          {isMenuOpen && (
            <div className='pb-3'>
              {navigationItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2 rounded transition-all duration-200 ${
                      isActive
                        ? 'bg-white text-blue-900 font-semibold'
                        : 'text-white hover:bg-blue-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
