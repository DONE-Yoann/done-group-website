<template>
  <!-- Hero Section utilisant le CSS principal -->
  <section class="hero-section">
    <div class="container-custom">
      <div class="hero-content">
        <!-- Badge -->
        <div class="reveal">
          <div class="hero-badge">
            <UIcon :name="heroData?.badge?.icon || 'i-heroicons-bolt'" class="w-4 h-4" />
            {{ heroData?.badge?.text || "Chargement..." }}
          </div>
        </div>

        <!-- Titre principal -->
        <h1 class="hero-title reveal">
          {{ heroData?.title?.main || "Experts en" }} <span style="color: var(--secondary-400);">{{ heroData?.title?.highlight || "automatisation" }}</span><br>
          {{ heroData?.title?.subtitle || "et solutions industrielles" }}
        </h1>

        <!-- Description -->
        <p class="hero-description reveal">
          {{ heroData?.description || "Chargement de la description..." }}
        </p>

        <!-- Actions -->
        <div class="hero-actions reveal">
          <button class="btn btn-primary" @click="scrollToTarget(heroData?.actions?.primary?.target || 'services')">
            <UIcon :name="heroData?.actions?.primary?.icon || 'i-heroicons-rocket-launch'" class="w-5 h-5" />
            {{ heroData?.actions?.primary?.text || "Découvrir nos activités" }}
          </button>

          <button class="btn btn-ghost" @click="scrollToTarget(heroData?.actions?.secondary?.target || 'contact')">
            <UIcon :name="heroData?.actions?.secondary?.icon || 'i-heroicons-phone'" class="w-5 h-5" />
            {{ heroData?.actions?.secondary?.text || "Prendre rendez‑vous" }}
          </button>
        </div>

        <!-- Statistiques -->
        <div class="hero-stats reveal" data-animate-stats>
          <div class="hero-stat" v-for="stat in heroData?.stats || []" :key="stat.label">
            <div 
              class="hero-stat-number" 
              :data-count-to="stat.animated ? parseInt(stat.number) : 0"
              :data-animated="stat.animated"
              :data-suffix="stat.suffix || ''"
            >
              {{ stat.animated ? '0' : stat.number }}
            </div>
            <div class="hero-stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
// Import components

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
    { number: "15+", label: "années d'expertise", animated: true, suffix: "+" },
    { number: "6", label: "domaines d'activité", animated: true }
  ]
})

// Note: queryContent n'est pas disponible dans ce contexte
// Les données par défaut sont utilisées

// Animation synchronisée des compteurs (2 secondes)
const animateCounters = (statsContainer: Element) => {
  const counterElements = statsContainer.querySelectorAll('[data-animated="true"]')
  const animationDuration = 2000 // 2 secondes
  
  counterElements.forEach((element) => {
    const target = parseInt(element.getAttribute('data-count-to') || '0')
    const suffix = element.getAttribute('data-suffix') || ''
    
    if (target > 0) {
      let current = 0
      const startTime = Date.now()
      
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / animationDuration, 1)
        
        // Fonction d'easing pour une animation plus smooth
        const easedProgress = 1 - Math.pow(1 - progress, 3)
        current = Math.floor(easedProgress * target)
        
        element.textContent = current.toLocaleString('fr-FR') + suffix
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          element.textContent = target.toLocaleString('fr-FR') + suffix
        }
      }
      
      animate()
    }
  })
}

onMounted(() => {
  // Initialize reveal animations avec déclenchement des compteurs
  const reveals = document.querySelectorAll('.reveal')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        
        // Si c'est le conteneur des stats, déclencher l'animation des compteurs
        if (entry.target.hasAttribute('data-animate-stats')) {
          // Délai de 400ms pour que l'animation reveal se termine d'abord
          setTimeout(() => {
            animateCounters(entry.target)
          }, 400)
        }
        
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })
  
  reveals.forEach((reveal) => observer.observe(reveal))
})

// Navigation functions
const scrollToTarget = (target: string) => {
  const targetSection = document.getElementById(target)
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

