import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ITProjectsPage from '../views/ITProjectsPage.vue'
import VAProjectsPage from '../views/VAProjectsPage.vue'
import ContactPage from '../views/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/about', name: 'about', component: AboutPage },
    { path: '/it-projects', name: 'it-projects', component: ITProjectsPage },
    { path: '/va-projects', name: 'va-projects', component: VAProjectsPage },
    { path: '/contact', name: 'contact', component: ContactPage }
  ]
})

export default router