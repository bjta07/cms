export default function Institucionalidad() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold text-gray-800 mb-6'>
          Institucionalidad
        </h1>

        <div className='bg-white rounded-lg shadow-lg p-8'>
          <p className='text-gray-600 text-lg mb-8'>
            Información sobre la estructura organizacional, misión, visión y
            funcionamiento de la institución.
          </p>

          <div className='space-y-6'>
            <div className='border-l-4 border-blue-500 pl-4'>
              <h2 className='text-xl font-semibold text-gray-800 mb-2'>
                Misión
              </h2>
              <p className='text-gray-600'>
                Contenido sobre la misión institucional se mostrará aquí una vez
                integrado con Strapi.
              </p>
            </div>

            <div className='border-l-4 border-green-500 pl-4'>
              <h2 className='text-xl font-semibold text-gray-800 mb-2'>
                Visión
              </h2>
              <p className='text-gray-600'>
                Contenido sobre la visión institucional se mostrará aquí una vez
                integrado con Strapi.
              </p>
            </div>

            <div className='border-l-4 border-purple-500 pl-4'>
              <h2 className='text-xl font-semibold text-gray-800 mb-2'>
                Estructura Organizacional
              </h2>
              <p className='text-gray-600'>
                Organigrama y estructura de la institución se mostrará aquí una
                vez integrado con Strapi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
