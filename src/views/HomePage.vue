<script setup lang="ts">
import { ref } from 'vue'

const name = ref<string>('Alexandru Gabi')
const title = ref<string>('Game Developer')
const description = ref<string>('Welcome to my personal website! I\'m passionate about creating immersive and engaging games.')
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Hi, I'm {{ name }}</h1>
          <h2 class="hero-subtitle">{{ title }}</h2>
          <p class="hero-description">{{ description }}</p>
          <div class="hero-buttons">
            <router-link to="/projects" class="btn">View My Work</router-link>
            <!-- <router-link to="/contact" class="btn btn-secondary">Get In Touch</router-link> -->
          </div>
        </div>
        <div class="hero-image">
          <div class="placeholder-avatar">
            <span>AG</span>
          </div>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2>What I Do</h2>
        <div class="features-grid">
          <div class="feature-card card">
            <h3>Game Development</h3>
            <p>Designing and developing immersive and engaging games using Unity</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  padding: 4rem 0;
  background: var(--bg-gradient-hero, linear-gradient(135deg, #667eea 0%, #764ba2 100%));
  color: var(--hero-text, white);
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: white;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #ecf0f1;
  margin-bottom: 1rem;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #ecf0f1;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.hero-image {
  display: flex;
  justify-content: center;
}

.placeholder-avatar {
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: bold;
  color: white;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.12);
}

.features {
  padding: 4rem 0;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  color: var(--primary);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .hero .container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-buttons {
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .placeholder-avatar {
    width: 150px;
    height: 150px;
    font-size: 3rem;
  }
}
</style>