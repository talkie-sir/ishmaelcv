<script setup>
</script>

<template>
  <div class="relative bg-customblack40 tracking-wide  ">

    <!-- Header Section -->
    <header class="pt-20 md:pt-30 px-4 sm:px-6 md:px-25 pb-12">
      <div class="animate-fade-in-up">
        <h1 class="text-customwhitepink90 font-special-gothic text-3xl sm:text-4xl md:text-5xl font-bold">
          How would I describe my own self
        </h1>
        <p class="text-customgray70 text-base sm:text-lg md:text-xl mt-4 font-inter">
          Very biased , but here goes an assessment of my own self .
        </p>
      </div>
    </header>

    <!-- Main Content -->
    <div class="px-4 sm:px-6 md:px-25 pb-20 space-y-25">

      <!-- Chill Guy Section -->
      <div class="animate-fade-in-up" style="animation-delay: 0.3s">
        <div class="border border-gray-800 bg-neutral-900/30 backdrop-blur-sm rounded-2xl p-6 md:p-10">
          <h2 class="text-blue-100 font-bold text-2xl md:text-3xl mb-4 font-special-gothic">Calm and relaxed guy</h2>
          <p class="text-customgray0 text-sm md:text-base leading-relaxed font-inter">
            Am something of a calm human being, I think a better way to understand me
            is understanding what am not.
          </p>
        </div>
      </div>

      <!-- What I'm Not Section -->
      <div class="animate-fade-in-up space-y-25" style="animation-delay: 0.6s">
        <div class="border border-gray-800 bg-neutral-900/30 backdrop-blur-sm rounded-2xl p-6 md:p-10">
          <h3 class="text-customwhitepink30 font-bold text-xl md:text-2xl mb-4">What I'm NOT</h3>

          <div class="space-y-6">
            <p class="text-customgray0 text-sm md:text-base leading-relaxed font-inter">
              Am not the guy who engages in gossip, though you could build a case by saying
              I dont really have any sources of "the tea". Am somewhat weird because
              I usually ask people directly for information about them, I do not naturally resort to asking
              somebody else. <br><strong class="text-customgray10">Its probably important at this point to make it clear that I actually
            dislike these kinds of things . I have had and seen bad experiences where this was a tool
            used to twist narratives and other sketchy things </strong> which is why I am actually proud to state that
              am not one of those people,
            as in am saying am better than the other people around me , laughing emojis
            </p>

            <p class="text-customgray0 text-sm md:text-base leading-relaxed font-inter">
              Am really not the <strong class="text-orange-300">loud extroverted guy</strong>. I guess I know how to act like it around people am comfortable around.
              Thing is I have enjoyed a wedding which was full of relatives and family members, otherwise I just hated most public
              gatherings like parties , clubs and the likes .<br> Am not the guy who is friends
              with everybody or the guy who you might find dancing in a party or GOD FORBID the MC of the show.
              <br>
              Okay so maybe am just saying am shy but I really mean to say am not a <strong class="text-orange-300">"people person"</strong> .
            </p>

            <p class="text-customgray0 text-sm md:text-base leading-relaxed font-inter">
              Am not really the most <strong class="text-orange-300">charming</strong> guy around girls. If they ever hinted at that
              its probably because of some deeper things like them noticing subtle weird behaviours/signs and
              being receptive to that, otherwise am bad at flattering words , flirting and just winning people over
              in general .
              Am bad at showing affection. Am bad at emotional support like making a crying person feel better.
              Maybe at this point I should just say am non chalant but I know <strong class="text-blue-200">"Deep down in my heart"</strong> that I actually care ,
              laughing emojis.
            </p>
          </div>
        </div>
      </div>

      <!-- Decision Making Section -->
      <div class="animate-fade-in-up" style="animation-delay: 0.9s">
        <div class="border border-gray-800 bg-neutral-900/30 backdrop-blur-sm rounded-2xl p-6 md:p-10">
          <h3 class="text-customwhitepink30 font-bold text-xl md:text-2xl mb-4">My Decision-Making Process</h3>

          <p class="text-customgray0 text-sm md:text-base leading-relaxed font-inter">
            I wish I were a <strong class="text-orange-300">quick thinker</strong> or lets say a quick decision maker, but am not. I will often
            need a lot of information to be happy about making a decision. I admire people who just get things
            done quickly. I usually have to remove myself from a situation, then reflect on it, thats usually
            where my best decisions and realisations come from. I just cant think straight right there in the moment.
            <br>But if
            am being honest, I admire that about myself at times, I think I produce quality work in not trying
            to just simplify things but considering all the different corners. This is where I have to say I dont
            understand the people who make decisions with their "heart", like this is what feels right to me so I
            will do it, how does that work? Where does the heart come in when it comes to real decisions that involve
            prices, quantities, architecture and what not. But if am being real, those people usually do design and
            that kind of thing.
          </p>
        </div>
      </div>

      <!-- Conclusion -->
      <div class="animate-fade-in-up" style="animation-delay: 1.2s">
        <div class="border border-gray-800 bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-10 text-center">
          <p class="text-customwhitepink90 text-lg md:text-2xl font-bold font-special-gothic">
            So I may not the warmest person around and may not the most fun person either.
            But I swear <strong class="text-blue-100">deep down in my heart....,okay I will stop now</strong>.
          </p>
        </div>
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
