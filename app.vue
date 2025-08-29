<template>
  <div class="min-h-screen pt-[70px]">
    <!-- Header -->
    <AppHeader />
    
    <!-- Main Content -->
    <main id="accueil">
      <!-- Vue Secteur -->
      <SectorContent v-if="!isHomeView" />
      
      <!-- Vue Accueil -->
      <div v-else>
        <!-- Hero Section -->
        <HeroSection />
        
        <!-- Sectors Selection -->
        <SectorSelector />

        <!-- About Section -->
        <section id="about" class="section" v-if="aboutData">
          <div class="container-custom">
            <div class="about-grid">
              <div class="reveal">
                <span class="eyebrow">{{ aboutData?.eyebrow }}</span>
                <h2>{{ aboutData?.title }}</h2>
                <p class="lead">
                  {{ aboutData?.description }}
                </p>
                <ul class="about-features">
                  <li class="reveal" v-for="feature in aboutData?.features || []" :key="feature">
                    <span class="feature-check">✓</span> {{ feature }}
                  </li>
                </ul>
              </div>
              <div class="about-stat reveal">
                <div class="stat-card">
                  <div class="stat-number">{{ aboutData?.stats?.number }}</div>
                  <p>{{ aboutData?.stats?.label }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section id="contact" class="section contact-section" v-if="contactData">
          <div class="container-custom">
            <div class="contact-content reveal">
              <h2>{{ contactData?.title }}</h2>
              <p class="lead">
                {{ contactData?.description }}
              </p>
              <div class="contact-actions">
                <a 
                  v-for="action in contactData?.actions || []" 
                  :key="action.text"
                  :href="action.href" 
                  :class="`btn ${action.type}`"
                >
                  {{ action.text }}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer" v-if="footerData">
      <div class="container-custom">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="footer-logo">
              <div class="logo-icon"></div>
              <span class="brand-name">{{ footerData?.brand?.name }}</span>
            </div>
            <p>{{ footerData?.brand?.description }}</p>
          </div>
          
          <div class="footer-links">
            <div class="footer-col">
              <h4>{{ footerData?.links?.services?.title }}</h4>
              <ul>
                <li v-for="item in footerData?.links?.services?.items || []" :key="item">{{ item }}</li>
              </ul>
            </div>
            
            <div class="footer-col">
              <h4>{{ footerData?.links?.sectors?.title }}</h4>
              <ul>
                <li v-for="item in footerData?.links?.sectors?.items || []" :key="item">{{ item }}</li>
              </ul>
            </div>
            
            <div class="footer-col">
              <h4>{{ footerData?.contact?.title }}</h4>
              <div class="contact-info">
                <p>{{ footerData?.contact?.email }}</p>
                <p>{{ footerData?.contact?.phone }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>{{ footerData?.copyright }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Imports explicites des composants
import AppHeader from '~/components/layout/AppHeader.vue'
import HeroSection from '~/components/sections/HeroSection.vue'
import SectorContent from '~/components/sections/SectorContent.vue'
import SectorSelector from '~/components/sections/SectorSelector.vue'
import { useSectorNavigation } from '~/composables/useSectorNavigation'

// Navigation state
const { isHomeView, currentSector } = useSectorNavigation()

// Load content data with new Nuxt Studio structure
const aboutData = ref({
  eyebrow: "À propos",
  title: "Qui sommes‑nous ?", 
  description: "Équipe pluridisciplinaire orientée résultats, en veille permanente sur les technologies d'automatisation, d'IT industrielle et de fabrication. Objectif : sécuriser vos délais, coûts et performances.",
  features: ["Expertise technique reconnue", "Accompagnement sur mesure", "Innovation continue"],
  stats: { number: "128+", label: "Clients accompagnés" }
})

const contactData = ref({
  title: "Un projet industriel ?",
  description: "Discutons de vos besoins et définissons un plan d'action pragmatique.",
  actions: [
    { type: "primary", text: "contact@done.group", href: "mailto:contact@done.group" },
    { type: "ghost", text: "+33 7 45 28 75 09", href: "tel:+33745287509" }
  ]
})

const footerData = ref({
  brand: { name: "DONE Group", description: "Experts en automatisation et solutions industrielles" },
  links: {
    services: { title: "Services", items: ["Automatisation", "IT Industrielle", "Mécanique", "Construction"] },
    sectors: { title: "Secteurs", items: ["Automobile", "Aérospatial", "Pharmaceutique", "Énergie"] }
  },
  contact: { title: "Contact", email: "contact@done.group", phone: "+33 7 45 28 75 09" },
  copyright: "© 2024 DONE Group - Tous droits réservés"
})

// Content chargé depuis les données par défaut (fallback data)
// Nuxt Content sera configuré plus tard si nécessaire

// Initialize reveal animations on mount
onMounted(() => {
  const initRevealAnimations = () => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    
    reveals.forEach((reveal) => observer.observe(reveal))
  }

  // Init on mount
  initRevealAnimations()

  // Re-init when switching views
  watch(isHomeView, () => {
    nextTick(() => {
      initRevealAnimations()
    })
  })
})

// SEO dynamique - currentSector déjà importé ci-dessus

watchEffect(() => {
  if (currentSector.value) {
    useHead({
      title: `${currentSector.value.title} - DONE Group`,
      meta: [
        { 
          name: 'description', 
          content: `${currentSector.value.subtitle} - ${currentSector.value.description.substring(0, 150)}...` 
        }
      ]
    })
  } else {
    useHead({
      title: 'DONE Group — Experts en automatisation et solutions industrielles',
      meta: [
        { 
          name: 'description', 
          content: 'DONE Group : spécialiste en automatisation, informatique industrielle, mécanique de précision, construction et rénovation. Solutions sur mesure pour l\'industrie.' 
        }
      ]
    })
  }
})
</script>
