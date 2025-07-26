<script setup>
  import ishmaelImage from '/src/assets/ishmaelatBC.jpg';

</script> 

<template>
  <header class="flex flex-col md:flex-row justify-between  relative bg-customblack40 tracking-wide">
    <!-- text on the left -->
    <div class=" font-bold pt-40 pl-25 w-1/2 pb-40 ">
      <h1 class="text-blue-100 font-special-gothic text-3xl ">Hi !</h1> <br />
      <p class="text-4xl font-bold text-customgray10 ">Am Ishmael Mabhureni <br /> An aspiring <strong class="text-customwhitepink90">Information Systems Engineer</strong>.<br /></p>
      <br />
      <p class=" font-inter text-customgray0 pt-4">
        I'm a guy who fantasizes a lot — mostly about power, autonomy, and bringing good ideas to life.
        I sometimes dream of becoming a <strong class="text-orange-300"> Chief Technology Officer</strong>.
  But more than that, I dream about running a massive company — bringing my ideas to life .
</p>
    </div>

    <!--spacer -->
    <div class="flex-grow"></div>

    <div class="absolute right-3 w-100 h-150 bg-gray-300 opacity-4 blur-2xl rounded-full z-0"></div>
    <div class="absolute left-3 bottom-1 w-150 h-150 bg-blue-800 opacity-2 blur-2xl  z-0"></div>
    <!-- //image on the right -->
    <div class="w-9/20 h-full relative z-0">
      <img :src="ishmaelImage" alt="ishmael photo" class="transition duration-600 5 w-full h-full bg-blend-multiply  fade-left ">
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
