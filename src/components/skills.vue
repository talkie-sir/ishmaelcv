<script setup>
  import 'vue3-carousel/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

  // Import all images properly
  import unityLogo from '/src/assets/unity_.png'
  import vueLogo from '/src/assets/vue-js.svg'
  import flutterLogo from '/src/assets/flutter.png'
  import cLogo from '/src/assets/C.png'
  import pythonLogo from '/src/assets/python.png'

  const skills = [
    { name: 'Unity with C#', logo: unityLogo },
    { name: 'Vue.js', logo: vueLogo },
    { name: 'Flutter with Dart', logo: flutterLogo },
    { name: 'C', logo: cLogo },
    { name: 'python', logo: pythonLogo },
  ]
</script>

<template>
  <div class=" relative border border-gray-800 bg-customblack40">
    <h1 class="text-center pt-30 px-80 text-customwhitepink30 font-bold text-4xl  leading-tight font-bold font-special-gothic">
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
              <p class="mt-2 text-sm text-customgray10">{{ skill.name }}</p>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </div>
</template>
