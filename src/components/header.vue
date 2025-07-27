<script setup>
  import ishmaelImage from '/src/assets/ishmaelatBC.jpg';
</script>

<template>
  <header class="flex flex-col md:flex-row justify-between relative bg-customblack40 tracking-wide">
    <!-- Image on top for mobile, right for desktop -->
    <div class="w-full md:w-9/20 h-64 md:h-full relative z-0 order-1 md:order-2">
      <Motion :initial="{ filter: 'blur(10px)', opacity: 0.5 }"
              :animate="{ filter: 'blur(0px)', opacity: 1 }"
              :transition="{
                duration: 1.5,
                delay: 1.5,
                easing: 'cubic-bezier(0.22, 1, 0.36, 1)' 
              }">
        <img :src="ishmaelImage" alt="ishmael photo" class="transition duration-600 w-full h-full bg-blend-multiply fade-left object-cover" />
      </Motion>
    </div>

    <!-- Text below image on mobile, left on desktop -->
    <div class="font-bold pt-8 px-4 sm:px-6 md:pt-40 md:pl-25 w-full md:w-1/2 pb-18 md:pb-40 order-2 md:order-1">
      <!--animation on text -->
      <Motion :initial="{ y: 60, opacity: 0 ,letterSpacing: '0.5em'}"
              :animate="{ y: [60, -10, 0], opacity: 1 ,letterSpacing: ['0.5em', '0.1em', '0em']  }"
              :transition="{
                duration: 2.5,
                delay: 0.2,
                easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
              }">
        <h1 class="text-blue-100 font-special-gothic text-2xl sm:text-3xl">Hi !</h1> <br />
        <p class="text-2xl sm:text-4xl font-bold text-customgray10">Am Ishmael Mabhureni <br /> An aspiring <strong class="text-customwhitepink90">Systems Architect</strong>.<br /></p>
        <br />
        <p class="text-sm sm:text-base font-inter text-customgray0 pt-4 leading-relaxed">
          I'm a guy who fantasizes a lot — mostly about power and autonomy.
          I sometimes dream of becoming a <strong class="text-orange-300">Chief Technology Officer</strong>.<br />
          But more than that, I dream about running a massive company — bringing my ideas to life. Right now I am just
          working towards becoming a systems architect.
        </p>
      </Motion>
    </div>
  </header>
</template>

<style>
  .fade-left {
    mask-image: linear-gradient(to bottom, transparent 0%, black 40%), linear-gradient(to top, transparent 0%, black 40%), linear-gradient(to right, transparent 0%, black 40%);
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 40%), linear-gradient(to top, transparent 0%, black 40%), linear-gradient(to right, transparent 0%, black 80%);
    mask-composite: intersect;
    -webkit-mask-composite: destination-in;
  }
</style>
