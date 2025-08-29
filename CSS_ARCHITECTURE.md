# 🎨 Architecture CSS - DONE Group Website

## 📁 Organisation des Fichiers CSS

### 🔄 Ordre de Chargement (nuxt.config.ts)
```typescript
css: [
  '~/assets/css/themes.css',      // 1️⃣ Variables et thèmes
  '~/assets/css/main.css',        // 2️⃣ Styles principaux
  '~/assets/css/components.css',  // 3️⃣ Composants spécifiques
  '~/assets/css/header.css'       // 4️⃣ Header moderne
]
```

## 📋 Description des Fichiers

### 1️⃣ `themes.css` - Système de Thèmes
- **Variables CSS** pour light/dark mode
- **Palette Industrie 5.0** (cyan tech, orange industriel)
- **Fonds industriels** avec grilles cyber
- **Transitions globales**

### 2️⃣ `main.css` - Styles Principaux  
- **Composants de page** (hero, secteurs, about)
- **System de grille** responsive
- **Animations** reveal et hover
- **Couleurs sectorielles** tech

### 3️⃣ `components.css` - Composants Spécifiques
- **Services grid** et cartes
- **États interactifs** 
- **Utilities classes**
- ⚠️ **Eyebrow désactivé** (utilise main.css)

### 4️⃣ `header.css` - Header Ultra-Moderne
- **Logo animé** avec effets néon
- **Navigation dropdown**
- **Mobile burger menu**
- **Breadcrumb** système

## 🎯 Thème "Industrie 5.0"

### 🌈 Palette de Couleurs
```css
:root {
  /* Cyan Tech (Primaire) */
  --primary-500: #06b6d4;
  
  /* Orange Industriel (Secondaire) */  
  --secondary-500: #f97316;
  
  /* Bleu Électrique (Accent) */
  --accent-600: #2563eb;
  
  /* Couleurs Tech Supplémentaires */
  --tech-green: #10b981;
  --tech-yellow: #fbbf24;
  --tech-red: #ef4444;
}
```

### 🎨 Effets Visuels
- **Grilles industrielles** en arrière-plan
- **Ombres néon** avec lueurs cyber
- **Dégradés radiaux** tech
- **Animations fluides** avec cubic-bezier

### 🔧 Secteurs Industriels
```css
.sector-automation  { --sector-color: #06b6d4; } /* Cyan */
.sector-informatique { --sector-color: #3b82f6; } /* Bleu */
.sector-mecanique   { --sector-color: #f97316; } /* Orange */
.sector-construction { --sector-color: #10b981; } /* Vert */
.sector-demolition  { --sector-color: #ef4444; } /* Rouge */
.sector-fabrication { --sector-color: #fbbf24; } /* Jaune */
```

## ⚠️ Conflits Résolus

### 🩹 Problème Eyebrow (RÉSOLU x2)
- **Avant** : `components.css` + `LogoCarousel.vue` avaient `-webkit-text-fill-color: transparent`
- **Solution** : 
  - Désactivé le CSS dans `components.css`
  - Supprimé la classe `.eyebrow` dupliquée dans `LogoCarousel.vue`
- **Résultat** : `main.css` contrôle maintenant l'affichage (VERSION UNIQUE)

### 🎯 Spécificité CSS
- **Light Mode** : `:not(.dark) .sector-card:hover` (30 points)
- **Dark Mode** : `.dark .sector-card:hover` (30 points)
- **Égalité** = Pas de conflit !

## 🚀 Bonnes Pratiques

### ✅ Do's
- Utiliser les **variables CSS** définies dans `themes.css`
- Respecter l'**ordre de chargement** des fichiers
- Tester en **light et dark mode**
- Vérifier la **spécificité CSS** en cas de conflit

### ❌ Don'ts  
- Ne pas utiliser `!important` sauf exception
- Ne pas créer de nouveaux fichiers CSS sans justification
- Ne pas ignorer les conflits de spécificité
- Ne pas utiliser de couleurs hardcodées
- ⚠️ **JAMAIS redéfinir `.eyebrow` dans les composants Vue !**
- ⚠️ **JAMAIS dupliquer les classes CSS existantes !**

## 🔍 Débogage CSS

### 🛠️ DevTools
1. **F12** → Elements
2. Chercher la classe concernée
3. Vérifier si les styles sont **~~barrés~~** (écrasés)
4. Identifier la règle qui gagne (spécificité plus élevée)

### 📊 Calcul de Spécificité
- **IDs** : 100 points
- **Classes/Pseudo-classes** : 10 points  
- **Éléments** : 1 point
- **!important** : 1000 points (à éviter)

## 🚫 RÈGLES STRICTES - ANTI-DUPLICATION

### ⛔ INTERDICTIONS FORMELLES
1. **JAMAIS redéfinir `.eyebrow`** dans les composants Vue
2. **JAMAIS dupliquer** une classe CSS existante
3. **TOUJOURS vérifier** si une classe existe avant d'en créer une nouvelle
4. **UTILISER les classes globales** de `main.css` et `themes.css`

### 🔍 Comment Vérifier les Duplications
```bash
# Rechercher toutes les occurrences d'une classe
grep -r "\.eyebrow" assets/ components/

# Vérifier dans quels fichiers
grep -l "\.eyebrow" assets/css/*.css components/**/*.vue
```

### 📋 Classes Globales à Réutiliser
- `.eyebrow` → `main.css` (SEULE VERSION AUTORISÉE)
- `.btn`, `.btn-primary`, `.btn-ghost` → `main.css`
- `.reveal`, `.is-visible` → `main.css`
- Variables `--primary-500`, `--secondary-500` → `themes.css`

---

**🎨 Thème Industrie 5.0 Activé ✅**  
*Dernière mise à jour : Août 2024*  
*⚠️ Duplication CSS = INTERDIT !*