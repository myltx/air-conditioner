import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(), 
    presetAttributify(), 
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/'
    })
  ],
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
    'btn': 'px-4 py-2 font-semibold text-sm bg-white text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100',
    'btn-primary': 'px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600',
    'card': 'bg-white rounded-md shadow-md p-4',
    'air-card': 'w-full md:w-96 rounded-xl shadow-lg bg-white/80 backdrop-blur-sm p-6',
  },
  rules: [
    ['transition-base', { transition: 'all 0.3s ease-in-out' }],
  ],
  theme: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
      },
    },
  },
})
