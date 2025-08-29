<template>
  <div class="logo-carousel-section">
    <div class="container-custom">
      <div class="logo-carousel-wrapper">
        <!-- Header -->
        <div class="carousel-header reveal">
          <span class="eyebrow">Nos Clients</span>
          <p class="carousel-subtitle">
            Ils nous font confiance pour leurs projets industriels
          </p>
        </div>
        
        <!-- Carousel Container -->
        <div class="logo-carousel-container" v-if="logos.length > 0">
          <div 
            class="logo-carousel-track"
            :style="{ animationDuration: `${animationDuration}s` }"
          >
            <!-- First set of logos -->
            <div 
              v-for="logo in logos" 
              :key="`set1-${logo.name}`"
              class="logo-item"
            >
              <img 
                :src="logo.url" 
                :alt="`Logo ${logo.name}`"
                class="logo-image"
                @error="handleImageError"
              />
            </div>
            <!-- Duplicate set for seamless loop -->
            <div 
              v-for="logo in logos" 
              :key="`set2-${logo.name}`"
              class="logo-item"
            >
              <img 
                :src="logo.url" 
                :alt="`Logo ${logo.name}`"
                class="logo-image"
                @error="handleImageError"
              />
            </div>
          </div>
        </div>
        
        <!-- Placeholder when no logos -->
        <div v-else class="no-logos-placeholder reveal">
          <div class="placeholder-content">
            <Icon name="heroicons:building-office-2" class="placeholder-icon" />
            <p>Ajoutez vos logos clients dans <code>/public/logos/</code></p>
          </div>
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
const animationDuration = computed(() => Math.max(20, logos.value.length * 2))

// Supported image formats
const supportedFormats = ['png', 'jpg', 'jpeg', 'svg', 'webp']

// Load logos automatically from public/logos directory
const loadLogos = async () => {
  try {
    // Use our API route to get logos automatically
    const data = await $fetch<Logo[]>('/api/logos')
    logos.value = data || []
  } catch (error) {
    console.warn('Could not load logos:', error)
    logos.value = []
  }
}

// Handle image loading errors
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  console.warn(`Failed to load logo: ${img.src}`)
  // Hide broken images
  img.style.display = 'none'
}

// Load logos on mount
onMounted(() => {
  loadLogos()
})
</script>

<style scoped>
.logo-carousel-section {
  padding: 2rem 0;
  margin-top: 0;
  background: var(--color-background-secondary);
  border-top: 1px solid var(--color-border);
  position: relative;
  overflow: hidden;
  width: 100%;
  display: block;
}

.logo-carousel-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(249, 115, 22, 0.03) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

.logo-carousel-wrapper {
  position: relative;
  z-index: 1;
  text-align: center;
}

/* Header */
.carousel-header {
  margin-bottom: 2rem;
}

/* Utilise la classe .eyebrow globale définie dans main.css */

.carousel-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

/* Carousel Container */
.logo-carousel-container {
  position: relative;
  overflow: hidden;
  mask: linear-gradient(
    90deg,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  -webkit-mask: linear-gradient(
    90deg,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}

.logo-carousel-track {
  display: flex;
  align-items: center;
  gap: 2rem;
  animation: scroll-horizontal linear infinite;
  width: fit-content;
}

.logo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  height: 60px;
}

.logo-image {
  height: 50px;
  width: auto;
  max-width: 140px;
  object-fit: contain;
  filter: none;
  opacity: 0.8;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 6px;
}

.logo-image:hover {
  opacity: 1;
  transform: scale(1.3);
}

/* Dark mode adjustments - conserve les couleurs originales */
.dark .logo-image {
  opacity: 0.8;
}

.dark .logo-image:hover {
  opacity: 1;
}

/* Animation */
@keyframes scroll-horizontal {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Pause animation on hover */
.logo-carousel-container:hover .logo-carousel-track {
  animation-play-state: paused;
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

/* Responsive */
@media (max-width: 768px) {
  .logo-carousel-section {
    padding: 1.5rem 0;
  }
  
  .carousel-header {
    margin-bottom: 1.5rem;
  }
  
  .logo-carousel-track {
    gap: 1.5rem;
  }
  
  .logo-item {
    height: 50px;
    padding: 0.5rem;
  }
  
  .logo-image {
    height: 40px;
    max-width: 120px;
  }
}

@media (max-width: 480px) {
  .logo-carousel-section {
    padding: 1rem 0;
  }
  
  .logo-carousel-track {
    gap: 1rem;
  }
  
  .logo-image {
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