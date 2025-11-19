<script setup lang="ts">
import { ref, reactive } from 'vue'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const form = reactive<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref<boolean>(false)
const isSubmitted = ref<boolean>(false)

const handleSubmit = async (): Promise<void> => {
  isSubmitting.value = true
  
  // Simulate form submission
  setTimeout(() => {
    isSubmitting.value = false
    isSubmitted.value = true
    
    // Reset form after 3 seconds
    setTimeout(() => {
      isSubmitted.value = false
      Object.keys(form).forEach(key => {
        (form as any)[key] = ''
      })
    }, 3000)
  }, 1000)
}

const socialLinks = ref([
  {
    name: 'GitHub',
    url: 'https://github.com/AlexandruGabi47',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/alexandrugabi47',
    icon: 'linkedin'
  },
  {
    name: 'Email',
    url: 'mailto:alexandru.gabi47@example.com',
    icon: 'email'
  }
])
</script>

<template>
  <div class="contact">
    <section class="contact-hero">
      <div class="container">
        <h1>Get In Touch</h1>
        <p class="lead">Let's work together on your next project</p>
      </div>
    </section>

    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Let's Connect</h2>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question, want to work together, or just want to say hello, 
              I'd love to hear from you!
            </p>

            <div class="contact-details">
              <div class="contact-item card">
                <h3>📧 Email</h3>
                <p>alexandru.gabi47@example.com</p>
              </div>
              
              <div class="contact-item card">
                <h3>📍 Location</h3>
                <p>Bucharest, Romania</p>
              </div>
              
              <div class="contact-item card">
                <h3>⏰ Response Time</h3>
                <p>Usually within 24 hours</p>
              </div>
            </div>

            <div class="social-links">
              <h3>Follow Me</h3>
              <div class="social-buttons">
                <a 
                  v-for="link in socialLinks" 
                  :key="link.name"
                  :href="link.url" 
                  target="_blank"
                  class="social-button"
                >
                  {{ link.name }}
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form-container card">
            <form @submit.prevent="handleSubmit" class="contact-form">
              <h2>Send Message</h2>
              
              <div v-if="isSubmitted" class="success-message">
                <p>✅ Thank you! Your message has been sent successfully.</p>
              </div>

              <div class="form-group">
                <label for="name">Name *</label>
                <input 
                  type="text" 
                  id="name"
                  v-model="form.name"
                  required
                  :disabled="isSubmitting"
                />
              </div>

              <div class="form-group">
                <label for="email">Email *</label>
                <input 
                  type="email" 
                  id="email"
                  v-model="form.email"
                  required
                  :disabled="isSubmitting"
                />
              </div>

              <div class="form-group">
                <label for="subject">Subject *</label>
                <input 
                  type="text" 
                  id="subject"
                  v-model="form.subject"
                  required
                  :disabled="isSubmitting"
                />
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea 
                  id="message"
                  v-model="form.message"
                  rows="5"
                  required
                  :disabled="isSubmitting"
                ></textarea>
              </div>

              <button 
                type="submit" 
                class="btn submit-btn"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
