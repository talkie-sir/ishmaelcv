import { createRouter, createWebHistory } from 'vue-router'

import AppHeader from '../components/HomePage.vue'
import Personality from '../components/personality.vue'
import skills from '../components/skills.vue'
import education from '../components/education.vue'
import showcase from '../components/showcase.vue'

const routes = [
  { path: '/', component: AppHeader },
  { path: '/about', component: Personality },
  { path: '/skills', component: skills },
  { path: '/education', component: education },
  { path: '/showcase', component: showcase },
  { path: '/contact', component: showcase } // placeholder for contact page
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
