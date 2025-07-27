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
  <div class="relative border border-gray-800 bg-customblack40">
    <!-- Animated title with responsive padding -->
    <h1 class="text-center pt-12 md:pt-30 px-4 md:px-80 text-customwhitepink30 font-bold text-2xl md:text-4xl leading-tight font-special-gothic">
      The fantasies usually translate into <strong class="text-gray-700">curiosity</strong> and bits of <strong class="text-gray-700">creativity</strong>.
    </h1>

    <!-- Subtitle with responsive padding -->
    <h3 class="px-4 md:px-80 text-base md:text-lg text-customwhitepink30 text-center md:text-left mt-4 md:mt-0">
      I have worked with each of the following
    </h3>

    <!-- Background glow - adjusted for mobile -->
    <div class="absolute top-20 md:top-70 left-8 md:left-120 w-40 md:w-80 h-40 md:h-80 bg-orange-300 opacity-5 blur-2xl rounded-full"></div>

    <!-- Carousel container with responsive padding -->
    <div class="pt-8 md:pt-18 px-4 md:px-0">
      <div class="shadow-lg rounded-2xl backdrop-blur-md border border-neutral-800 p-4 md:p-16 bg-neutral-800/30">
        <Carousel :itemsToShow="2"
                  :itemsToScroll="1"
                  :breakpoints="{
            768: {
              itemsToShow: 3,
              itemsToScroll: 1,
            },
            1024: {
              itemsToShow: 5,
              itemsToScroll: 1,
            }
          }"
                  :autoplay="3000"
                  wrapAround
                  :transition="800"
                  :gap="10"
                  class="overflow-hidden">
          <Slide v-for="skill in skills" :key="skill.name">
            <div class="flex flex-col items-center bg-neutral-900 shadow-lg p-4 md:p-8 mx-2 rounded-lg transition-all duration-300 ease-in-out">
              <img :src="skill.logo"
                   :alt="skill.name"
                   class="h-16 w-16 md:h-30 md:w-30 object-contain hover:scale-110 transform transition duration-500" />
              <p class="mt-2 text-xs md:text-sm text-customgray10 text-center">{{ skill.name }}</p>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </div>
</template>
