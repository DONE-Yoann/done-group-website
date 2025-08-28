<template>
  <div v-if="currentSector" class="sector-content-wrapper">
    <!-- Hero Secteur compact -->
    <section class="sector-intro">
      <div class="container-custom">
        <div class="intro-content">
          <h1 class="sector-title">{{ currentSector.title }}</h1>
          <p class="sector-lead">{{ currentSector.subtitle }}</p>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="sector-services section">
      <div class="container-custom">
        <div class="services-layout">
          <div class="services-content">
            <h3>Nos services</h3>
            <div class="services-list">
              <div
                v-for="service in currentSector.services"
                :key="service"
                class="service-item"
              >
                <div class="service-dot" :style="{ backgroundColor: currentSector.color }"></div>
                <span>{{ service }}</span>
              </div>
            </div>
          </div>
          
          <div class="advantages-content">
            <h3>Nos atouts</h3>
            <div class="advantages-list">
              <div
                v-for="advantage in currentSector.advantages"
                :key="advantage"
                class="advantage-item"
              >
                <div class="advantage-check" :style="{ color: currentSector.color }">✓</div>
                <span>{{ advantage }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="sector-cta section">
      <div class="container-custom">
        <div class="cta-content">
          <h3>Prêt à démarrer ?</h3>
          <p>{{ currentSector.cta }}</p>
          <div class="cta-actions">
            <a href="mailto:contact@done.group" class="btn primary" :style="{ background: currentSector.color }">
              Contactez-nous
            </a>
            <a href="tel:+33745287509" class="btn ghost">
              +33 7 45 28 75 09
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useSectorNavigation } from '~/composables/useSectorNavigation'

// Import explicite du composable
const { currentSector, goToHome } = useSectorNavigation()
</script>

<style scoped>
.sector-content-wrapper {
  min-height: 100vh;
  animation: fadeInUp 0.5s ease-out;
}

.sector-intro {
  padding: var(--space-16) 0 var(--space-8);
  border-bottom: 1px solid var(--ring);
}

.intro-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.sector-title {
  color: var(--text);
  margin-bottom: var(--space-6);
  font-size: var(--text-4xl);
  font-weight: 700;
}

.sector-lead {
  color: var(--text-2);
  font-size: var(--text-lg);
  font-weight: 400;
  line-height: 1.6;
  margin: 0 auto;
  max-width: 60ch;
}

.services-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-12);
}

@media (min-width: 1024px) {
  .services-layout {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-16);
  }
}

.services-content h3,
.advantages-content h3 {
  margin-bottom: var(--space-6);
  color: var(--text);
}

.services-list,
.advantages-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.service-item,
.advantage-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
}

.service-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-top: 8px;
  flex-shrink: 0;
}

.advantage-check {
  font-weight: bold;
  font-size: var(--text-lg);
  flex-shrink: 0;
}

.service-item span,
.advantage-item span {
  color: var(--text-2);
  line-height: 1.6;
}

.sector-cta {
  background: linear-gradient(135deg, rgba(255,59,48,.04), rgba(6,182,212,.04));
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h3 {
  margin-bottom: var(--space-3);
}

.cta-content p {
  font-size: var(--text-lg);
  color: var(--text-2);
  margin-bottom: var(--space-8);
}

.cta-actions {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  flex-wrap: wrap;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>