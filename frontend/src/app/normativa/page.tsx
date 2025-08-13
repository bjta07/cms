export default function Normativa() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold text-gray-800 mb-6'>Normativa</h1>

        <div className='bg-white rounded-lg shadow-lg p-8'>
          <p className='text-gray-600 text-lg mb-8'>
            Acceso a la normativa legal vigente, leyes, decretos y
            reglamentaciones aplicables.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-blue-50 rounded-lg p-6'>
              <h3 className='text-lg font-semibold text-blue-800 mb-3'>
                Leyes
              </h3>
              <p className='text-gray-600 text-sm'>
                Consulta las leyes nacionales y sectoriales vigentes.
              </p>
              <button className='mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors'>
                Ver Leyes
              </button>
            </div>

            <div className='bg-green-50 rounded-lg p-6'>
              <h3 className='text-lg font-semibold text-green-800 mb-3'>
                Decretos
              </h3>
              <p className='text-gray-600 text-sm'>
                Accede a los decretos supremos y ministeriales.
              </p>
              <button className='mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors'>
                Ver Decretos
              </button>
            </div>

            <div className='bg-purple-50 rounded-lg p-6'>
              <h3 className='text-lg font-semibold text-purple-800 mb-3'>
                Resoluciones
              </h3>
              <p className='text-gray-600 text-sm'>
                Consulta resoluciones administrativas y técnicas.
              </p>
              <button className='mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors'>
                Ver Resoluciones
              </button>
            </div>

            <div className='bg-orange-50 rounded-lg p-6'>
              <h3 className='text-lg font-semibold text-orange-800 mb-3'>
                Reglamentos
              </h3>
              <p className='text-gray-600 text-sm'>
                Accede a reglamentos internos y operativos.
              </p>
              <button className='mt-4 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors'>
                Ver Reglamentos
              </button>
            </div>
          </div>

          <div className='mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg'>
            <h3 className='text-lg font-semibold text-yellow-800 mb-2'>
              ⚖️ Información Legal
            </h3>
            <p className='text-yellow-700 text-sm'>
              La normativa mostrada en este portal tiene carácter informativo.
              Para efectos legales, consulte las publicaciones oficiales en la
              Gaceta Oficial.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
