<template>
  <!-- Hero Section utilisant le CSS principal -->
  <section class="hero-modern">
    <div class="hero-background"></div>
    <div class="hero-container">
      <div class="hero-content">
        <!-- Badge -->
        <div class="hero-badge-wrapper reveal">
          <div class="hero-badge">
            <UIcon :name="heroData?.badge?.icon || 'i-heroicons-bolt'" class="w-4 h-4" />
            {{ heroData?.badge?.text || "Chargement..." }}
          </div>
        </div>

        <!-- Titre principal -->
        <h1 class="hero-title reveal">
          {{ heroData?.title?.main || "Experts en" }} <span class="text-gradient">{{ heroData?.title?.highlight || "automatisation" }}</span><br>
          {{ heroData?.title?.subtitle || "et solutions industrielles" }}
        </h1>

        <!-- Description -->
        <p class="hero-description reveal">
          {{ heroData?.description || "Chargement de la description..." }}
        </p>

        <!-- Actions -->
        <div class="hero-actions reveal">
          <button class="btn primary hero-btn-primary" @click="scrollToTarget(heroData?.actions?.primary?.target || 'services')">
            <UIcon :name="heroData?.actions?.primary?.icon || 'i-heroicons-rocket-launch'" class="w-5 h-5" />
            {{ heroData?.actions?.primary?.text || "Découvrir nos activités" }}
          </button>

          <button class="btn ghost hero-btn-secondary" @click="scrollToTarget(heroData?.actions?.secondary?.target || 'contact')">
            <UIcon :name="heroData?.actions?.secondary?.icon || 'i-heroicons-phone'" class="w-5 h-5" />
            {{ heroData?.actions?.secondary?.text || "Prendre rendez‑vous" }}
          </button>
        </div>

        <!-- Statistiques -->
        <div class="hero-stats reveal">
          <div class="stat-card" v-for="stat in heroData?.stats || []" :key="stat.label">
            <div class="stat-content">
              <div 
                class="stat-number" 
                :ref="stat.animated ? 'counterElement' : null"
                :data-count-to="stat.animated ? parseInt(stat.number) : null"
              >
                {{ stat.animated ? '0' : stat.number }}
              </div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
// Load hero content data with fallback
const heroData = ref({
  badge: { icon: "i-heroicons-bolt", text: "Ingénierie & intégration industrielle" },
  title: { main: "Experts en", highlight: "automatisation", subtitle: "et solutions industrielles" },
  description: "Nous concevons, intégrons et accompagnons vos projets d'automatisation, d'informatique industrielle et de mécanique de précision pour une industrie plus performante.",
  actions: {
    primary: { text: "Découvrir nos activités", icon: "i-heroicons-rocket-launch", target: "services" },
    secondary: { text: "Prendre rendez‑vous", icon: "i-heroicons-phone", target: "contact" }
  },
  stats: [
    { number: "128", label: "clients accompagnés", animated: true },
    { number: "15+", label: "années d'expertise" },
    { number: "6", label: "domaines d'activité" }
  ]
})

// Try to load content from markdown
onMounted(async () => {
  try {
    const { data: hero } = await queryContent('sections/hero').findOne()
    if (hero) {
      heroData.value = hero
    }
  } catch (error) {
    console.error('Error loading hero content:', error)
    // Keep fallback data
  }
})

// Counter animation
const counterElement = ref<HTMLElement>()

onMounted(() => {
  // Handle animated counters
  if (heroData?.stats) {
    heroData.stats.forEach((stat, index) => {
      if (stat.animated) {
        const element = document.querySelector(`[data-count-to="${parseInt(stat.number)}"]`)
        if (element) {
          animateCounter(element as HTMLElement, parseInt(stat.number))
        }
      }
    })
  }
  
  // Initialize reveal animations
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
})

const animateCounter = (element: HTMLElement, target: number) => {
  let current = 0
  const increment = target / 100
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    element.textContent = Math.floor(current).toLocaleString('fr-FR')
  }, 20)
}

// Navigation functions
const scrollToTarget = (target: string) => {
  const targetSection = document.getElementById(target)
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

