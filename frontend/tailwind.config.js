/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Páginas de Next.js 13+ App Router
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    // Componentes reutilizables
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',

    // Cualquier archivo en src
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Gradientes personalizados
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
