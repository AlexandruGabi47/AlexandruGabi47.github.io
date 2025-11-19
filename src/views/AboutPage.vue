<script setup lang="ts">
import { ref } from 'vue'

interface Skill {
  name: string
  level: number
}

const skills = ref<Skill[]>([
  { name: 'TypeScript', level: 90 },
  { name: 'Vue.js', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Node.js', level: 85 },
  { name: 'Python', level: 75 },
  { name: 'CSS/SCSS', level: 88 }
])

const bio = ref<string>(`
I'm a passionate full-stack developer with expertise in modern web technologies. 
I enjoy creating efficient, scalable, and user-friendly applications. When I'm not coding, 
you can find me exploring new technologies, contributing to open-source projects, or 
sharing knowledge with the developer community.
`)
</script>

<template>
  <div class="about">
    <section class="about-hero">
      <div class="container">
        <h1>About Me</h1>
        <p class="lead">Get to know more about my journey and expertise</p>
      </div>
    </section>

    <section class="about-content">
      <div class="container">
        <div class="about-grid">
          <div class="about-text">
            <h2>My Story</h2>
            <p>{{ bio }}</p>
            
            <h2>Experience</h2>
            <div class="experience-item card">
              <h3>Full Stack Developer</h3>
              <p class="company">Tech Company • 2022 - Present</p>
              <p>Developing web applications using Vue.js, TypeScript, and Node.js. Leading frontend architecture decisions and mentoring junior developers.</p>
            </div>
            
            <div class="experience-item card">
              <h3>Frontend Developer</h3>
              <p class="company">Startup Inc. • 2020 - 2022</p>
              <p>Built responsive web applications and improved user experience across multiple products.</p>
            </div>
          </div>
          
          <div class="about-skills card">
            <h2>Skills</h2>
            <div class="skills-list">
              <div 
                v-for="skill in skills" 
                :key="skill.name" 
                class="skill-item"
              >
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div 
                    class="skill-progress" 
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>