<template>
  <div class="logo-carousel-nuxtui-section">
    <div class="container-custom">
      <div class="carousel-wrapper">
        <!-- Header -->
        <div class="carousel-header reveal">
          <span class="eyebrow">Nos Clients - Version NuxtUI</span>
          <p class="carousel-subtitle">
            Comparaison avec le composant officiel NuxtUI Carousel
          </p>
        </div>
        
        <!-- NuxtUI Carousel -->
        <div v-if="logos.length > 0" class="nuxtui-carousel-container">
          <UCarousel
            v-slot="{ item }"
            :items="extendedLogos"
            :ui="{
              item: 'basis-1/4 md:basis-1/6 lg:basis-1/8 pl-4',
              container: 'flex items-center',
              indicators: {
                wrapper: 'hidden'
              }
            }"
            class="rounded-lg overflow-hidden nuxtui-carousel-wrapper"
            :arrows="false"
            :indicators="false"
            :autoplay="{ delay: 0, stopOnInteraction: false }"
            :auto-scroll="{ speed: 0.2, stopOnInteraction: true, startDelay: 0, playOnInit: true }"
            :loop="true"
            :drag-free="false"
            :duration="0"
          >
            <div class="nuxtui-logo-item">
              <img 
                :src="item.url" 
                :alt="`Logo ${item.name}`"
                class="nuxtui-logo-image"
                @error="handleImageError"
              />
            </div>
          </UCarousel>
        </div>
        
        <!-- Placeholder when no logos -->
        <div v-else class="no-logos-placeholder reveal">
          <div class="placeholder-content">
            <UIcon name="i-heroicons-building-office-2" class="placeholder-icon" />
            <p>Ajoutez vos logos clients dans <code>/public/logos/</code></p>
          </div>
        </div>
        
        <!-- Comparison Info -->
        <div class="comparison-info reveal">
          <UCard class="mt-4">
            <template #header>
              <h4 class="font-semibold text-sm">📊 Comparaison NuxtUI vs Custom</h4>
            </template>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <h5 class="font-medium text-primary-500 mb-2">✅ NuxtUI Modifié</h5>
                <ul class="space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• Composant officiel Embla</li>
                  <li>• Défilement continu (auto-scroll)</li>
                  <li>• Effet fade sur les bords</li>
                  <li>• Support tactile natif</li>
                  <li>• Pause au hover</li>
                </ul>
              </div>
              <div>
                <h5 class="font-medium text-secondary-500 mb-2">🎯 Custom Pure CSS</h5>
                <ul class="space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• Contrôle total du style</li>
                  <li>• Animation CSS native</li>
                  <li>• Plus léger (pas d'Embla)</li>
                  <li>• Intégration parfaite thème</li>
                  <li>• Performance optimisée</li>
                </ul>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Logo {
  name: string
  url: string
}

// Reactive data
const logos = ref<Logo[]>([])

// Extended logos for NuxtUI (needs more items for continuous scroll)
const extendedLogos = computed(() => {
  if (logos.value.length === 0) return []
  
  // Duplicate logos multiple times for seamless continuous scroll
  const extended = []
  const minItems = 20 // More items for continuous scroll
  const currentLogos = logos.value
  
  for (let i = 0; i < Math.max(minItems, currentLogos.length * 4); i++) {
    extended.push(currentLogos[i % currentLogos.length])
  }
  
  return extended
})

// Load logos automatically from public/logos directory
const loadLogos = async () => {
  try {
    // Use our API route to get logos automatically
    const data = await $fetch<Logo[]>('/api/logos')
    logos.value = data || []
  } catch (error) {
    console.warn('Could not load logos for NuxtUI carousel:', error)
    logos.value = []
  }
}

// Handle image loading errors
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  console.warn(`Failed to load logo in NuxtUI carousel: ${img.src}`)
  // Hide broken images
  img.style.display = 'none'
}

// Load logos on mount
onMounted(() => {
  loadLogos()
})
</script>

<style scoped>
.logo-carousel-nuxtui-section {
  padding: 2rem 0;
  background: var(--color-background-tertiary);
  border-top: 1px solid var(--color-border);
  position: relative;
  overflow: hidden;
}

.logo-carousel-nuxtui-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 50%, rgba(37, 99, 235, 0.04) 0%, transparent 50%),
    radial-gradient(circle at 70% 50%, rgba(124, 58, 237, 0.04) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

.carousel-wrapper {
  position: relative;
  z-index: 1;
  text-align: center;
}

/* Header */
.carousel-header {
  margin-bottom: 2rem;
}

.carousel-subtitle {
  font-size: 1rem;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

/* NuxtUI Carousel Container */
.nuxtui-carousel-container {
  margin-bottom: 2rem;
  position: relative;
}

/* Fade effect on edges */
.nuxtui-carousel-wrapper {
  mask: linear-gradient(
    90deg,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  ) !important;
  -webkit-mask: linear-gradient(
    90deg,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  ) !important;
}

/* Remove default NuxtUI transitions for smooth scroll */
.nuxtui-carousel-wrapper :deep(.embla__slide) {
  transition: none !important;
}

.nuxtui-carousel-wrapper :deep(.embla__container) {
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y pinch-zoom;
}

/* Pause animation on hover */
.nuxtui-carousel-container:hover .nuxtui-carousel-wrapper :deep(.embla__container) {
  animation-play-state: paused;
}

.nuxtui-logo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 80px;
  cursor: pointer;
}

.nuxtui-logo-image {
  height: 50px;
  width: auto;
  max-width: 140px;
  object-fit: contain;
  opacity: 0.7;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 6px;
}

.nuxtui-logo-item:hover .nuxtui-logo-image {
  opacity: 1;
  transform: scale(1.4);
}

/* Placeholder */
.no-logos-placeholder {
  padding: 3rem;
  color: var(--color-text-tertiary);
}

.placeholder-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.placeholder-icon {
  width: 3rem;
  height: 3rem;
  color: var(--color-text-tertiary);
}

.placeholder-content code {
  background: var(--color-background-secondary);
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  color: var(--primary-500);
}

/* Comparison Info */
.comparison-info {
  margin-top: 2rem;
}

/* Responsive */
@media (max-width: 768px) {
  .logo-carousel-nuxtui-section {
    padding: 1.5rem 0;
  }
  
  .carousel-header {
    margin-bottom: 1.5rem;
  }
  
  .nuxtui-logo-item {
    height: 60px;
    padding: 0.75rem;
  }
  
  .nuxtui-logo-image {
    height: 40px;
    max-width: 120px;
  }
}

@media (max-width: 480px) {
  .logo-carousel-nuxtui-section {
    padding: 1rem 0;
  }
  
  .nuxtui-logo-image {
    height: 35px;
    max-width: 100px;
  }
}

/* Reveal animation */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>