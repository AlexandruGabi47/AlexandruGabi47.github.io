<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, watch } from 'vue'

const theme = ref<'light' | 'dark'>('light')

function applyTheme(t: 'light' | 'dark') {
  document.documentElement.setAttribute('data-theme', t)
}

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', theme.value)
  applyTheme(theme.value)
}

onMounted(() => {
  const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
  if (stored) {
    theme.value = stored
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme.value = 'dark'
  } else {
    theme.value = 'light'
  }
  applyTheme(theme.value)
})

watch(theme, (t) => applyTheme(t))
</script>

<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <div class="nav-container">
          <RouterLink to="/" class="nav-logo">Alexandru Gabi</RouterLink>
          <div class="nav-menu">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
            <!-- <RouterLink to="/about" class="nav-link">About</RouterLink> -->
            <RouterLink to="/projects" class="nav-link">Projects</RouterLink>
            <!-- <RouterLink to="/voice-acting" class="nav-link">Voice Acting</RouterLink> -->
            <!-- <RouterLink to="/contact" class="nav-link">Contact</RouterLink> -->
          </div>
          <div class="nav-actions">
            <button
              class="theme-toggle"
              @click="toggleTheme"
              :aria-label="`Toggle theme, current: ${theme}`"
              title="Toggle dark/light theme"
            >
              <span v-if="theme === 'dark'">🌙</span>
              <span v-else>☀️</span>
            </button>
          </div>
        </div>
      </nav>
    </header>

    <main class="page">
      <div class="container">
        <RouterView />
      </div>
    </main>

    <footer>
      <p>&copy; 2025 Alexandru Gabi. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.navbar {
  background-color: var(--nav-bg);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  color: var(--nav-text);
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-logo:hover {
  color: var(--primary);
}

.nav-menu {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--nav-text);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--primary);
}

.nav-actions {
  display: flex;
  align-items: center;
  margin-left: 1rem;
}

.theme-toggle {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.08);
  color: var(--nav-text);
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
}

.theme-toggle:hover {
  filter: brightness(1.05);
}

main.page {
  min-height: calc(100vh - 160px);
}

footer {
  background-color: var(--footer-bg);
  color: var(--nav-text);
  text-align: center;
  padding: 2rem 0;
  margin-top: 4rem;
}
</style>