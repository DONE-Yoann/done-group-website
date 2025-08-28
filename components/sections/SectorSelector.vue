<template>
  <section class="section sector-selector">
    <div class="container-custom">
      <div class="selector-header reveal">
        <h2>Nos domaines d'expertise</h2>
        <p class="lead">
          Découvrez nos solutions spécialisées pour chaque secteur industriel
        </p>
      </div>
      
      <div class="sectors-grid">
        <article
          v-for="sector in sectorsData"
          :key="sector.id"
          class="sector-card reveal"
          :class="`sector-${sector.id}`"
          @click="goToSector(sector.id)"
        >
          <div class="sector-icon">
            <UIcon
              :name="getSectorIcon(sector.id)"
              class="sector-icon-svg"
            />
          </div>
          <div class="sector-content">
            <h3 class="sector-title">{{ sector.title }}</h3>
            <p class="sector-description">{{ sector.description.substring(0, 120) }}...</p>
            <div class="sector-cta">
              <span>Découvrir</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSectorNavigation } from '~/composables/useSectorNavigation'

// Import explicite du composable
const { sectorsData, goToSector } = useSectorNavigation()

// Icônes pour chaque secteur
const getSectorIcon = (sectorId: string): string => {
  const icons = {
    automation: 'i-heroicons-cpu-chip',
    informatique: 'i-heroicons-cloud',
    demolition: 'i-heroicons-wrench-screwdriver',
    construction: 'i-heroicons-building-office',
    mecanique: 'i-heroicons-cog-6-tooth',
    fabrication: 'i-heroicons-cube'
  }
  return icons[sectorId as keyof typeof icons] || 'i-heroicons-squares-2x2'
}

// Effet de lueur qui suit la souris
onMounted(() => {
  const sectorCards = document.querySelectorAll('.sector-card')
  
  sectorCards.forEach((card) => {
    const cardElement = card as HTMLElement
    
    cardElement.addEventListener('mousemove', (e) => {
      const rect = cardElement.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      
      cardElement.style.setProperty('--mouse-x', `${x}%`)
      cardElement.style.setProperty('--mouse-y', `${y}%`)
    })
    
    cardElement.addEventListener('mouseleave', () => {
      cardElement.style.setProperty('--mouse-x', '50%')
      cardElement.style.setProperty('--mouse-y', '50%')
    })
  })
})
</script>

