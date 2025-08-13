'use client'

export default function Home() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold text-gray-800 mb-6'>Home</h1>

        <div className='bg-white rounded-lg shadow-lg p-8'>
          <div className='text-center mb-8'>
            <h2 className='text-2xl font-semibold text-gray-700 mb-4'>
              Bienvenido al Sistema de Gestión de Contenidos
            </h2>
            <p className='text-gray-600 text-lg'>
              Portal institucional para la gestión y consulta de información
              oficial
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
            {/* Tarjeta Institucionalidad */}
            <div className='bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow'>
              <h3 className='text-xl font-semibold text-blue-800 mb-3'>
                Institucionalidad
              </h3>
              <p className='text-gray-600 text-sm'>
                Información sobre la estructura y funcionamiento institucional.
              </p>
            </div>

            {/* Tarjeta Normativa */}
            <div className='bg-green-50 rounded-lg p-6 hover:shadow-md transition-shadow'>
              <h3 className='text-xl font-semibold text-green-800 mb-3'>
                Normativa
              </h3>
              <p className='text-gray-600 text-sm'>
                Accede a leyes, decretos y regulaciones vigentes.
              </p>
            </div>

            {/* Tarjeta Prensa */}
            <div className='bg-purple-50 rounded-lg p-6 hover:shadow-md transition-shadow'>
              <h3 className='text-xl font-semibold text-purple-800 mb-3'>
                Prensa
              </h3>
              <p className='text-gray-600 text-sm'>
                Últimas noticias y comunicados oficiales.
              </p>
            </div>

            {/* Tarjeta Documentos */}
            <div className='bg-orange-50 rounded-lg p-6 hover:shadow-md transition-shadow'>
              <h3 className='text-xl font-semibold text-orange-800 mb-3'>
                Documentos
              </h3>
              <p className='text-gray-600 text-sm'>
                Repositorio de documentos y archivos oficiales.
              </p>
            </div>

            {/* Tarjeta Formación */}
            <div className='bg-red-50 rounded-lg p-6 hover:shadow-md transition-shadow'>
              <h3 className='text-xl font-semibold text-red-800 mb-3'>
                Formación
              </h3>
              <p className='text-gray-600 text-sm'>
                Programas de capacitación y desarrollo profesional.
              </p>
            </div>

            {/* Tarjeta Información */}
            <div className='bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow'>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>
                Más Información
              </h3>
              <p className='text-gray-600 text-sm'>
                Contacto y recursos adicionales para usuarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
