export default function Documentos() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold text-gray-800 mb-6'>Documentos</h1>

        <div className='bg-white rounded-lg shadow-lg p-8'>
          <p className='text-gray-600 text-lg mb-8'>
            Repositorio de documentos oficiales, formularios y recursos
            descargables.
          </p>

          <div className='space-y-8'>
            {/* Buscador */}
            <div className='bg-gray-50 rounded-lg p-6'>
              <h2 className='text-xl font-semibold text-gray-800 mb-4'>
                🔍 Buscar Documentos
              </h2>
              <div className='flex flex-col md:flex-row gap-4'>
                <input
                  type='text'
                  placeholder='Buscar por título, categoría o palabra clave...'
                  className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <button className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'>
                  Buscar
                </button>
              </div>
            </div>

            {/* Categorías de Documentos */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <div className='border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'>
                <div className='text-blue-600 text-3xl mb-3'>📋</div>
                <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                  Formularios
                </h3>
                <p className='text-gray-600 text-sm mb-4'>
                  Formularios oficiales para trámites y solicitudes.
                </p>
                <button className='w-full bg-blue-50 text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition-colors'>
                  Ver Formularios
                </button>
              </div>

              <div className='border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'>
                <div className='text-green-600 text-3xl mb-3'>📊</div>
                <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                  Informes
                </h3>
                <p className='text-gray-600 text-sm mb-4'>
                  Informes técnicos, estadísticos y de gestión.
                </p>
                <button className='w-full bg-green-50 text-green-600 px-4 py-2 rounded hover:bg-green-100 transition-colors'>
                  Ver Informes
                </button>
              </div>

              <div className='border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'>
                <div className='text-purple-600 text-3xl mb-3'>📝</div>
                <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                  Manuales
                </h3>
                <p className='text-gray-600 text-sm mb-4'>
                  Manuales de procedimientos y guías de usuario.
                </p>
                <button className='w-full bg-purple-50 text-purple-600 px-4 py-2 rounded hover:bg-purple-100 transition-colors'>
                  Ver Manuales
                </button>
              </div>

              <div className='border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'>
                <div className='text-orange-600 text-3xl mb-3'>📄</div>
                <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                  Políticas
                </h3>
                <p className='text-gray-600 text-sm mb-4'>
                  Documentos de políticas institucionales.
                </p>
                <button className='w-full bg-orange-50 text-orange-600 px-4 py-2 rounded hover:bg-orange-100 transition-colors'>
                  Ver Políticas
                </button>
              </div>

              <div className='border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'>
                <div className='text-red-600 text-3xl mb-3'>🏛️</div>
                <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                  Transparencia
                </h3>
                <p className='text-gray-600 text-sm mb-4'>
                  Documentos de transparencia y rendición de cuentas.
                </p>
                <button className='w-full bg-red-50 text-red-600 px-4 py-2 rounded hover:bg-red-100 transition-colors'>
                  Ver Transparencia
                </button>
              </div>

              <div className='border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'>
                <div className='text-gray-600 text-3xl mb-3'>📁</div>
                <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                  Otros
                </h3>
                <p className='text-gray-600 text-sm mb-4'>
                  Documentos diversos y recursos adicionales.
                </p>
                <button className='w-full bg-gray-50 text-gray-600 px-4 py-2 rounded hover:bg-gray-100 transition-colors'>
                  Ver Otros
                </button>
              </div>
            </div>

            {/* Documentos Recientes */}
            <section>
              <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
                📂 Documentos Recientes
              </h2>
              <div className='space-y-3'>
                <div className='flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50'>
                  <div className='flex items-center space-x-3'>
                    <span className='text-red-500'>📄</span>
                    <div>
                      <h4 className='font-medium text-gray-800'>
                        Manual de Procedimientos 2025
                      </h4>
                      <p className='text-sm text-gray-500'>
                        PDF • 2.5 MB • Actualizado: 12/08/2025
                      </p>
                    </div>
                  </div>
                  <button className='text-blue-600 hover:text-blue-800 text-sm font-medium'>
                    Descargar
                  </button>
                </div>

                <div className='flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50'>
                  <div className='flex items-center space-x-3'>
                    <span className='text-green-500'>📊</span>
                    <div>
                      <h4 className='font-medium text-gray-800'>
                        Informe de Gestión Q2 2025
                      </h4>
                      <p className='text-sm text-gray-500'>
                        PDF • 1.8 MB • Actualizado: 10/08/2025
                      </p>
                    </div>
                  </div>
                  <button className='text-blue-600 hover:text-blue-800 text-sm font-medium'>
                    Descargar
                  </button>
                </div>

                <div className='flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50'>
                  <div className='flex items-center space-x-3'>
                    <span className='text-blue-500'>📋</span>
                    <div>
                      <h4 className='font-medium text-gray-800'>
                        Formulario de Solicitud Actualizado
                      </h4>
                      <p className='text-sm text-gray-500'>
                        PDF • 0.5 MB • Actualizado: 08/08/2025
                      </p>
                    </div>
                  </div>
                  <button className='text-blue-600 hover:text-blue-800 text-sm font-medium'>
                    Descargar
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
