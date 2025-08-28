<template>
  <header class="header-modern">
    <div class="container-custom">
      <div class="flex items-center justify-between min-h-16">
        <!-- Brand/Logo avec Breadcrumb -->
        <div class="flex items-center gap-6">
          <button @click="goToHome" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 flex items-center justify-center shadow-lg">
              <UIcon
                name="i-heroicons-squares-2x2"
                class="w-5 h-5 text-white"
              />
            </div>
            <span class="font-black tracking-wide uppercase text-lg">DONE Group</span>
          </button>
          
          <!-- Breadcrumb -->
          <nav v-if="!isHomeView" class="breadcrumb hidden md:flex">
            <button @click="goToHome" class="breadcrumb-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2"/>
              </svg>
              Accueil
            </button>
            <span class="breadcrumb-separator">/</span>
            <span class="breadcrumb-current" :style="{ color: currentSector?.color }">
              {{ currentSector?.title }}
            </span>
          </nav>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-1">
          <a
            v-for="link in navigationLinks"
            :key="link.label"
            :href="link.to"
            class="px-3 py-2 rounded-lg transition-colors hover:bg-bg-800/50 text-text-200 hover:text-text-100"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- Mobile Menu Button -->
        <UButton
          variant="ghost"
          size="sm"
          class="lg:hidden"
          @click="toggleMobileMenu"
        >
          <UIcon
            :name="isMobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
            class="w-6 h-6"
          />
        </UButton>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-show="isMobileMenuOpen"
        class="lg:hidden mobile-nav"
      >
        <div class="space-y-2">
          <a
            v-for="link in navigationLinks"
            :key="link.label"
            :href="link.to"
            class="block px-3 py-2 rounded-lg transition-colors hover:bg-bg-800/50 text-text-200 hover:text-text-100"
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </a>
          <div class="pt-2">
            <UButton
              color="primary"
              variant="solid"
              block
              @click="scrollToContactAndCloseMenu"
            >
              Contact
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useSectorNavigation } from '~/composables/useSectorNavigation'

// Navigation state
const { isHomeView, currentSector, goToHome } = useSectorNavigation()

const navigationLinks = [
  { label: 'Accueil', to: '#accueil' },
  { label: 'À propos', to: '#about' },
  { label: 'Activités', to: '#services' }
]

// Mobile menu state
const isMobileMenuOpen = ref(false)

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    })
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const scrollToContactAndCloseMenu = () => {
  scrollToContact()
  closeMobileMenu()
}
</script>

