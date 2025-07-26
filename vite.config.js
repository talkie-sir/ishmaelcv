import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

import Components from 'unplugin-vue-components/vite'
import MotionResolver from 'motion-v/resolver'


export default defineConfig({
  base: '/',
  plugins: [
    tailwindcss(),
    , vue(),
    Components({
      dts: true,
      resolvers: [
        MotionResolver()
      ],
    }),
  ]

});
