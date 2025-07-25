<script setup>
  import shooterimage from '/src/assets/shootergame.png';
  const youtubeEmbedUrl = "https://www.youtube.com/embed/1UCcU8vIh4w";

</script>
<template>
            <div class="relative flex flex-col lg:flex-row items-start gap-8 tracking-wide bg-customblack40">
              <div class="lg:w-24/40 mx-auto px-15 pt-28 pb-8 ">
                <div class="absolute right-3 bottom-3 w-120 h-150 bg-purple-300 opacity-5 blur-2xl rounded-full z-0"></div>
                <div class="absolute left-30 top-35 w-150 h-100 bg-purple-800 opacity-5 blur-2xl  z-0"></div>
                <div class="aspect-video w-full ">
                  <iframe class="relative w-full h-full rounded-xl shadow-lg"
                          :src="youtubeEmbedUrl"
                          title="YouTube video player"
                          frameborder="0"
                          allowfullscreen></iframe>
                </div>
                <p class=" text-customgray70 font-comicrelief tracking-wide">
                  <br />
                  This is a game I was working on 3 years ago.
                  <br />
                  What I am most proud of is the fact that this was pre Chatgpt era .
                  <br />
                  This video was released on youtube on June 15 2022
                  <br />
                  <br />
                  <strong strong class="italic">Am saying I already know how to code , Chatgpt is just an assistant</strong>
                </p>
              </div>

              <!-- Right: Image Section -->
              <div class="w-full lg:w-15/40 text-right pt-90 pr-12 pb-20 font-comicrelief">
                <img :src="shooterimage"
                     alt="shooter game photo"
                     class="rounded-xl shadow-lg mx-auto mb-4" />
                <p class=" text-customgray70">
                  This is a game am currently working on
                  <br />
                  I have been working on it for the past 1 year .
                  <br />
                  Not because there is anything special am working on that requires so much time
                  but because am dreading it , its consistently last on the list of my priorities .
                </p>
              </div>
            </div>
</template>
<style>

</style>


