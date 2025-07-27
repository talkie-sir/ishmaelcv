<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import shooterimage from '/src/assets/shootergame.png';

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
  <div class="relative bg-customblack40 px-6 py-20">

    <h1 class=" font-winkysans mx-auto pb-25 pt-18 text-center text-customgray10 text-3xl ">Some passion Projects</h1>
    <!-- Side by Side Layout -->
    <div class="relative z-10 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        <!-- YouTube Video Section -->
        <div ref="videoSection"
             class="transition-all duration-1000 ease-out"
             :class="{
               'opacity-100 translate-y-0': videoVisible && isInitialized,
               'opacity-0 translate-y-12': !videoVisible || !isInitialized
             }">
          <!-- Fixed aspect ratio container to prevent shrinking -->
          <div class="aspect-video w-full relative">
            <iframe class="absolute inset-0 w-full h-full rounded-xl shadow-lg transition-all duration-1000 ease-out"
                    :class="{
                      'opacity-100 scale-100': videoVisible && isInitialized,
                      'opacity-0 scale-95': !videoVisible || !isInitialized
                    }"
                    :src="youtubeEmbedUrl"
                    title="YouTube video player"
                    frameborder="0"
                    allowfullscreen></iframe>
          </div>
          <p class="mt-6 text-customgray0 font-comicrelief tracking-wide text-center transition-all duration-1000 delay-300 ease-out"
             :class="{
               'opacity-100 translate-y-0': videoVisible && isInitialized,
               'opacity-0 translate-y-8': !videoVisible || !isInitialized
             }">
            This is a game I was working on 3 years ago.
          </p>
        </div>

        <!-- Image Section -->
        <div ref="imageSection"
             class="transition-all duration-1000 ease-out min-h-[400px]"
             :class="{
               'opacity-100 translate-y-0': imageVisible && isInitialized,
               'opacity-0 translate-y-12': !imageVisible || !isInitialized
             }">
          <div class="w-full">
            <img :src="shooterimage"
                 alt="shooter game photo"
                 class="rounded-xl shadow-lg w-full h-auto transition-all duration-1000 delay-200 ease-out"
                 :class="{
                   'opacity-100 scale-100': imageVisible && isInitialized,
                   'opacity-0 scale-95': !imageVisible || !isInitialized
                 }"
                 @load="console.log('Image loaded')"
                 @error="console.log('Image failed to load')" />
          </div>
          <p class="mt-6 text-customgray0 font-comicrelief text-center transition-all duration-1000 delay-400 ease-out"
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
    </div>
  </div>
</template>
