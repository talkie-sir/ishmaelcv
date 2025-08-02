<script setup>
  import bookimage from '/src/assets/book.png'

  // Education data - simplified without background flags
  const educationStages = [
    {
      id: 'college',
      title: 'College',
      institution: 'National University of Science and Technology',
      location: 'Bulawayo',
      program: 'COMPUTER SCIENCE',
      status: 'Currently - Attachment year',
      isCollege: true
    },
    {
      id: 'high',
      title: 'High School',
      institution: 'Mtshabezi High',
      location: 'Gwanda'
    },

    {
      id: 'secondary',
      title: 'Secondary School',
      institution: 'Matopo High',
      location: 'Bulawayo'
    },

    {
      id: 'primary',
      title: 'Primary School',
      institution: 'Government Primary School',
      location: 'Beitbridge'
    },    
  ]

  // Reusable animation configs
  const headerAnimation = {
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: 'easeOut' },
    viewport: { once: true, amount: 0.3 }
  }

  const subHeaderAnimation = {
    initial: { x: 120, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' },
    viewport: { once: true, amount: 0.3 }
  }

  const cardHoverAnimation = {
    y: -8,
    scale: 1.4,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
  }

  // Simplified card animation function
  const getCardAnimation = (index) => ({
    initial: { y: 80, opacity: 0, rotateX: -15 },
    whileInView: { y: 0, opacity: 1, rotateX: 0 },
    whileHover: cardHoverAnimation,
    transition: { duration: 0.6, delay: 0.1 + (index * 0.1), ease: 'easeOut' },
    viewport: { once: true, amount: 0.2 }
  })
</script>

<template>
  <div class="relative overflow-hidden p-8 bg-customblack40 pb-15 border border-gray-800">
    <!-- Main Content -->
    <div class="relative z-10 max-w-7xl mx-auto text-customgray10 pb-16">
      <!-- Animated headers -->
      <Motion v-bind="headerAnimation">
        <h1 class="text-4xl font mb-12 pt-25 pl-5 text-gray-400 font-comicrelief">
          I dont think the journey is ending soon
        </h1>
      </Motion>

      <Motion v-bind="subHeaderAnimation">
        <h3 class="text-1xl font mb-12 pt-2 pl-5 text-gray200 font-comicrelief">
          I dream of doing <strong class="text-neutral-300">Masters</strong> in the UK
        </h3>
      </Motion>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8">
        <!-- Simplified Education Cards - All with book background -->
        <Motion v-for="(stage, index) in educationStages"
                :key="stage.id"
                v-bind="getCardAnimation(index)">
          <div class="backdrop-blur-md rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300 hover:border hover:border-orange-900 hover:bg-orange-900 bg-cover bg-center h-80 "
               :style="{ backgroundImage: `url(${bookimage})` }">
            <h2 class="text-2xl font-indie-flower mb-2 pl-11 pr-11 text-black pt-0 transition-colors duration-300 underline ">
              {{ stage.title }}
            </h2>

            <p class="text-black pt-3 pl-11 pr-6 transition-colors duration-300 font-annie font-bold text-2xl">
              {{ stage.institution }}
            </p>

            <!-- College-specific content -->
            <template v-if="stage.isCollege">
              <p class="text-black pt-2 pl-11  text-1xl transition-colors duration-300 font-annie font-bold text-2xl">
                {{ stage.program }}
              </p>
              <p class="text-black pt-2 pl-11 pr-12 transition-colors duration-300 font-annie font-bold text-1xl">
                {{ stage.status }}
              </p>
            </template>

            <p class="text-black  pt-2 pl-12 transition-colors duration-300 font-annie font-bold">
              {{ stage.location }}
            </p>
          </div>
        </Motion>
      </div>
    </div>
  </div>
</template>
