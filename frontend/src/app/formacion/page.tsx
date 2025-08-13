export default function Formacion() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold text-gray-800 mb-6'>Formación</h1>

        <div className='bg-white rounded-lg shadow-lg p-8'>
          <p className='text-gray-600 text-lg mb-8'>
            Programas de capacitación, cursos y recursos educativos para el
            desarrollo profesional.
          </p>

          <div className='space-y-8'>
            {/* Cursos Destacados */}
            <section>
              <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
                🎓 Cursos Disponibles
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow'>
                  <div className='bg-blue-500 h-32 flex items-center justify-center'>
                    <span className='text-white text-4xl'>📚</span>
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                      Curso Básico de Gestión
                    </h3>
                    <p className='text-gray-600 text-sm mb-4'>
                      Fundamentos de gestión pública y administración eficiente
                      de recursos.
                    </p>
                    <div className='flex items-center justify-between mb-4'>
                      <span className='text-sm text-gray-500'>⏱️ 40 horas</span>
                      <span className='text-sm text-green-600 font-medium'>
                        ✅ Disponible
                      </span>
                    </div>
                    <button className='w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors'>
                      Inscribirse
                    </button>
                  </div>
                </div>

                <div className='border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow'>
                  <div className='bg-green-500 h-32 flex items-center justify-center'>
                    <span className='text-white text-4xl'>💻</span>
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                      Tecnología y Digitalización
                    </h3>
                    <p className='text-gray-600 text-sm mb-4'>
                      Herramientas digitales para la modernización de procesos
                      administrativos.
                    </p>
                    <div className='flex items-center justify-between mb-4'>
                      <span className='text-sm text-gray-500'>⏱️ 30 horas</span>
                      <span className='text-sm text-green-600 font-medium'>
                        ✅ Disponible
                      </span>
                    </div>
                    <button className='w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors'>
                      Inscribirse
                    </button>
                  </div>
                </div>

                <div className='border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow'>
                  <div className='bg-purple-500 h-32 flex items-center justify-center'>
                    <span className='text-white text-4xl'>⚖️</span>
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                      Marco Legal y Normativo
                    </h3>
                    <p className='text-gray-600 text-sm mb-4'>
                      Conocimiento profundo de la normativa aplicable y
                      procedimientos legales.
                    </p>
                    <div className='flex items-center justify-between mb-4'>
                      <span className='text-sm text-gray-500'>⏱️ 50 horas</span>
                      <span className='text-sm text-orange-600 font-medium'>
                        🔄 Próximamente
                      </span>
                    </div>
                    <button className='w-full bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed'>
                      No Disponible
                    </button>
                  </div>
                </div>

                <div className='border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow'>
                  <div className='bg-orange-500 h-32 flex items-center justify-center'>
                    <span className='text-white text-4xl'>👥</span>
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                      Liderazgo y Comunicación
                    </h3>
                    <p className='text-gray-600 text-sm mb-4'>
                      Desarrollo de habilidades de liderazgo y comunicación
                      efectiva.
                    </p>
                    <div className='flex items-center justify-between mb-4'>
                      <span className='text-sm text-gray-500'>⏱️ 35 horas</span>
                      <span className='text-sm text-green-600 font-medium'>
                        ✅ Disponible
                      </span>
                    </div>
                    <button className='w-full bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors'>
                      Inscribirse
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Recursos Educativos */}
            <section>
              <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
                📖 Recursos Educativos
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='bg-blue-50 rounded-lg p-6 text-center'>
                  <div className='text-blue-600 text-3xl mb-3'>📹</div>
                  <h3 className='font-semibold text-blue-800 mb-2'>
                    Videos Tutoriales
                  </h3>
                  <p className='text-blue-700 text-sm'>
                    Biblioteca de videos educativos
                  </p>
                </div>

                <div className='bg-green-50 rounded-lg p-6 text-center'>
                  <div className='text-green-600 text-3xl mb-3'>📚</div>
                  <h3 className='font-semibold text-green-800 mb-2'>
                    Material de Lectura
                  </h3>
                  <p className='text-green-700 text-sm'>
                    Documentos y guías de estudio
                  </p>
                </div>

                <div className='bg-purple-50 rounded-lg p-6 text-center'>
                  <div className='text-purple-600 text-3xl mb-3'>🧪</div>
                  <h3 className='font-semibold text-purple-800 mb-2'>
                    Ejercicios Prácticos
                  </h3>
                  <p className='text-purple-700 text-sm'>
                    Casos de estudio y simulaciones
                  </p>
                </div>
              </div>
            </section>

            {/* Calendario de Eventos */}
            <section>
              <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
                📅 Próximos Eventos
              </h2>
              <div className='space-y-4'>
                <div className='flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50'>
                  <div className='bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium mr-4'>
                    20 AGO
                  </div>
                  <div className='flex-1'>
                    <h4 className='font-semibold text-gray-800'>
                      Webinar: Innovación en Gestión Pública
                    </h4>
                    <p className='text-gray-600 text-sm'>
                      10:00 - 12:00 hrs • Modalidad Virtual
                    </p>
                  </div>
                  <button className='text-blue-600 hover:text-blue-800 text-sm font-medium'>
                    Registrarse
                  </button>
                </div>

                <div className='flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50'>
                  <div className='bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-medium mr-4'>
                    25 AGO
                  </div>
                  <div className='flex-1'>
                    <h4 className='font-semibold text-gray-800'>
                      Taller: Herramientas Digitales
                    </h4>
                    <p className='text-gray-600 text-sm'>
                      14:00 - 17:00 hrs • Modalidad Presencial
                    </p>
                  </div>
                  <button className='text-blue-600 hover:text-blue-800 text-sm font-medium'>
                    Registrarse
                  </button>
                </div>

                <div className='flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50'>
                  <div className='bg-purple-100 text-purple-800 px-3 py-1 rounded text-sm font-medium mr-4'>
                    30 AGO
                  </div>
                  <div className='flex-1'>
                    <h4 className='font-semibold text-gray-800'>
                      Conferencia: Marco Legal Actualizado
                    </h4>
                    <p className='text-gray-600 text-sm'>
                      09:00 - 16:00 hrs • Modalidad Híbrida
                    </p>
                  </div>
                  <button className='text-blue-600 hover:text-blue-800 text-sm font-medium'>
                    Registrarse
                  </button>
                </div>
              </div>
            </section>

            {/* Información de Contacto */}
            <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-6'>
              <h3 className='text-lg font-semibold text-yellow-800 mb-3'>
                📞 Información de Contacto
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm'>
                <div>
                  <p className='text-yellow-700'>
                    <strong>Coordinación de Formación:</strong>
                  </p>
                  <p className='text-yellow-600'>📧 formacion@cms.gob.bo</p>
                  <p className='text-yellow-600'>
                    📱 +591 2 2345678 (ext. 205)
                  </p>
                </div>
                <div>
                  <p className='text-yellow-700'>
                    <strong>Horario de Atención:</strong>
                  </p>
                  <p className='text-yellow-600'>
                    Lunes a Viernes: 08:30 - 12:30 hrs
                  </p>
                  <p className='text-yellow-600'>Tardes: 14:30 - 18:30 hrs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
