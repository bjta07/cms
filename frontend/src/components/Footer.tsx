'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-gray-800 text-white mt-auto'>
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Información Institucional */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>
              Información Institucional
            </h3>
            <p className='text-gray-300 text-sm'>
              Portal oficial del sistema de gestión de contenidos institucional.
            </p>
            <div className='mt-4'>
              <p className='text-gray-300 text-sm'>
                📍 Dirección: Av. Principal 123
              </p>
              <p className='text-gray-300 text-sm'>
                📞 Teléfono: +591 2 2345678
              </p>
              <p className='text-gray-300 text-sm'>✉️ Email: info@cms.gob.bo</p>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Enlaces Rápidos</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='/institucionalidad'
                  className='text-gray-300 hover:text-white text-sm transition-colors'
                >
                  Institucionalidad
                </a>
              </li>
              <li>
                <a
                  href='/normativa'
                  className='text-gray-300 hover:text-white text-sm transition-colors'
                >
                  Normativa
                </a>
              </li>
              <li>
                <a
                  href='/documentos'
                  className='text-gray-300 hover:text-white text-sm transition-colors'
                >
                  Documentos
                </a>
              </li>
              <li>
                <a
                  href='/formacion'
                  className='text-gray-300 hover:text-white text-sm transition-colors'
                >
                  Formación
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales y Contacto */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Síguenos</h3>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-gray-300 hover:text-white transition-colors'
                aria-label='Facebook'
              >
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                </svg>
              </a>
              <a
                href='#'
                className='text-gray-300 hover:text-white transition-colors'
                aria-label='Twitter'
              >
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                </svg>
              </a>
              <a
                href='#'
                className='text-gray-300 hover:text-white transition-colors'
                aria-label='YouTube'
              >
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
                </svg>
              </a>
            </div>
            <div className='mt-4'>
              <p className='text-gray-400 text-xs'>
                Horario de atención: Lunes a Viernes
                <br />
                08:30 - 12:30 y 14:30 - 18:30
              </p>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className='border-t border-gray-700 mt-8 pt-8 text-center'>
          <p className='text-gray-400 text-sm'>
            © {currentYear} Sistema de Gestión de Contenidos. Todos los derechos
            reservados.
          </p>
          <p className='text-gray-500 text-xs mt-2'>
            Desarrollado con Next.js y Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
