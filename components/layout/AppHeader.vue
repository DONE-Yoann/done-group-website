<template>
  <header class="header-ultra-modern">
    <div class="header-container">
      <div class="header-content">
        <!-- Brand/Logo ULTRA STYLÉ -->
        <div class="brand-section">
          <div 
            class="brand-wrapper"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
          >
            <button @click="goToHome" class="brand-logo">
              <div class="logo-icon">
                <div class="logo-diamond"></div>
                <div class="logo-pulse"></div>
              </div>
              <div class="brand-text">
                <span class="brand-name">DONE</span>
                <span class="brand-subtitle">Group</span>
              </div>
              <UIcon name="i-heroicons-chevron-down" 
                     :class="['dropdown-arrow', { 'rotated': showDropdown }]" />
            </button>
            
            <!-- Dropdown Menu SEXY -->
            <div v-show="showDropdown" class="dropdown-menu"
                 @mouseenter="handleMouseEnter"
                 @mouseleave="handleMouseLeave">
              <div class="dropdown-content">
                <a v-for="link in navigationLinks" :key="link.label"
                   :href="link.to" 
                   class="dropdown-item"
                   @click="handleNavClick(link, $event)">
                  <UIcon :name="link.icon" class="dropdown-icon" />
                  <span>{{ link.label }}</span>
                </a>
                <div class="dropdown-separator"></div>
                <a href="#contact" class="dropdown-item contact-item">
                  <UIcon name="i-heroicons-phone" class="dropdown-icon" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Breadcrumb STYLÉ -->
          <nav v-if="!isHomeView" class="breadcrumb-nav">
            <button @click="goToActivities" class="breadcrumb-home">
              <UIcon name="i-heroicons-home" class="w-4 h-4" />
            </button>
            <UIcon name="i-heroicons-chevron-right" class="breadcrumb-sep" />
            <span class="breadcrumb-current" :style="{ color: currentSector?.color }">
              {{ currentSector?.title }}
            </span>
          </nav>
        </div>

        <!-- Actions de droite -->
        <div class="header-actions">
          <!-- Theme Toggle -->
          <ThemeToggle />
          
          <!-- Contact CTA -->
          <a href="mailto:contact@done.group" class="contact-cta">
            <UIcon name="i-heroicons-envelope" class="w-4 h-4" />
            <span class="hidden sm:inline">Contact</span>
          </a>
          
          <!-- Mobile menu burger STYLÉ -->
          <button class="mobile-burger lg:hidden" @click="toggleMobileMenu">
            <span :class="['burger-line', 'line-1', { 'active': isMobileMenuOpen }]"></span>
            <span :class="['burger-line', 'line-2', { 'active': isMobileMenuOpen }]"></span>
            <span :class="['burger-line', 'line-3', { 'active': isMobileMenuOpen }]"></span>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation AMÉLIORÉE -->
      <div :class="['mobile-nav-overlay', { 'active': isMobileMenuOpen }]" @click="closeMobileMenu">
        <nav :class="['mobile-nav', { 'active': isMobileMenuOpen }]" @click.stop>
          <div class="mobile-nav-content">
            <div class="mobile-nav-header">
              <div class="mobile-brand">
                <div class="mobile-logo">
                  <div class="logo-diamond"></div>
                </div>
                <span class="mobile-brand-text">DONE Group</span>
              </div>
            </div>
            <div class="mobile-nav-links">
              <a v-for="link in navigationLinks" :key="link.label"
                 :href="link.to" 
                 class="mobile-nav-item"
                 @click="handleNavClick(link, $event)">
                <UIcon :name="link.icon" class="mobile-nav-icon" />
                <span>{{ link.label }}</span>
              </a>
              <div class="mobile-nav-separator"></div>
              <a href="#contact" class="mobile-nav-item contact-mobile" @click="closeMobileMenu">
                <UIcon name="i-heroicons-phone" class="mobile-nav-icon" />
                <span>Contact</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useSectorNavigation } from '~/composables/useSectorNavigation'

// Navigation state
const { isHomeView, currentSector, goToHome } = useSectorNavigation()

// Fonction pour aller vers la section des activités
const goToActivities = () => {
  // Si on n'est pas sur la page d'accueil, y retourner d'abord
  if (!isHomeView.value) {
    goToHome()
    // Attendre que la transition soit finie avant de scroller
    setTimeout(() => {
      scrollToSectorSelector()
    }, 500)
  } else {
    // Si on est déjà sur l'accueil, scroller directement
    scrollToSectorSelector()
  }
}

// Fonction pour scroller vers la section SectorSelector
const scrollToSectorSelector = () => {
  const sectorSelector = document.querySelector('.sector-selector')
  if (sectorSelector) {
    sectorSelector.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// Dropdown state avec gestion du délai
const showDropdown = ref(false)
let dropdownTimer: NodeJS.Timeout | null = null

// Navigation links avec icônes
const navigationLinks = [
  { label: 'Accueil', to: '#accueil', icon: 'i-heroicons-home' },
  { label: 'À propos', to: '#about', icon: 'i-heroicons-building-office' },
  { label: 'Activités', to: '#sectors', icon: 'i-heroicons-squares-plus' }
]

// Mobile menu state
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  showDropdown.value = false
}

// Gestionnaire des clics de navigation
const handleNavClick = (link: { label: string; to: string; icon: string }, event: Event) => {
  event.preventDefault()
  closeMobileMenu()
  
  if (link.label === 'Activités') {
    goToActivities()
  } else {
    // Pour les autres liens, comportement normal
    const target = document.querySelector(link.to)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}

// Gestion intelligente du dropdown avec délai
const handleMouseEnter = () => {
  if (dropdownTimer) {
    clearTimeout(dropdownTimer)
    dropdownTimer = null
  }
  showDropdown.value = true
}

const handleMouseLeave = () => {
  // Délai de 500ms avant fermeture pour laisser le temps de naviguer
  dropdownTimer = setTimeout(() => {
    showDropdown.value = false
  }, 500)
}

// Close dropdown when clicking outside
onMounted(() => {
  const handleClickOutside = (event: Event) => {
    const target = event.target as Element
    if (!target.closest('.brand-wrapper')) {
      showDropdown.value = false
    }
  }
  document.addEventListener('click', handleClickOutside)
  
  // Gestion de l'effet scroll sur le header
  const header = document.querySelector('.header-ultra-modern')
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled')
    } else {
      header?.classList.remove('scrolled')
    }
  }
  
  document.addEventListener('scroll', handleScroll)
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
    document.removeEventListener('scroll', handleScroll)
  })
})
</script>

