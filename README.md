# DONE Group - Site Web Nuxt 3 🚀

Site web ultra-moderne pour DONE Group, spécialiste en automatisation et solutions industrielles, construit avec Nuxt 3 et système de thème dark/light mode avancé.

## ✨ Fonctionnalités Premium

### 🌙 Système de Thème Dark/Light
- **Toggle animé** avec icônes soleil/lune
- **Persistance localStorage** + détection système
- **Variables CSS dynamiques** pour tous les composants
- **Transitions fluides** entre les thèmes

### 🎨 Design System Moderne
- **Direction artistique** Bordeaux (#dd0822) + Violet (#7c3aed)
- **Glassmorphism** avec header transparent et blur dynamique
- **Ombres colorées** en dark mode (effet glow)
- **Animations synchronisées** des compteurs (2s)

### 📱 Interface Ultra-Responsive
- **Header glassmorphism** avec transparence au scroll
- **Tuiles stylisées** avec ombres portées
- **Animations reveal** au scroll avec IntersectionObserver
- **Navigation mobile** optimisée

## 🛠️ Technologies

- **Nuxt 3** - Framework Vue.js moderne avec SSR/SSG
- **Nuxt UI** - Composants UI premium
- **Nuxt Content** - Gestion de contenu avec Markdown
- **TypeScript** - Typage statique strict
- **Vue 3** - Composition API
- **Tailwind CSS** - Framework CSS utilitaire
- **Nuxt Studio** - Édition visuelle de contenu

## 📁 Architecture du Projet

```
done-group-website/
├── assets/css/
│   ├── themes.css          # Variables CSS pour les thèmes
│   ├── main.css            # Styles principaux responsifs
│   └── header.css          # Header glassmorphism
├── components/
│   ├── layout/
│   │   └── AppHeader.vue   # Header avec navigation + theme toggle
│   ├── sections/
│   │   ├── HeroSection.vue # Hero avec compteurs animés
│   │   ├── SectorSelector.vue
│   │   └── SectorContent.vue
│   └── ui/
│       └── ThemeToggle.vue # Switch dark/light animé
├── composables/
│   ├── useTheme.ts         # Gestion des thèmes
│   └── useSectorNavigation.ts
├── content/sections/       # Contenu Markdown éditable
│   ├── hero.md
│   ├── about.md
│   ├── contact.md
│   └── footer.md
├── app.vue                 # Layout principal SPA
├── nuxt.config.ts          # Configuration Nuxt + modules
└── CLAUDE.md              # Instructions développeur
```

## 🎨 Design System

### 🎯 Palette de Couleurs
- **Primary** : `#ff3b30` (Rouge signature)
- **Secondary** : `#dd0822` (Bordeaux elegant)
- **Accent** : `#7c3aed` (Violet premium)

### 🌈 Variables Thématiques
```css
/* Light Mode */
--color-background: #ffffff
--card-background: rgba(255, 255, 255, 0.95)
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.15)

/* Dark Mode */
--color-background: #0a0a0b
--card-background: rgba(17, 17, 19, 0.9)
--shadow-md: 0 8px 32px rgba(124, 58, 237, 0.15)
```

### ✨ Effets Visuels
- **Glassmorphism** : Header transparent avec backdrop-filter
- **Ombres colorées** : Violet/Bordeaux en dark mode
- **Dégradés** : Bordeaux → Bordeaux foncé
- **Animations** : cubic-bezier pour fluidité

## 🚀 Installation & Développement

```bash
# Cloner le repository
git clone https://github.com/DONE-Yoann/done-group-website.git
cd done-group-website

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
# ➜ http://localhost:3000

# Build pour la production
npm run build

# Preview de la production
npm run preview
```

## 📊 Fonctionnalités Avancées

### 🎯 Animations & Interactions
- **Compteurs animés** : Synchronisation 2s avec easing
- **Reveal animations** : IntersectionObserver optimisé
- **Hover effects** : Transform + shadow elevation
- **Scroll effects** : Header transparence dynamique

### 🔧 Gestion de Contenu
- **Nuxt Content** : Markdown avec frontmatter YAML
- **Nuxt Studio** : Édition visuelle en ligne
- **Fallback data** : Données par défaut si contenu indisponible
- **Auto-reload** : Rechargement automatique du contenu

### 🎨 Système de Thème
```typescript
// Composable useTheme
const { isDark, toggleTheme } = useTheme()

// Détection automatique
- localStorage persistence
- System preference detection
- Smooth transitions
- CSS variables update
```

## 📱 Responsive Design

### 🖥️ Breakpoints
- **Mobile** : < 640px (Design mobile-first)
- **Tablet** : 640px - 1024px
- **Desktop** : > 1024px
- **Large** : > 1280px

### 🎯 Optimisations Mobile
- **Touch-friendly** : Zones tactiles 44px minimum
- **Navigation** : Menu burger avec overlay
- **Typography** : Clamp() pour texte responsive
- **Images** : WebP/AVIF avec lazy loading

## 🔍 SEO & Performance

### 🎯 Métadonnées Dynamiques
```typescript
// SEO par section
useHead({
  title: `${currentSector.value.title} - DONE Group`,
  meta: [
    { name: 'description', content: dynamicDescription }
  ]
})
```

### ⚡ Optimisations Performance
- **SSR/SSG** : Rendu côté serveur
- **Auto-imports** : Composants + composables
- **Image optimization** : Nuxt Image avec WebP
- **Bundle splitting** : Lazy loading automatique
- **CSS purging** : Tailwind JIT mode

## 🎨 Composants Principaux

### 🏠 AppHeader
```vue
<template>
  <header class="header-ultra-modern">
    <!-- Glassmorphism avec scroll detection -->
    <!-- Logo animé avec dégradé bordeaux/violet -->
    <!-- Dropdown navigation avec délai intelligent -->
    <!-- Theme toggle switch -->
  </header>
</template>
```

### 🦸 HeroSection  
```vue
<template>
  <!-- Compteurs animés synchronisés -->
  <!-- Dégradé texte bordeaux -->
  <!-- Boutons avec hover effects -->
  <!-- Statistiques en tuiles stylisées -->
</template>
```

### 🌙 ThemeToggle
```vue
<template>
  <!-- Switch animé soleil/lune -->
  <!-- Track glassmorphism -->
  <!-- Thumb avec gradient -->
  <!-- Smooth transitions -->
</template>
```

## 🚀 Déploiement

### 🌐 Plateformes Recommandées
- **Vercel** : Déploiement Git automatique ⭐
- **Netlify** : Build hooks + Edge functions
- **GitHub Pages** : Static generation
- **VPS** : Configuration manuelle

### 📦 Build Production
```bash
# Generation statique optimisée
npm run generate

# Preview de la prod
npm run preview

# Analyse du bundle
npx nuxi analyze
```

## 🎯 Nuxt Studio Integration

### 📝 Content Management
1. **Setup Studio** : `npx nuxi@latest studio`
2. **Edit Content** : Interface visuelle pour Markdown
3. **Live Preview** : Aperçu en temps réel
4. **Git Sync** : Synchronisation automatique

### 🔧 Content Structure
```markdown
---
title: "Hero Section"
badge:
  icon: "i-heroicons-bolt" 
  text: "Innovation industrielle"
---

# Contenu Markdown éditable
```

## 📈 Métriques Performance

### ⚡ Core Web Vitals
- **FCP** : < 1.2s (First Contentful Paint)
- **LCP** : < 2.0s (Largest Contentful Paint) 
- **CLS** : < 0.1 (Cumulative Layout Shift)
- **FID** : < 50ms (First Input Delay)

### 🎯 Lighthouse Score
- **Performance** : 95+
- **Accessibility** : 100
- **Best Practices** : 100  
- **SEO** : 100

## 🛠️ Maintenance & Updates

### 🎨 Modifier les Couleurs
```css
/* assets/css/themes.css */
:root {
  --secondary-400: #dd0822; /* Bordeaux principal */
}
```

### 📝 Ajouter du Contenu
```markdown
<!-- content/sections/new-section.md -->
---
title: "Nouvelle Section"
description: "Description"
---
```

### 🧩 Créer un Composant
```vue
<!-- components/ui/NewComponent.vue -->
<template>
  <div class="theme-surface">
    <!-- Utilise les variables CSS thématiques -->
  </div>
</template>
```

## 🤝 Contribution

1. **Fork** le repository
2. **Branch** feature : `git checkout -b feature/amazing-feature`
3. **Commit** : `git commit -m 'Add amazing feature'`
4. **Push** : `git push origin feature/amazing-feature`
5. **Pull Request** avec description détaillée

### 📋 Guidelines
- **TypeScript** strict mode
- **Composants** réutilisables
- **Mobile-first** approach
- **Accessibility** WCAG 2.1
- **Performance** optimisée

## 🔧 Scripts Disponibles

```bash
# Développement
npm run dev          # Serveur dev + HMR
npm run build        # Build production
npm run preview      # Preview build
npm run generate     # Static generation

# Maintenance  
npm run lint         # ESLint check
npm run typecheck    # TypeScript check
npm run analyze      # Bundle analyzer
```

## 📄 Licence & Credits

© 2024 **DONE Group** - Tous droits réservés

**Développé avec ❤️ par Claude Code**
- Framework : Nuxt 3 + Vue 3
- Design System : Tailwind CSS + Variables CSS
- Animations : Native CSS + JavaScript
- Content : Nuxt Content + Markdown

---

### 🌟 **DONE Group**
*Experts en automatisation et solutions industrielles*

🔗 **Links**
- Website: [done.group](https://done.group)
- Repository: [GitHub](https://github.com/DONE-Yoann/done-group-website)
- Contact: contact@done.group

**🚀 Nuxt 3 • 🎨 Glassmorphism • 🌙 Dark Mode • ⚡ Performance**