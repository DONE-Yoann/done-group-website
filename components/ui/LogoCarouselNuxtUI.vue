<template>
  <div class="logo-carousel-nuxtui-section">
    <div class="container-custom">
      <!-- NuxtUI Carousel - Always render but with different content -->
      <div class="nuxtui-carousel-container hero-style"
           :class="{ 'carousel-paused': isCarouselPaused }"
           @mouseenter="pauseCarousel" @mouseleave="resumeCarousel">
        
        <!-- @ts-ignore -->
        <UCarousel
          ref="carouselRef"
          v-slot="{ item }"
          :items="carouselItems"
          :ui="({
            item: logos.length === 0 ? 'w-full flex justify-center' : 'basis-1/4 md:basis-1/6 lg:basis-1/8 pl-4',
            container: 'flex items-center',
            indicators: {
              wrapper: 'hidden'
            }
          } as any)"
          class="rounded-xl overflow-hidden nuxtui-carousel-wrapper hero-carousel"
          :arrows="false"
          :indicators="false"
          :autoplay="false"
          :auto-scroll="logos.length > 0 ? { speed: isCarouselPaused ? 0 : 0.6, stopOnInteraction: false, startDelay: 0, playOnInit: true } : false"
          :loop="logos.length > 0"
          :drag-free="false"
          :duration="0"
        >
          <!-- Logo item -->
          <div v-if="item && item.type === 'logo'" class="nuxtui-logo-item">
            <img 
              :src="item.url" 
              :alt="`Logo ${item.name || 'Client'}`"
              class="nuxtui-logo-image"
              @error="handleImageError"
            />
          </div>
          
          <!-- Message item when no logos -->
          <div v-else-if="item && item.type === 'message'" class="carousel-message-item">
            <div class="message-content">
              <UIcon name="i-heroicons-building-office-2" class="message-icon" />
              <div class="message-text">
                <h3>Carousel de logos clients</h3>
                <p>Ajoutez vos logos clients dans <code>/public/logos/</code> pour les afficher ici</p>
                <div class="message-hint">
                  <UIcon name="i-heroicons-information-circle" class="w-4 h-4" />
                  <span>Formats supportés : SVG, PNG, JPG, WebP</span>
                </div>
              </div>
            </div>
          </div>
        </UCarousel>
        
        <!-- Info banner when few logos -->
        <div v-if="logos.length > 0 && logos.length < 5" class="few-logos-banner">
          <UIcon name="i-heroicons-plus-circle" class="banner-icon" />
          <span>{{ logos.length }} logo{{ logos.length > 1 ? 's' : '' }} trouvé{{ logos.length > 1 ? 's' : '' }}. 
            Ajoutez plus de logos dans <code>/public/logos/</code> pour un meilleur effet</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Logo {
  name: string
  url: string
  [key: string]: any // Allow additional properties for carousel compatibility
}

// Reactive data
const logos = ref<Logo[]>([])
const isCarouselPaused = ref(false)
const carouselRef = ref()

// Carousel items - either logos or message
const carouselItems = computed(() => {
  if (logos.value.length === 0) {
    // Return a single message item
    return [{ type: 'message', id: 'no-logos-message' }]
  }
  
  // Duplicate logos multiple times for seamless continuous scroll
  const extended: any[] = []
  const minItems = 20 // More items for continuous scroll
  const currentLogos = logos.value.filter((logo): logo is Logo => logo != null && logo.name && logo.url) // Filter out undefined/invalid logos
  
  if (currentLogos.length === 0) {
    return [{ type: 'message', id: 'no-logos-message' }]
  }
  
  for (let i = 0; i < Math.max(minItems, currentLogos.length * 4); i++) {
    const logo = currentLogos[i % currentLogos.length]
    if (logo) {
      extended.push({ ...logo, type: 'logo' })
    }
  }
  
  return extended
})

// Load logos automatically from public/logos directory
const loadLogos = async () => {
  try {
    const data = await $fetch<Logo[]>('/api/logos')
    logos.value = data || []
  } catch (error) {
    logos.value = []
  }
}

// Handle image loading errors
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  // Hide broken images
  img.style.display = 'none'
}

// Carousel control functions - change speed via reactive config
const pauseCarousel = () => {
  isCarouselPaused.value = true
}

const resumeCarousel = () => {
  isCarouselPaused.value = false
}

// Load logos on mount
onMounted(() => {
  loadLogos()
})
</script>

<style scoped>
.logo-carousel-nuxtui-section {
  padding: 2rem 0;
  background: var(--color-background);
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


/* NuxtUI Carousel Container - Hero Style */
.nuxtui-carousel-container.hero-style {
  margin-bottom: 2rem;
  position: relative;
  background: var(--card-background);
  border: 1px solid var(--card-border);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: var(--shadow-lg);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.nuxtui-carousel-container.hero-style::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.04) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(249, 115, 22, 0.03) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

.nuxtui-carousel-container.hero-style:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary-200);
}

.nuxtui-carousel-container.hero-style > * {
  position: relative;
  z-index: 1;
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

/* Pause carousel on hover - CSS approach */
.nuxtui-carousel-container.carousel-paused .nuxtui-carousel-wrapper :deep(.embla__container) {
  animation-play-state: paused !important;
}

.nuxtui-carousel-container.carousel-paused .nuxtui-carousel-wrapper :deep(.embla__slide) {
  animation-play-state: paused !important;
}

.nuxtui-logo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 80px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
}

