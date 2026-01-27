<script setup lang="ts">
</script>

<template>
  <div class="page">
    <div class="container center" style="min-height: calc(100vh - 140px);">
      <h1>Constantinescu Alexandru-Gabi</h1>
      <p style="font-size: 1.25rem; color: var(--primary); margin-bottom: 2rem;">Game Developer</p>
      <p style="max-width: 600px; margin-bottom: 2rem;">
        Welcome to my portfolio! I am a passionate programmer and game developer, with interests in gaming and Voice Acting.
      </p>
      <router-link to="/it-projects" class="btn">View My IT Projects</router-link>
      <br />
      <router-link to="/va-projects" class="btn">View My Voice Acting Projects</router-link>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 3rem;
  margin-bottom: var(--spacing-sm);
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
}
</style>
