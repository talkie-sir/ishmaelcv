<script setup>
  import shooterimage from '/src/assets/shootergame.png';
  const youtubeEmbedUrl = "https://www.youtube.com/embed/1UCcU8vIh4w";
</script>

<template>
  <div class="relative flex flex-col items-center gap-8 tracking-wide bg-customblack40 px-6 py-20">

    <!-- Glowy Background Effects -->
    <div class="absolute right-3 bottom-3 w-120 h-100 bg-gray-700 opacity-15 blur-2xl rounded-full z-0"></div>
    <div class="absolute right-80 bottom-3 w-120 h-100 bg-gray-700 opacity-15 blur-2xl rounded-full z-0"></div>
    <div class="absolute left-35 top-35 w-150 h-100 bg-gray-700 opacity-15 blur-2xl z-0"></div>

    <!-- Centered YouTube Video -->
    <div class="w-full max-w-3xl z-10">
      <div class="aspect-video w-full">
        <iframe class="w-full h-full rounded-xl shadow-lg"
                :src="youtubeEmbedUrl"
                title="YouTube video player"
                frameborder="0"
                allowfullscreen></iframe>
      </div>
      <p class="mt-4 text-customgray0 font-comicrelief tracking-wide text-center pt-14">
        This is a game I was working on 3 years ago.
      </p>
    </div>

    <!-- Image Section Below -->
    <div class="w-full max-w-2xl z-10 pt-15 ">
      <img :src="shooterimage"
           alt="shooter game photo"
           class="rounded-xl shadow-lg mx-auto mb-4" />
      <p class="text-customgray0 font-comicrelief text-center">
        This is a game am currently working on.
        <br />
        I have been working on it for the past 1 year.
        <br />
        Not because there is anything special I'm working on that requires so much time,
        but because I’m dreading it — it's consistently last on the list of my priorities.
      </p>
    </div>
  </div>
</template>
