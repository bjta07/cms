export default function Prensa() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-4xl font-bold text-gray-800 mb-6'>Prensa</h1>

        <div className='bg-white rounded-lg shadow-lg p-8'>
          <p className='text-gray-600 text-lg mb-8'>
            Centro de información para medios de comunicación con noticias,
            comunicados oficiales y recursos multimedia.
          </p>

          <div className='space-y-10'>
            {/* Noticia Principal */}
            <section>
              <div className='bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg overflow-hidden'>
                <div className='p-8 text-white'>
                  <span className='bg-white bg-opacity-20 text-white text-xs font-semibold px-3 py-1 rounded-full'>
                    NOTICIA DESTACADA
                  </span>
                  <h2 className='text-3xl font-bold mt-4 mb-4'>
                    Nueva Política de Transparencia Institucional Implementada
                  </h2>
                  <p className='text-blue-100 text-lg mb-6'>
                    La institución lanza una nueva iniciativa para fortalecer la
                    transparencia y el acceso a la información pública,
                    mejorando los canales de comunicación con la ciudadanía.
                  </p>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-4 text-blue-100'>
                      <span className='text-sm'>📅 12 de Agosto, 2025</span>
                      <span className='text-sm'>👤 Comunicaciones</span>
                    </div>
                    <button className='bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors'>
                      Leer Más
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Últimas Noticias */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-6 flex items-center'>
                <span className='text-red-500 mr-2'>📰</span>
                Últimas Noticias
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <article className='bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300'>
                  <div className='bg-gray-200 h-48 flex items-center justify-center'>
                    <span className='text-gray-400 text-4xl'>🖼️</span>
                  </div>
                  <div className='p-6'>
                    <span className='text-xs text-blue-600 font-semibold uppercase tracking-wide'>
                      INSTITUCIONAL
                    </span>
                    <h3 className='text-lg font-semibold text-gray-800 mt-2 mb-3 line-clamp-2'>
                      Modernización Digital: Nuevos Sistemas en Funcionamiento
                    </h3>
                    <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
                      Se han implementado nuevos sistemas digitales que
                      optimizan los procesos administrativos y mejoran la
                      atención al público...
                    </p>
                    <div className='flex items-center justify-between'>
                      <span className='text-xs text-gray-500'>
                        10 de Agosto, 2025
                      </span>
                      <button className='text-blue-600 hover:text-blue-800 text-sm font-medium'>
                        Ver más →
                      </button>
                    </div>
                  </div>
                </article>

                <article className='bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300'>
                  <div className='bg-gray-200 h-48 flex items-center justify-center'>
                    <span className='text-gray-400 text-4xl'>🖼️</span>
                  </div>
                  <div className='p-6'>
                    <span className='text-xs text-green-600 font-semibold uppercase tracking-wide'>
                      EVENTOS
                    </span>
                    <h3 className='text-lg font-semibold text-gray-800 mt-2 mb-3 line-clamp-2'>
                      Conferencia Internacional sobre Gestión Pública
                    </h3>
                    <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
                      Expertos internacionales se reunirán para discutir las
                      mejores prácticas en administración pública moderna...
                    </p>
                    <div className='flex items-center justify-between'>
                      <span className='text-xs text-gray-500'>
                        08 de Agosto, 2025
                      </span>
                      <button className='text-blue-600 hover:text-blue-800 text-sm font-medium'>
                        Ver más →
                      </button>
                    </div>
                  </div>
                </article>

                <article className='bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300'>
                  <div className='bg-gray-200 h-48 flex items-center justify-center'>
                    <span className='text-gray-400 text-4xl'>🖼️</span>
                  </div>
                  <div className='p-6'>
                    <span className='text-xs text-purple-600 font-semibold uppercase tracking-wide'>
                      CAPACITACIÓN
                    </span>
                    <h3 className='text-lg font-semibold text-gray-800 mt-2 mb-3 line-clamp-2'>
                      Programa de Formación Continua 2025
                    </h3>
                    <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
                      Lanzamiento del nuevo programa anual de capacitación
                      dirigido a servidores públicos y profesionales...
                    </p>
                    <div className='flex items-center justify-between'>
                      <span className='text-xs text-gray-500'>
                        05 de Agosto, 2025
                      </span>
                      <button className='text-blue-600 hover:text-blue-800 text-sm font-medium'>
                        Ver más →
                      </button>
                    </div>
                  </div>
                </article>
              </div>

              <div className='text-center mt-8'>
                <button className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium'>
                  Ver Todas las Noticias
                </button>
              </div>
            </section>

            {/* Comunicados Oficiales */}
            <section className='bg-gray-50 rounded-lg p-8'>
              <h2 className='text-2xl font-bold text-gray-800 mb-6 flex items-center'>
                <span className='text-orange-500 mr-2'>📢</span>
                Comunicados Oficiales
              </h2>
              <div className='space-y-4'>
                <div className='bg-white border-l-4 border-red-500 rounded-lg p-6 shadow-sm'>
                  <div className='flex items-start justify-between'>
                    <div className='flex-1'>
                      <div className='flex items-center mb-2'>
                        <span className='bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded'>
                          URGENTE
                        </span>
                        <span className='text-sm text-gray-500 ml-3'>
                          12 de Agosto, 2025
                        </span>
                      </div>
                      <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                        Comunicado sobre Medidas de Seguridad Implementadas
                      </h3>
                      <p className='text-gray-600 text-sm'>
                        Se informa a la ciudadanía sobre las nuevas medidas de
                        seguridad implementadas en todas las instalaciones...
                      </p>
                    </div>
                    <button className='ml-4 text-blue-600 hover:text-blue-800 text-sm font-medium whitespace-nowrap'>
                      Leer Completo
                    </button>
                  </div>
                </div>

                <div className='bg-white border-l-4 border-blue-500 rounded-lg p-6 shadow-sm'>
                  <div className='flex items-start justify-between'>
                    <div className='flex-1'>
                      <div className='flex items-center mb-2'>
                        <span className='bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded'>
                          INFORMATIVO
                        </span>
                        <span className='text-sm text-gray-500 ml-3'>
                          10 de Agosto, 2025
                        </span>
                      </div>
                      <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                        Horarios de Atención Durante Feriados
                      </h3>
                      <p className='text-gray-600 text-sm'>
                        Información sobre los horarios especiales de atención al
                        público durante los próximos feriados nacionales...
                      </p>
                    </div>
                    <button className='ml-4 text-blue-600 hover:text-blue-800 text-sm font-medium whitespace-nowrap'>
                      Leer Completo
                    </button>
                  </div>
                </div>

                <div className='bg-white border-l-4 border-green-500 rounded-lg p-6 shadow-sm'>
                  <div className='flex items-start justify-between'>
                    <div className='flex-1'>
                      <div className='flex items-center mb-2'>
                        <span className='bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded'>
                          CONVOCATORIA
                        </span>
                        <span className='text-sm text-gray-500 ml-3'>
                          08 de Agosto, 2025
                        </span>
                      </div>
                      <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                        Convocatoria Pública para Consultorías
                      </h3>
                      <p className='text-gray-600 text-sm'>
                        Se convoca a profesionales especializados para
                        participar en consultorías relacionadas con
                        modernización institucional...
                      </p>
                    </div>
                    <button className='ml-4 text-blue-600 hover:text-blue-800 text-sm font-medium whitespace-nowrap'>
                      Leer Completo
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Galería Multimedia */}
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-6 flex items-center'>
                <span className='text-purple-500 mr-2'>🎥</span>
                Galería Multimedia
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='relative group cursor-pointer'>
                  <div className='bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg h-40 flex items-center justify-center'>
                    <span className='text-white text-3xl'>▶️</span>
                  </div>
                  <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 rounded-lg transition-all duration-300 flex items-center justify-center'>
                    <span className='text-white opacity-0 group-hover:opacity-100 text-sm font-medium'>
                      Reproducir Video
                    </span>
                  </div>
                  <p className='text-sm text-gray-600 mt-2'>
                    Conferencia de Prensa - Agosto 2025
                  </p>
                </div>

                <div className='relative group cursor-pointer'>
                  <div className='bg-gradient-to-br from-green-400 to-green-600 rounded-lg h-40 flex items-center justify-center'>
                    <span className='text-white text-3xl'>📸</span>
                  </div>
                  <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 rounded-lg transition-all duration-300 flex items-center justify-center'>
                    <span className='text-white opacity-0 group-hover:opacity-100 text-sm font-medium'>
                      Ver Galería
                    </span>
                  </div>
                  <p className='text-sm text-gray-600 mt-2'>
                    Evento de Capacitación
                  </p>
                </div>

                <div className='relative group cursor-pointer'>
                  <div className='bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg h-40 flex items-center justify-center'>
                    <span className='text-white text-3xl'>🎤</span>
                  </div>
                  <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 rounded-lg transition-all duration-300 flex items-center justify-center'>
                    <span className='text-white opacity-0 group-hover:opacity-100 text-sm font-medium'>
                      Escuchar Audio
                    </span>
                  </div>
                  <p className='text-sm text-gray-600 mt-2'>
                    Entrevista Radial
                  </p>
                </div>

                <div className='relative group cursor-pointer'>
                  <div className='bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg h-40 flex items-center justify-center'>
                    <span className='text-white text-3xl'>📄</span>
                  </div>
                  <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 rounded-lg transition-all duration-300 flex items-center justify-center'>
                    <span className='text-white opacity-0 group-hover:opacity-100 text-sm font-medium'>
                      Ver Documento
                    </span>
                  </div>
                  <p className='text-sm text-gray-600 mt-2'>
                    Kit de Prensa Digital
                  </p>
                </div>
              </div>
            </section>

            {/* Contacto de Prensa */}
            <section className='bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-8'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div>
                  <h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'>
                    <span className='text-blue-500 mr-2'>📞</span>
                    Contacto de Prensa
                  </h2>
                  <p className='text-gray-600 mb-6'>
                    Para solicitudes de información, entrevistas o material
                    adicional, contáctanos a través de los siguientes canales:
                  </p>
                  <div className='space-y-3'>
                    <div className='flex items-center'>
                      <span className='text-blue-500 mr-3'>📧</span>
                      <span className='text-gray-700'>prensa@cms.gob.bo</span>
                    </div>
                    <div className='flex items-center'>
                      <span className='text-blue-500 mr-3'>📱</span>
                      <span className='text-gray-700'>
                        +591 2 2345678 (ext. 101)
                      </span>
                    </div>
                    <div className='flex items-center'>
                      <span className='text-blue-500 mr-3'>⏰</span>
                      <span className='text-gray-700'>
                        Lunes a Viernes: 08:30 - 18:30
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                    Síguenos en Redes Sociales
                  </h3>
                  <div className='flex space-x-4 mb-6'>
                    <a
                      href='#'
                      className='bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors'
                    >
                      <span className='text-xl'>📘</span>
                    </a>
                    <a
                      href='#'
                      className='bg-sky-500 text-white p-3 rounded-lg hover:bg-sky-600 transition-colors'
                    >
                      <span className='text-xl'>🐦</span>
                    </a>
                    <a
                      href='#'
                      className='bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors'
                    >
                      <span className='text-xl'>📺</span>
                    </a>
                    <a
                      href='#'
                      className='bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors'
                    >
                      <span className='text-xl'>📷</span>
                    </a>
                  </div>
                  <div className='bg-white rounded-lg p-4 border border-gray-200'>
                    <h4 className='font-semibold text-gray-800 mb-2'>
                      📥 Suscríbete a nuestro boletín
                    </h4>
                    <p className='text-gray-600 text-sm mb-3'>
                      Recibe las últimas noticias directamente en tu correo.
                    </p>
                    <div className='flex'>
                      <input
                        type='email'
                        placeholder='tu@email.com'
                        className='flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                      />
                      <button className='bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors'>
                        Suscribir
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
