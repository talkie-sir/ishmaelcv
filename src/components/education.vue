<template>
  <div class="relative overflow-hidden p-8 bg-customblack40 pb-15 border border-gray-800">
    <!-- Optional blurry lights in the background -->
    <div class="absolute bottom-56 left-30 w-80 h-60 bg-blue-400 opacity-3 blur-2xl rounded-full"></div>
    <div class="absolute bottom-80 right-10 w-80 h-60 bg-blue-400 opacity-3 blur-2xl rounded-full"></div>

    <!-- Main Content -->
    <div class="relative z-10 max-w-7xl mx-auto text-customgray10 pb-16">
      <!-- Animated headers -->
      <Motion :initial="{ x: 100, opacity: 0 }"
              :whileInView="{ x: 0, opacity: 1 }"
              :transition="{ duration: 0.8, ease: 'easeOut' }"
              :viewport="{ once: true, amount: 0.3 }">
        <h1 class="text-4xl font mb-12 pt-25 pl-5 text-gray-400 font-comicrelief">
          I dont think the journey is ending soon
        </h1>
      </Motion>

      <Motion :initial="{ x: 120, opacity: 0 }"
              :whileInView="{ x: 0, opacity: 1 }"
              :transition="{ duration: 0.8, delay: 0.2, ease: 'easeOut' }"
              :viewport="{ once: true, amount: 0.3 }">
        <h3 class="text-1xl font mb-12 pt-2 pl-5 text-gray200 font-comicrelief">
          I dream of doing <strong class="text-neutral-300">Masters</strong> in the UK
        </h3>
      </Motion>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
        <!-- Primary School -->
        <Motion :initial="{ y: 80, opacity: 0, rotateX: -15 }"
                :whileInView="{ y: 0, opacity: 1, rotateX: 0 }"
                :whileHover="{
                  y: -8,
                  scale: 1.02,
                  rotateY: 5,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }"
                :transition="{ duration: 0.6, delay: 0.1, ease: 'easeOut' }"
                :viewport="{ once: true, amount: 0.2 }">
          <div class="bg-white/1 backdrop-blur-md rounded-xl shadow-lg p-6 h-60 cursor-pointer transition-all duration-300 hover:bg-white/3 hover:border hover:border-gray-600">
            <h2 class="text-3xl font-indie-flower mb-2 text-gray-300 pt-8 transition-colors duration-300 hover:text-white">Primary School</h2>
            <p class="text-gray-200 pt-3 font-inter transition-colors duration-300 hover:text-gray-100">Government Primary School</p>
            <p class="text-gray-400 text-sm pt-2 transition-colors duration-300 hover:text-gray-300">Beitbridge</p>
          </div>
        </Motion>

        <!-- Secondary school -->
        <Motion :initial="{ y: 80, opacity: 0, rotateX: -15 }"
                :whileInView="{ y: 0, opacity: 1, rotateX: 0 }"
                :whileHover="{
                  y: -8,
                  scale: 1.02,
                  rotateY: 5,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }"
                :transition="{ duration: 0.6, delay: 0.2, ease: 'easeOut' }"
                :viewport="{ once: true, amount: 0.2 }">
          <div class="bg-white/2 backdrop-blur-md rounded-xl shadow-lg p-6 h-60 cursor-pointer transition-all duration-300 hover:bg-white/4 hover:border hover:border-gray-600">
            <h2 class="text-3xl font-indie-flower mb-2 text-gray-300 pt-8 transition-colors duration-300 hover:text-white">Secondary School</h2>
            <p class="text-gray-200 pt-3 font-inter transition-colors duration-300 hover:text-gray-100">Matopo High</p>
            <p class="text-gray-400 text-sm pt-2 transition-colors duration-300 hover:text-gray-300">Bulawayo</p>
          </div>
        </Motion>

        <!-- High School -->
        <Motion :initial="{ y: 80, opacity: 0, rotateX: -15 }"
                :whileInView="{ y: 0, opacity: 1, rotateX: 0 }"
                :whileHover="{
                  y: -8,
                  scale: 1.02,
                  rotateY: 5,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }"
                :transition="{ duration: 0.6, delay: 0.3, ease: 'easeOut' }"
                :viewport="{ once: true, amount: 0.2 }">
          <div class="bg-white/2 backdrop-blur-md rounded-xl shadow-lg p-6 h-60 cursor-pointer transition-all duration-300 hover:bg-white/4 hover:border hover:border-gray-600">
            <h2 class="text-3xl font-indie-flower mb-2 text-gray-300 pt-8 transition-colors duration-300 hover:text-white">High School</h2>
            <p class="text-gray-200 pt-3 font-inter transition-colors duration-300 hover:text-gray-100">Mtshabezi High</p>
            <p class="text-gray-400 text-sm pt-2 transition-colors duration-300 hover:text-gray-300">Gwanda</p>
          </div>
        </Motion>

        <!-- College -->
        <Motion :initial="{ y: 80, opacity: 0, rotateX: -15 }"
                :whileInView="{ y: 0, opacity: 1, rotateX: 0 }"
                :whileHover="{
                  y: -8,
                  scale: 1.02,
                  rotateY: 5,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }"
                :transition="{ duration: 0.6, delay: 0.4, ease: 'easeOut' }"
                :viewport="{ once: true, amount: 0.2 }">
          <div class="bg-white/2 backdrop-blur-md rounded-xl shadow-lg p-6 h-70 cursor-pointer transition-all duration-300 hover:bg-white/4 hover:border hover:border-gray-600">
            <h2 class="text-3xl font-indie-flower mb-2 text-gray-300 pt-8 transition-colors duration-300 hover:text-white">College</h2>
            <p class="text-gray-200 pt-3 font-inter transition-colors duration-300 hover:text-gray-100">National University of Science and Technology</p>
            <p class="text-gray-100 pt-4 text-1xl transition-colors duration-300 hover:text-white">COMPUTER SCIENCE</p>
            <p class="text-gray-300 text-sm pt-4 transition-colors duration-300 hover:text-gray-200">Currently - Attachment year</p>
            <p class="text-gray-500 text-sm pt-4 transition-colors duration-300 hover:text-gray-400">Bulawayo</p>
          </div>
        </Motion>
      </div>
    </div>
  </div>
</template>
