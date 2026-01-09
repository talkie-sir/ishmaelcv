<template>
  <nav class="fixed top-0 left-0 right-0 backdrop-blur-sm shadow-md z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-center items-center h-16">
        <!-- Navigation Menu -->
        <div>
          <ul class="flex items-center space-x-8">
            <li>
              <router-link to="/"
                           class="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-50"
                           active-class="text-blue-600 bg-blue-50 font-semibold">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/about"
                           class="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-50"
                           active-class="text-blue-600 bg-blue-50 font-semibold">
                Personality
              </router-link>
            </li>
            <li>
              <router-link to="/contact"
                           class="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-50"
                           active-class="text-blue-600 bg-blue-50 font-semibold">
                Blogs
              </router-link>
            </li>
            <li>
              <router-link to="/contact"
                           class="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-50"
                           active-class="text-blue-600 bg-blue-50 font-semibold">
                Contact
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'AppNavbar'
  }
</script>
