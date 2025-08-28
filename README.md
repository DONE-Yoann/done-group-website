# DONE Group - Site Web Nuxt 3

Site web moderne pour DONE Group, spécialiste en automatisation et solutions industrielles, construit avec Nuxt 3 et Nuxt UI.

## 🚀 Technologies

- **Nuxt 3** - Framework Vue.js moderne
- **Nuxt UI** - Composants UI prêts à l'emploi
- **Tailwind CSS** - Framework CSS utilitaire
- **TypeScript** - Typage statique
- **Vue 3** - Framework JavaScript progressif

## 📁 Structure du projet

```
done-group-nuxt/
├── components/           # Composants Vue
│   ├── layout/          # Composants de mise en page
│   │   └── AppHeader.vue
│   └── sections/        # Sections de page
│       └── HeroSection.vue
├── content/             # Données du site
│   └── site-data.json
├── server/              # API routes
│   └── api/
│       └── site-data.get.ts
├── assets/              # Assets statiques
│   └── css/
│       └── main.css
├── public/              # Fichiers publics
├── app.vue              # Page principale
├── nuxt.config.ts       # Configuration Nuxt
├── tailwind.config.ts   # Configuration Tailwind
└── package.json
```

## 🎨 Design System

### Couleurs
- **Primary** : `#ff3b30` (Rouge DONE)
- **Secondary** : `#06b6d4` (Cyan)
- **Accent** : `#7c3aed` (Violet)
- **Background** : `#0a0f16` (Noir profond)

### Typographie
- **Police** : System UI stack
- **Hiérarchie** : Responsive avec clamp()
- **Poids** : 400, 700, 800, 900

## 🛠️ Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Preview de la production
npm run preview
```

## 📱 Fonctionnalités

### ✅ Interface utilisateur
- Design responsive (mobile-first)
- Navigation fluide avec scroll smooth
- Menu mobile avec animations
- Effets de révélation au scroll
- Animations de compteur
- Composants Nuxt UI optimisés

### ✅ Performance
- SSR/SSG automatique
- Lazy loading des images
- Optimisation des bundles
- Respect des préférences utilisateur
- Gestion d'erreurs robuste

### ✅ Accessibilité
- Navigation clavier
- Labels ARIA appropriés
- Contraste respecté
- Structure sémantique
- Support des lecteurs d'écran

## 🔧 Configuration

### Variables d'environnement
Créez un fichier `.env` :
```env
NUXT_PUBLIC_SITE_URL=https://done.group
```

### Configuration Nuxt
Le fichier `nuxt.config.ts` contient :
- Modules activés
- Configuration SEO
- Paramètres de build
- Configuration des images

## 📊 Données

Les données du site sont centralisées dans `content/site-data.json` :
- **Services** : 6 services principaux
- **Modes d'accompagnement** : 3 modes
- **Secteurs** : 6 secteurs d'activité
- **Clients** : Logos des clients
- **Contact** : Informations de contact
- **Entreprise** : Informations DONE Group

## 🎯 Composants

### AppHeader
- Navigation responsive
- Menu mobile
- Logo DONE Group
- Bouton contact

### HeroSection
- Titre principal avec gradient
- Description de l'entreprise
- Boutons d'action
- Animation du compteur
- Visual avec chips

### Sections
- Services avec cartes
- À propos et modes
- Secteurs d'activité
- Call-to-action
- Footer complet

## 🚀 Déploiement

### Développement local
```bash
npm run dev
# http://localhost:3000
```

### Production
```bash
npm run build
npm run preview
```

### Plateformes recommandées
- **Vercel** : Déploiement automatique
- **Netlify** : Déploiement automatique
- **VPS** : Configuration manuelle

## 🔍 SEO

### Métadonnées
- Title optimisé
- Meta description ciblée
- Open Graph pour réseaux sociaux
- Favicon SVG intégré

### Performance
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1
- **First Input Delay** : < 100ms

## 🛠️ Maintenance

### Ajouter un service
1. Modifier `content/site-data.json`
2. Ajouter l'icône correspondante
3. Mettre à jour les liens si nécessaire

### Modifier le design
1. Éditer `assets/css/main.css`
2. Utiliser les variables CSS pour la cohérence
3. Tester sur différents écrans

### Ajouter une fonctionnalité
1. Créer un nouveau composant dans `components/`
2. L'utiliser dans `app.vue`
3. Documenter l'API

## 📈 Avantages de Nuxt 3

### Performance
- **SSR/SSG** : Rendu côté serveur
- **Auto-imports** : Import automatique
- **Tree-shaking** : Bundle optimisé
- **Lazy loading** : Chargement à la demande

### Développement
- **Hot reload** : Rechargement automatique
- **TypeScript** : Support natif
- **Composants** : Auto-imports
- **Composables** : Logique réutilisable

### SEO
- **Meta tags** : Gestion automatique
- **Sitemap** : Génération automatique
- **Robots.txt** : Configuration automatique
- **Structured data** : Support JSON-LD

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature
3. Tester sur différents navigateurs
4. Soumettre une pull request

## 📄 Licence

© 2024 DONE Group - Tous droits réservés

---

**DONE Group** - Experts en automatisation et solutions industrielles
