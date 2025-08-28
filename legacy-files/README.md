# DONE Group - Site Web

Site web statique pour DONE Group, spécialiste en automatisation et solutions industrielles.

## 🏗️ Architecture

### Structure des fichiers

```
Web_Done.group_v2/
├── index.html                 # Page principale
├── styles.css                 # Styles CSS
├── script.js                  # JavaScript principal
├── components/                # Composants réutilisables
│   ├── header.html           # En-tête du site
│   └── footer.html           # Pied de page
├── data/                     # Données du site
│   └── services.json         # Services, secteurs, etc.
└── README.md                 # Documentation
```

### Technologies utilisées

- **HTML5** : Structure sémantique et accessible
- **CSS3** : Design moderne avec CSS Grid, Flexbox et variables CSS
- **JavaScript ES6+** : Architecture modulaire orientée objet
- **JSON** : Données structurées pour la maintenance

## 🚀 Fonctionnalités

### Interface utilisateur
- ✅ Design responsive (mobile-first)
- ✅ Navigation fluide avec scroll smooth
- ✅ Menu mobile avec animations
- ✅ Effets de révélation au scroll
- ✅ Animations de compteur
- ✅ Marquee de logos clients

### Performance
- ✅ CSS et JS optimisés
- ✅ Lazy loading des images
- ✅ Respect des préférences utilisateur (reduced-motion)
- ✅ Gestion d'erreurs robuste

### Accessibilité
- ✅ Navigation clavier
- ✅ Labels ARIA appropriés
- ✅ Contraste respecté
- ✅ Structure sémantique

## 📱 Responsive Design

Le site s'adapte automatiquement aux différentes tailles d'écran :

- **Desktop** : > 1100px
- **Tablet** : 640px - 1100px  
- **Mobile** : < 640px

## 🎨 Design System

### Couleurs
```css
--bg: #0a0f16          /* Fond principal */
--bg-2: #0c1320        /* Cartes */
--bg-3: #0b111b        /* Variations */
--text: #e6edf3        /* Texte principal */
--muted: #9fb3c8       /* Texte secondaire */
--accent: #ff3b30      /* Rouge DONE */
--accent-2: #06b6d4    /* Cyan */
--accent-3: #7c3aed    /* Violet */
```

### Typographie
- **Police** : System UI stack (ui-sans-serif, system-ui, etc.)
- **Hiérarchie** : Utilisation de clamp() pour le responsive
- **Poids** : 400 (normal), 700 (bold), 800 (extra-bold), 900 (black)

## 🔧 JavaScript Architecture

### Classes principales

```javascript
DONEApp              // Application principale
├── MobileMenu       // Gestion menu mobile
├── SmoothScroll     // Navigation fluide
├── CounterAnimation // Animation compteur
├── ScrollReveal     // Effets de révélation
├── UserPreferences  // Préférences utilisateur
├── PerformanceOptimizer // Optimisations
└── ErrorHandler     // Gestion d'erreurs
```

### Configuration
```javascript
const CONFIG = {
  counterDuration: 1100,    // Durée animation compteur
  revealThreshold: 0.22,    // Seuil révélation
  counterThreshold: 0.4     // Seuil compteur
};
```

## 📊 Données

Les données du site sont centralisées dans `data/services.json` :

- **Services** : 6 services principaux
- **Modes d'accompagnement** : 3 modes
- **Secteurs** : 6 secteurs d'activité
- **Clients** : Logos des clients
- **Contact** : Informations de contact
- **Entreprise** : Informations DONE Group

## 🚀 Déploiement

### Développement local
1. Ouvrir `index.html` dans un navigateur
2. Ou utiliser un serveur local :
   ```bash
   python -m http.server 8000
   # ou
   npx serve .
   ```

### Production
- Optimiser les images
- Minifier CSS et JS
- Compresser les fichiers
- Configurer le cache navigateur

## 🔍 SEO

### Métadonnées
- Title optimisé
- Meta description ciblée
- Open Graph pour réseaux sociaux
- Favicon SVG intégré

### Structure
- Balises sémantiques HTML5
- Hiérarchie des titres cohérente
- URLs internes optimisées

## 🛠️ Maintenance

### Ajouter un service
1. Modifier `data/services.json`
2. Ajouter l'icône SVG correspondante
3. Mettre à jour les liens si nécessaire

### Modifier le design
1. Éditer `styles.css`
2. Utiliser les variables CSS pour la cohérence
3. Tester sur différents écrans

### Ajouter une fonctionnalité
1. Créer une nouvelle classe dans `script.js`
2. L'initialiser dans `DONEApp`
3. Documenter l'API

## 📈 Performance

### Métriques cibles
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1
- **First Input Delay** : < 100ms

### Optimisations
- CSS et JS minifiés
- Images optimisées
- Lazy loading
- Cache navigateur
- Compression gzip

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature
3. Tester sur différents navigateurs
4. Soumettre une pull request

## 📄 Licence

© 2024 DONE Group - Tous droits réservés
