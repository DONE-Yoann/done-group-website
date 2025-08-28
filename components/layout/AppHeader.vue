<template>
  <header class="header-ultra-modern">
    <div class="header-container">
      <div class="header-content">
        <!-- Brand/Logo ULTRA STYLÉ -->
        <div class="brand-section">
          <div 
            class="brand-wrapper"
            @mouseenter="showDropdown = true"
            @mouseleave="showDropdown = false"
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
            <div v-show="showDropdown" class="dropdown-menu">
              <div class="dropdown-content">
                <a v-for="link in navigationLinks" :key="link.label"
                   :href="link.to" 
                   class="dropdown-item"
                   @click="closeMobileMenu">
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
            <button @click="goToHome" class="breadcrumb-home">
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
                 @click="closeMobileMenu">
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

// Dropdown state
const showDropdown = ref(false)

// Navigation links avec icônes
const navigationLinks = [
  { label: 'Accueil', to: '#accueil', icon: 'i-heroicons-home' },
  { label: 'À propos', to: '#about', icon: 'i-heroicons-building-office' },
  { label: 'Activités', to: '#services', icon: 'i-heroicons-squares-plus' }
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

// Close dropdown when clicking outside
onMounted(() => {
  const handleClickOutside = (event: Event) => {
    const target = event.target as Element
    if (!target.closest('.brand-wrapper')) {
      showDropdown.value = false
    }
  }
  document.addEventListener('click', handleClickOutside)
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>

<style scoped>
/* ===== HEADER ULTRA MODERNE ===== */
.header-ultra-modern {
  @apply fixed top-0 left-0 right-0 z-50;
  background: rgba(2, 4, 32, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.header-container {
  @apply mx-auto px-4 sm:px-6 lg:px-8;
  max-width: 1280px;
}

.header-content {
  @apply flex items-center justify-between;
  height: 70px;
}

/* ===== BRAND SECTION ULTRA STYLÉE ===== */
.brand-section {
  @apply flex items-center gap-8;
}

.brand-wrapper {
  @apply relative;
}

.brand-logo {
  @apply flex items-center gap-3 group cursor-pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.brand-logo:hover {
  transform: translateY(-2px);
}

/* Logo Icon DINGUE */
.logo-icon {
  @apply relative flex items-center justify-center;
  width: 45px;
  height: 45px;
}

.logo-diamond {
  @apply absolute inset-0 rounded-xl rotate-45;
  background: linear-gradient(135deg, #ff3b30 0%, #06b6d4 50%, #7c3aed 100%);
  box-shadow: 0 0 20px rgba(255, 59, 48, 0.3);
  animation: logoGlow 3s ease-in-out infinite;
}

.logo-pulse {
  @apply absolute inset-0 rounded-xl rotate-45 opacity-30;
  background: linear-gradient(135deg, #ff3b30 0%, #06b6d4 50%, #7c3aed 100%);
  animation: logoPulse 2s ease-in-out infinite;
}

@keyframes logoGlow {
  0%, 100% { box-shadow: 0 0 20px rgba(255, 59, 48, 0.3); }
  50% { box-shadow: 0 0 30px rgba(6, 182, 212, 0.4), 0 0 40px rgba(124, 58, 237, 0.2); }
}

@keyframes logoPulse {
  0%, 100% { transform: scale(1) rotate(45deg); opacity: 0.3; }
  50% { transform: scale(1.1) rotate(45deg); opacity: 0.5; }
}

/* Brand Text MAGNIFIQUE */
.brand-text {
  @apply flex flex-col leading-tight;
}

.brand-name {
  @apply text-white font-black text-xl tracking-wider;
  background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
}

.brand-subtitle {
  @apply text-blue-300 font-semibold text-sm tracking-wide;
  margin-top: -4px;
}

/* Dropdown Arrow */
.dropdown-arrow {
  @apply w-4 h-4 text-blue-300 ml-2 transition-transform duration-300;
}

.dropdown-arrow.rotated {
  transform: rotate(180deg);
}

/* ===== DROPDOWN MENU ULTRA SEXY ===== */
.dropdown-menu {
  @apply absolute top-full left-0 mt-2 z-50;
  min-width: 220px;
  background: rgba(2, 4, 32, 0.98);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  animation: dropdownSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes dropdownSlideIn {
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.dropdown-content {
  @apply p-2;
}

.dropdown-item {
  @apply flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200;
  text-decoration: none;
}

.dropdown-item:hover {
  transform: translateX(4px);
}

.dropdown-item.contact-item {
  @apply text-blue-400 hover:text-blue-300 hover:bg-blue-500/20;
}

.dropdown-icon {
  @apply w-5 h-5;
}

.dropdown-separator {
  @apply my-2 mx-4 h-px bg-white/20;
}

/* ===== BREADCRUMB STYLÉ ===== */
.breadcrumb-nav {
  @apply hidden md:flex items-center gap-3 text-sm;
}

.breadcrumb-home {
  @apply p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors;
}

.breadcrumb-sep {
  @apply w-3 h-3 text-gray-600;
}

.breadcrumb-current {
  @apply font-semibold;
}

/* ===== HEADER ACTIONS ===== */
.header-actions {
  @apply flex items-center gap-4;
}

.contact-cta {
  @apply hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl;
  text-decoration: none;
}

.contact-cta:hover {
  transform: translateY(-2px);
}

/* ===== BURGER MENU ULTRA STYLÉ ===== */
.mobile-burger {
  @apply lg:hidden relative w-8 h-8 flex flex-col justify-center items-center cursor-pointer;
}

.burger-line {
  @apply absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out;
}

.line-1 {
  top: 8px;
}

.line-2 {
  top: 15px;
}

.line-3 {
  top: 22px;
}

.burger-line.active.line-1 {
  top: 15px;
  transform: rotate(45deg);
}

.burger-line.active.line-2 {
  opacity: 0;
}

.burger-line.active.line-3 {
  top: 15px;
  transform: rotate(-45deg);
}

/* ===== MOBILE NAVIGATION OVERLAY ===== */
.mobile-nav-overlay {
  @apply lg:hidden fixed inset-0 z-40 transition-all duration-300;
  background: rgba(0, 0, 0, 0);
  pointer-events: none;
}

.mobile-nav-overlay.active {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  pointer-events: auto;
}

.mobile-nav {
  @apply fixed top-0 right-0 h-full w-80 max-w-sm transition-transform duration-300 ease-in-out;
  background: rgba(2, 4, 32, 0.98);
  backdrop-filter: blur(20px);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  transform: translateX(100%);
}

.mobile-nav.active {
  transform: translateX(0);
}

.mobile-nav-content {
  @apply h-full flex flex-col;
}

.mobile-nav-header {
  @apply p-6 border-b border-white/10;
}

.mobile-brand {
  @apply flex items-center gap-3;
}

.mobile-logo .logo-diamond {
  @apply w-8 h-8;
}

.mobile-brand-text {
  @apply text-white font-bold text-lg;
}

.mobile-nav-links {
  @apply flex-1 p-6 space-y-2;
}

.mobile-nav-item {
  @apply flex items-center gap-4 px-4 py-4 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200;
  text-decoration: none;
}

.mobile-nav-item.contact-mobile {
  @apply text-blue-400 hover:text-blue-300 hover:bg-blue-500/20;
}

.mobile-nav-icon {
  @apply w-5 h-5;
}

.mobile-nav-separator {
  @apply my-4 h-px bg-white/20;
}

/* ===== RESPONSIVE ADJUSTMENTS ===== */
@media (max-width: 640px) {
  .header-content {
    height: 60px;
  }
  
  .logo-icon {
    width: 40px;
    height: 40px;
  }
  
  .brand-name {
    @apply text-lg;
  }
  
  .brand-subtitle {
    @apply text-xs;
  }
}
</style>
