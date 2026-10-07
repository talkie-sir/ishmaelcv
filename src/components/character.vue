<script setup>
</script>

<template>
  <div class="relative bg-customblack40 tracking-wide  ">

    <!-- Header Section -->
    <header class="pt-20 md:pt-30 px-4 sm:px-6 md:px-25 pb-12">
      <div class="animate-fade-in-up">
        <h1 class="text-customwhitepink90 font-special-gothic text-3xl sm:text-4xl md:text-5xl font-bold">
          What are my values
        </h1>
        <p class="text-customgray70 text-base sm:text-lg md:text-xl mt-4 font-inter">
          What makes an environment the best or the worst for me ?
        </p>
      </div>
    </header>

    <!-- Main Content -->
    <div class="px-4 sm:px-6 md:px-25 pb-20 space-y-50">

      <!-- Peace Section -->
      <div class="animate-fade-in-up" style="animation-delay: 0.3s">
        <div class="border border-gray-800 bg-neutral-900/30 backdrop-blur-sm rounded-2xl p-6 md:p-10">
          <h2 class="text-blue-100 font-bold text-2xl md:text-3xl mb-4 font-special-gothic">Peace</h2>
          <p class="text-customgray0 text-sm md:text-base leading-relaxed font-inter">
             Disagreements, debates ,conflicts of interest are all normal ,neccessary and
             to be expected . However, when done with respect, most of these are
              not a problem .I can still be in a state of peace, even while In disagreement with the world for example .
             The things that do, however, pose a threat to peace include the darker tactics:<br/>
             Blame shifting <br/>
             Gaslighting <br/>
             Humiliation <br/>
             Judgments <br/>
             False accusations<br/>
             Manipulation <br/>
            The things that put you in defense mode, where you now have to justify and prove yourself
            . Fighting false narratives ,all forms of manipulation .
            Those are, to me, the things that disturb peace, replacing it with tension , resentment and anger .

          </p>
          </div>>
        </div>


      <!-- Chill Guy Section -->
      <div class="animate-fade-in-up" style="animation-delay: 0.3s">
        <div class="border border-gray-800 bg-neutral-900/30 backdrop-blur-sm rounded-2xl p-6 md:p-10">
          <h2 class="text-blue-100 font-bold text-2xl md:text-3xl mb-4 font-special-gothic">Accountability</h2>
          <p class="text-customgray0 text-sm md:text-base leading-relaxed font-inter">
             I believe we are all imperfect. We all make mistakes now and again, and that is exactly why it shouldn't
              hurt to simply come out and admit when one is wrong. Just being able to own up to your own mistakes and
              account for your own decisions .  I
              think that is impotant . I genuinely think the worst thing a person can do is go around doing things recklessly then
              pushing the blame and consequences on others not wanting take accountability for their own flaws and their own faults.
              Being able to own up even when you have it in your ability to twist the narrative , That is where growth comes from, and that's how
               you gain trust and respect from others.
          </p>
          </div>>
        </div>
      </div>


      <!-- Decision Making Section -->
      <div class="animate-fade-in-up" style="animation-delay: 0.9s">
        <div class="border border-gray-800 bg-neutral-900/30 backdrop-blur-sm rounded-2xl p-6 md:p-10">
          <h3 class="text-customwhitepink30 font-bold text-xl md:text-2xl mb-4">My Decision-Making Process</h3>

          <p class="text-customgray0 text-sm md:text-base leading-relaxed font-inter">
            I wish I were a <strong class="text-orange-300">quick thinker</strong> or lets say a quick decision maker, but am not. I will often
            need a lot of information to be happy about making a decision. I admire people who just make a decision quickly and never look back .
            Like I have to have something , Something I could base a decision based off of or a different choice I have to compare to for me to know am doing
            the right thing .
            <br/>
            This is where I have to say I dont
            understand the people who make decisions with their "heart", like this is what feels right to me so I
            will do it, how does that work? Where does the heart come in when it comes to real decisions that involve
            prices, quantities, architecture and that kind of thing .
          </p>
        </div>
      </div>

      <!-- Conclusion -->
      <div class="animate-fade-in-up" style="animation-delay: 1.2s">
        <div class="border border-gray-800 bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-10 text-center">
          <p class="text-customwhitepink90 text-lg md:text-2xl font-bold font-special-gothic">
             I may not the warmest person around and may not the most fun person either.
            But I swear <strong class="text-blue-100">deep down in my heart....okay thats it</strong>.
          </p>
        </div>
      </div>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 1.5s cubic-bezier(0.22, 1, 0.36, 1) both;
}
</style>
