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
          } else if (entry.target === imageSection.value) {
            imageVisible.value = entry.isIntersecting;
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '-100px 0px' // Only trigger when element is well into viewport
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
  <div class="relative flex flex-col items-center gap-8 tracking-wide bg-customblack40 px-6 py-20">
    <!-- Glowy Background Effects -->
    <div class="absolute right-3 bottom-3 w-120 h-100 bg-gray-700 opacity-2 blur-2xl rounded-full z-0"></div>
    <div class="absolute right-80 bottom-3 w-120 h-100 bg-gray-700 opacity-2 blur-2xl rounded-full z-0"></div>
    

    <!-- Centered YouTube Video -->
    <div ref="videoSection"
         class="w-full max-w-3xl z-10 transition-all duration-1000 ease-out"
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
      <p class="mt-4 text-customgray0 font-comicrelief tracking-wide text-center pt-14 transition-all duration-1000 delay-300 ease-out"
         :class="{
          'opacity-100 translate-y-0': videoVisible && isInitialized,
          'opacity-0 translate-y-8': !videoVisible || !isInitialized
        }">
        This is a game I was working on 3 years ago.
      </p>
    </div>

    <!-- Image Section Below -->
    <div ref="imageSection"
         class="w-full max-w-2xl z-10 pt-15 transition-all duration-1000 ease-out"
         :class="{
        'opacity-100 translate-y-0': imageVisible && isInitialized,
        'opacity-0 translate-y-12': !imageVisible || !isInitialized
      }">
      <img :src="shooterimage"
           alt="shooter game photo"
           class="rounded-xl shadow-lg mx-auto mb-4 transition-all duration-1000 delay-200 ease-out"
           :class="{
          'opacity-100 scale-100': imageVisible && isInitialized,
          'opacity-0 scale-95': !imageVisible || !isInitialized
        }" />
      <p class="text-customgray0 font-comicrelief text-center transition-all duration-1000 delay-400 ease-out"
         :class="{
          'opacity-100 translate-y-0': imageVisible && isInitialized,
          'opacity-0 translate-y-8': !imageVisible || !isInitialized
        }">
        This is a game am currently working on.
        <br />
        I have been working on it for the past 1 year.
        <br />
        Its just a hobby at this point (creating game worlds).
      </p>
    </div>
  </div>
</template>
