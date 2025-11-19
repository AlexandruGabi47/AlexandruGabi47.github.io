<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'

const theme = ref<'light' | 'dark'>('light')

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem('theme', theme.value)
}

onMounted(() => {
  const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
  if (stored) {
    theme.value = stored
  } else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
    theme.value = 'dark'
  }
  document.documentElement.setAttribute('data-theme', theme.value)
})
</script>

<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-container">
        <RouterLink to="/" class="nav-logo">Constantinescu Alexandru-Gabi</RouterLink>
        <ul class="nav-menu">
          <li><RouterLink to="/" class="nav-link">Home</RouterLink></li>
          <li><RouterLink to="/about" class="nav-link">About</RouterLink></li>
          <li><RouterLink to="/it-projects" class="nav-link">IT Projects</RouterLink></li>
          <li><RouterLink to="/va-projects" class="nav-link">VA Projects</RouterLink></li>
          <li><RouterLink to="/contact" class="nav-link">Contact</RouterLink></li>
          <li>
            <button 
              class="theme-toggle" 
              @click="toggleTheme"
              :title="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
            >
              {{ theme === 'dark' ? '🌙' : '☀️' }}
            </button>
          </li>
        </ul>
      </div>
    </nav>

    <RouterView />

    <footer>
      <p>&copy; 2025 Alexandru Gabi</p>
    </footer>
  </div>
</template>

<style scoped>
/* App-specific styles only - rest is in global CSS */
</style>