.nuxtui-logo-image {
  height: 50px;
  width: auto;
  max-width: 140px;
  object-fit: contain;
  opacity: 0.7;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 6px;
}

/* Hover effects - simplified without adjacent spacing for now */
.nuxtui-logo-item:hover {
  z-index: 10;
}

.nuxtui-logo-item:hover .nuxtui-logo-image {
  opacity: 1;
  transform: scale(1.6);
  padding: 0 1rem; /* Add padding instead of margin to prevent layout shifts */
}

/* Carousel integrated message */
.carousel-message-item {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  padding: 2rem;
}

.carousel-message-item .message-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  max-width: 500px;
}

.carousel-message-item .message-icon {
  width: 3.5rem;
  height: 3.5rem;
  color: var(--primary-500);
  opacity: 0.8;
}

.carousel-message-item .message-text h3 {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 0.75rem;
  background: linear-gradient(135deg, var(--color-text-primary) 0%, var(--primary-500) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.carousel-message-item .message-text p {
  color: var(--color-text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.carousel-message-item .message-hint {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: var(--color-background-secondary);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  color: var(--color-text-tertiary);
  font-size: 0.85rem;
}

.carousel-message-item code {
  background: linear-gradient(135deg, var(--primary-50), var(--secondary-50));
  color: var(--primary-700);
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  font-family: 'SF Mono', Monaco, monospace;
}

/* No logos message - Hero Section style */
.logo-carousel-nuxtui-section .no-logos-message {
  padding: 4rem 0 !important;
  text-align: center !important;
  position: relative !important;
  overflow: hidden !important;
  background: var(--color-background) !important;
}

.logo-carousel-nuxtui-section .no-logos-message::before {
  content: '' !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  background: 
    radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 70% 50%, rgba(249, 115, 22, 0.06) 0%, transparent 50%) !important;
  pointer-events: none !important;
  z-index: 0 !important;
}

.logo-carousel-nuxtui-section .message-content {
  position: relative !important;
  z-index: 2 !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 1.5rem !important;
  max-width: 600px !important;
  margin: 0 auto !important;
  padding: 2rem !important;
  background: var(--card-background) !important;
  border: 1px solid var(--card-border) !important;
  border-radius: 1.5rem !important;
  box-shadow: var(--shadow-lg) !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.message-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
  opacity: 0;
  border-radius: 1.5rem;
  z-index: -1;
  transition: opacity 0.3s ease;
}

.message-content:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.message-content:hover::before {
  opacity: 0.03;
}

.message-icon {
  width: 4rem;
  height: 4rem;
  color: var(--primary-500);
  opacity: 0.9;
  filter: drop-shadow(0 4px 8px rgba(6, 182, 212, 0.2));
}

.logo-carousel-nuxtui-section .message-text h3 {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  font-size: clamp(1.5rem, 4vw, 2rem) !important;
  font-weight: 700 !important;
  color: var(--color-text-primary) !important;
  margin-bottom: 0.75rem !important;
  letter-spacing: -0.025em !important;
  background: linear-gradient(135deg, var(--color-text-primary) 0%, var(--primary-500) 100%) !important;
  background-clip: text !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}

.logo-carousel-nuxtui-section .message-text p {
  color: var(--color-text-secondary) !important;
  font-size: 1.125rem !important;
  line-height: 1.7 !important;
  margin-bottom: 1.5rem !important;
  max-width: 480px !important;
}

.message-hint {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.25rem;
  background: var(--color-background-secondary);
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  color: var(--color-text-tertiary);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.message-hint:hover {
  background: var(--color-hover);
  border-color: var(--primary-200);
}

.message-text code {
  background: linear-gradient(135deg, var(--primary-50), var(--secondary-50));
  color: var(--primary-700);
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
  border: 1px solid var(--primary-200);
}

/* Few logos banner - Hero Section style */
.logo-carousel-nuxtui-section .few-logos-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  margin: 1.5rem auto;
  max-width: 600px;
  background: var(--card-background);
  border: 1px solid var(--primary-200);
  border-radius: 1rem;
  color: var(--primary-700);
  font-size: 0.875rem;
  font-weight: 500;
  box-shadow: 
    var(--shadow-sm),
    0 0 0 1px rgba(6, 182, 212, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.few-logos-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.08), transparent);
  transition: left 0.6s ease;
}

.few-logos-banner:hover {
  transform: translateY(-2px);
  box-shadow: 
    var(--shadow-md),
    0 0 0 1px rgba(6, 182, 212, 0.1);
  border-color: var(--primary-300);
}

.few-logos-banner:hover::before {
  left: 100%;
}

.banner-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--primary-500);
  flex-shrink: 0;
  filter: drop-shadow(0 2px 4px rgba(6, 182, 212, 0.15));
}

.few-logos-banner code {
  background: linear-gradient(135deg, var(--primary-50), var(--secondary-50));
  color: var(--primary-700);
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.8rem;
  font-weight: 600;
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
  border: 1px solid var(--primary-200);
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

</style>