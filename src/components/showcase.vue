<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import shooterimage from '/src/assets/shootergame.png';
  import tvpng from '/src/assets/tvpng.png'; // Your TV frame image
  import bgpattern from '/src/assets/bgpattern.jpg'; // Your background pattern image

  const youtubeEmbedUrl = "https://www.youtube.com/embed/1UCcU8vIh4w";

  // Refs for animation triggers
  const videoSection = ref(null);
  const imageSection = ref(null);
  const videoVisible = ref(false);
  const imageVisible = ref(false);
  const isInitialized = ref(false);

  // Intersection Observer setup
  let observer = null;

  onMounted(() => {
    // Small delay to ensure proper initialization
    setTimeout(() => {
      isInitialized.value = true;
    }, 100);

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === videoSection.value) {
            videoVisible.value = entry.isIntersecting;
            console.log('Video visible:', entry.isIntersecting);
          } else if (entry.target === imageSection.value) {
            imageVisible.value = entry.isIntersecting;
            console.log('Image visible:', entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Less restrictive margin
      }
    );

    if (videoSection.value) observer.observe(videoSection.value);
    if (imageSection.value) observer.observe(imageSection.value);
  });

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });
</script>

<template>
  <div class="relative px-6 py-20"
       :style="{ backgroundImage: `url(${bgpattern})` }"
       style="background-repeat: repeat; background-size: auto;">

    <!-- Optional overlay for better content readability -->
    <div class="absolute inset-0 bg-neutral-900/90"></div>

    <div class="relative z-10">
      <h1 class="font-special-gothic mx-auto pb-25 pt-13 text-center text-white text-5xl">Personal passion Projects</h1>

      <!-- Side by Side Layout -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-15">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center max-w-6xl mx-auto">

          <!-- YouTube Video Section with TV Frame -->
          <div ref="videoSection"
               class="transition-all duration-1000 ease-out flex justify-center"
               :class="{
                 'opacity-100 translate-y-0': videoVisible && isInitialized,
                 'opacity-0 translate-y-12': !videoVisible || !isInitialized
               }">

            <!-- TV Container - Larger on mobile, centered on desktop -->
            <div class="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-xl xl:max-w-2xl">

              <!-- TV Frame (PNG overlay) -->
              <img :src="tvpng"
                   alt="TV Frame"
                   class="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none transition-all duration-1000 ease-out"
                   :class="{
                     'opacity-100 scale-100': videoVisible && isInitialized,
                     'opacity-0 scale-95': !videoVisible || !isInitialized
                   }" />

              <!-- Video positioned behind TV frame -->
              <div class="relative aspect-[4/3] w-full">
                <!-- Video fills the TV screen completely -->
                <div class="absolute top-[5%] left-[2%] right-[2%] bottom-[22%] rounded-lg overflow-hidden">
                  <iframe class="w-full h-full transition-all duration-1000 delay-200 ease-out"
                          :class="{
                            'opacity-100 scale-100': videoVisible && isInitialized,
                            'opacity-0 scale-95': !videoVisible || !isInitialized
                          }"
                          :src="youtubeEmbedUrl"
                          title="YouTube video player"
                          frameborder="0"
                          allowfullscreen></iframe>
                </div>
              </div>
            </div>

            <p class="absolute bottom-0 left-0 right-0 mt-6 pt-5 md:pt-5 text-white font-comicrelief tracking-wide text-center transition-all duration-1000 delay-300 ease-out text-base sm:text-lg pt-15"
               :class="{
                 'opacity-100 translate-y-0': videoVisible && isInitialized,
                 'opacity-0 translate-y-8': !videoVisible || !isInitialized
               }">
              This is a game I was working on 3 years ago.
            </p>
          </div>

          <!-- Image Section with TV Frame -->
          <div ref="imageSection"
               class="transition-all duration-1000 ease-out min-h-[400px] flex justify-center"
               :class="{
                 'opacity-100 translate-y-0': imageVisible && isInitialized,
                 'opacity-0 translate-y-12': !imageVisible || !isInitialized
               }">

            <!-- TV Container - Larger on mobile, centered on desktop -->
            <div class="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-xl xl:max-w-2xl">
              <!-- TV Frame (PNG overlay) -->
              <img :src="tvpng"
                   alt="TV Frame"
                   class="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none transition-all duration-1000 delay-200 ease-out"
                   :class="{
                     'opacity-100 scale-100': imageVisible && isInitialized,
                     'opacity-0 scale-95': !imageVisible || !isInitialized
                   }" />

              <!-- Image positioned behind TV frame -->
              <div class="relative aspect-[4/3] w-full">
                <!-- Image fills the TV screen completely -->
                <div class="absolute top-[8%] left-[2%] right-[2%] bottom-[15%] rounded-lg overflow-hidden">
                  <img :src="shooterimage"
                       alt="shooter game photo"
                       class="w-full h-full object-cover transition-all duration-1000 delay-400 ease-out"
                       :class="{
                         'opacity-100 scale-100': imageVisible && isInitialized,
                         'opacity-0 scale-95': !imageVisible || !isInitialized
                       }"
                       @load="console.log('Image loaded')"
                       @error="console.log('Image failed to load')" />
                </div>
              </div>
            </div>

            <p class="absolute top-100 left-0 right-0 mt-6 md:pt-5 text-white font-comicrelief text-center transition-all duration-1000 delay-400 ease-out text-base sm:text-lg px-4"
               :class="{
                 'opacity-100 translate-y-0': imageVisible && isInitialized,
                 'opacity-0 translate-y-8': !imageVisible || !isInitialized
               }">
              This is a game I am currently working on.
              <br />
              I have been working on it for the past 1 year.
              <br />
              It's just a hobby at this point (creating game worlds).
            </p>
          </div>

        </div>

        <h1 class="pt-50 text-white text-center font-comicrelief text-lg sm:text-xl">
          Thank you very much for viewing my site
          <br />
          I made the website with vue.js
          <br />
          and I hope you like it !
        </h1>
      </div>
    </div>
  </div>
</template>
