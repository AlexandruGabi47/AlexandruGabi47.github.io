<script setup lang="ts">
import { ref } from 'vue'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  itchUrl?: string
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
}

// Example projects data
// const projects = ref<Project[]>([
//   {
//     id: 1,
//     title: 'Vue TypeScript Portfolio',
//     description: 'A modern portfolio website built with Vue 3, TypeScript, and Vite. Features responsive design and smooth animations.',
//     technologies: ['Vue.js', 'TypeScript', 'Vite', 'CSS3'],
//     githubUrl: 'https://github.com/AlexandruGabi47/portfolio',
//     liveUrl: 'https://alexandrugabi47.github.io'
//   },
//   {
//     id: 2,
//     title: 'Task Management App',
//     description: 'A full-stack task management application with real-time updates, user authentication, and collaborative features.',
//     technologies: ['Vue.js', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
//     githubUrl: 'https://github.com/AlexandruGabi47/task-manager'
//   },
//   {
//     id: 3,
//     title: 'E-commerce Dashboard',
//     description: 'An admin dashboard for e-commerce platforms with analytics, inventory management, and order tracking.',
//     technologies: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
//     githubUrl: 'https://github.com/AlexandruGabi47/ecommerce-dashboard'
//   }
// ])

const projects = ref<Project[]>([
  {
    id: 1,
    title: 'Cyber Survivor',
    description: 'A 2D pixel-art top-down cyberpunk-themed game where players ' +
      'fend off hostile entities to survive as long as possible in a dystopian city. ' +
      'Heavily Work in Progress so it isn\'t more than a prototype, ' +
      'but you can still try out the latest build where I try to push out updates as soon as I have something new.',
    technologies: ['Unity', 'C#', 'Pixel Art'],

    itchUrl: 'https://raventhinkerer.itch.io/cyber-survivor'
  }
])

const itchWidgetScript = document.createElement('script')
itchWidgetScript.src = 'https://itch.io/embed.js'

const featuredProject = ref<Project>(projects.value[0])
</script>

<template>
  <div class="projects">
    <section class="projects-hero">
      <div class="container">
        <h1>My Projects</h1>
        <p class="lead">Here are some of the projects I've been working on</p>
      </div>
    </section>

    <section class="featured-project">
      <div class="container">
        <h2>Featured Project</h2>
        <div class="featured-card card">
          <div class="featured-content">
            <h3>{{ featuredProject.title }}</h3>
            <p>{{ featuredProject.description }}</p>
            <div class="technologies">
              <span 
                v-for="tech in featuredProject.technologies" 
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
            <div class="project-links">
              <a 
                v-if="featuredProject.itchUrl" 
                :href="featuredProject.itchUrl" 
                target="_blank"
                class="btn"
              >
                Itch.io
              </a>
              <a 
                v-if="featuredProject.githubUrl" 
                :href="featuredProject.githubUrl" 
                target="_blank"
                class="btn"
              >
                GitHub
              </a>
              <a 
                v-if="featuredProject.liveUrl" 
                :href="featuredProject.liveUrl" 
                target="_blank"
                class="btn btn-secondary"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div class="featured-image">
            <div class="placeholder-image">
              <span>{{ featuredProject.title.charAt(0) }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="all-projects" hidden="true">
      <div class="container">
        <h2>All Projects</h2>
          <div class="projects-grid">
          <div 
            v-for="project in projects" 
            :key="project.id"
            class="project-card card"
          >
            <div class="project-image">
              <div class="placeholder-image">
                <span>{{ project.title.charAt(0) }}</span>
              </div>
            </div>
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="technologies">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
              <div class="project-links">
                  <a 
                    v-if="project.itchUrl" 
                    :href="project.itchUrl" 
                    target="_blank"
                    class="btn"
                  >
                    Itch.io
                </a>
                <a 
                  v-if="project.githubUrl" 
                  :href="project.githubUrl" 
                  target="_blank"
                  class="btn"
                >
                  GitHub
                </a>
                <a 
                  v-if="project.liveUrl" 
                  :href="project.liveUrl" 
                  target="_blank"
                  class="btn btn-secondary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.projects-hero {
  background: var(--bg-gradient-hero, linear-gradient(135deg, #667eea 0%, #764ba2 100%));
  color: var(--hero-text, white);
  padding: 4rem 0;
  text-align: center;
}

.projects-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
}

.lead {
  font-size: 1.3rem;
  opacity: 0.9;
}

.featured-project {
  padding: 4rem 0;
}

.featured-project h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
}

.featured-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  background: var(--card-bg);
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.featured-content h3 {
  font-size: 2rem;
  color: var(--text);
  margin-bottom: 1rem;
}

.featured-content p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--muted);
  margin-bottom: 2rem;
}

.featured-image {
  display: flex;
  justify-content: center;
}

.featured-image .placeholder-image {
  width: 300px;
  height: 200px;
}

.all-projects {
  padding: 4rem 0;
}

.all-projects h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--card-bg);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.project-image .placeholder-image {
  width: 100%;
  height: 200px;
}

.placeholder-image {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-contrast);
  font-size: 3rem;
  font-weight: bold;
}

.project-content {
  padding: 2rem;
}

.project-content h3 {
  color: var(--text);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.project-content p {
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: rgba(255,255,255,0.06);
  color: var(--text);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-links .btn {
  flex: 1;
  text-align: center;
}

@media (max-width: 768px) {
  .projects-hero h1 {
    font-size: 2.5rem;
  }
  
  .featured-card {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .featured-content h3 {
    font-size: 1.75rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-links {
    flex-direction: column;
  }
}
</style>