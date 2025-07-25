<script setup>
  import 'vue3-carousel/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

  const skills = [
    { name: 'Unity with C#', logo: '/src/assets/unity_.png' },
    { name: 'Vue.js', logo: '/src/assets/vue-js.svg' },
    { name: 'Flutter with Dart', logo: '/src/assets/flutter.png' },
    { name: 'C', logo: '/src/assets/C.png' },
    { name: 'python', logo: '/src/assets/python.png' },
  ]
  </script>

<template>
  <div class=" relative border border-gray-800 bg-customblack40">
    <h1 class="text-center pt-30 px-80 text-gray-300 font-bold text-4xl  leading-tight font-bold font-special-gothic">
      The fantasies usually translate into <strong class="text-gray-700">curiosity</strong> and bits of <strong class="text-gray-700">creativity</strong>.
    </h1>
    <h3 class="px-80">I have worked with each of the following </h3>

    <div class="absolute top-70 left-120 w-80 h-80 bg-orange-300 opacity-5 blur-2xl rounded-full"></div>

    <div class="pt-18 ">

      <div class="shadow-lg rounded-2xl backdrop-blur-md border border-neutral-800 p-16 bg-neutral-800/30">

        <Carousel itemsToShow="5"
                  autoplay
                  wrapAround
                  pauseAutoplayOnHover
                  gap="0.01"
                  class="overflow-hidden">
          <Slide v-for="skill in skills" :key="skill.name">
            <div class="flex flex-col items-center bg-neutral-900 shadow-lg p-8 ">
              <img :src="skill.logo" :alt="skill.name" class="h-30 w-30 object-contain hover:scale-110 transform transition duration-500" />
              <p class="mt-2 text-sm text-gray-500">{{ skill.name }}</p>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </div>
</template>

