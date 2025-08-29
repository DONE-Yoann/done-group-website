# 🎠 Guide du Carrousel de Logos Clients

## 🎯 Fonctionnalité

Le carrousel de logos affiche automatiquement tous les logos clients placés dans le dossier `/public/logos/` avec un défilement horizontal fluide et continu. 

**Position** : Le carrousel apparaît dans la HeroSection, **en dessous** des statistiques (128 clients, 15+ années, 6 domaines).

## 📁 Utilisation Simple

### 1. Ajouter des Logos
```bash
# Placez vos logos dans ce dossier :
/public/logos/
```

### 2. Formats Supportés
- ✅ **PNG** (recommandé pour transparence)
- ✅ **SVG** (vectoriel, idéal pour le web)
- ✅ **JPG/JPEG** (photos)
- ✅ **WebP** (format moderne, optimisé)

### 3. Nommage des Fichiers
```
✅ Correct :
- apple.png
- google-logo.svg
- microsoft-corp.jpg
- siemens-automation.webp

❌ Éviter :
- "logo avec espaces.png" (espaces)
- logo@client.png (caractères spéciaux)
```

## 🎨 Caractéristiques Visuelles

### Style "Industrie 5.0"
- **Filtre grayscale** par défaut (effet premium)
- **Hover coloré** avec animation fluide  
- **Background tech** avec dégradés subtils
- **Bordures animées** au survol
- **Ombres cyber** avec effet glow

### Dimensions Automatiques
- **Hauteur fixe** : 40px (responsive : 32px mobile)
- **Largeur adaptative** : Conserve les proportions
- **Qualité recommandée** : Minimum 200px de hauteur originale

## 🔄 Animations

### Défilement Continu
- **Vitesse adaptative** : Basée sur le nombre de logos
- **Loop sans fin** : Duplication automatique des logos
- **Pause au hover** : Arrêt temporaire au survol
- **Transition fluide** : Cubic-bezier optimisé

### Effets de Survol
```css
/* État normal */
filter: grayscale(100%) opacity(0.6)

/* État hover */
filter: grayscale(0%) opacity(1)
transform: scale(1.1)
glow: rgba(6, 182, 212, 0.1)
```

## 🚀 Intégration Technique

### Architecture
```
components/ui/LogoCarousel.vue    # Composant principal
server/api/logos.get.ts           # API de détection automatique  
public/logos/                     # Dossier des logos
```

### API Automatique
L'API `/api/logos` scanne automatiquement le dossier et retourne :
```json
[
  {
    "name": "Apple",
    "filename": "apple.png", 
    "url": "/logos/apple.png"
  }
]
```

## 📱 Responsive Design

### Desktop
- Hauteur logos : 40px
- Espacement : 3rem
- Animation : 20s minimum

### Mobile  
- Hauteur logos : 32px (28px petit mobile)
- Espacement : 1.5rem
- Largeur max : 80px

### Tablette
- Hauteur logos : 32px
- Espacement : 2rem
- Largeur max : 100px

## 🛠️ Maintenance

### Ajouter un Logo
1. Placez le fichier dans `/public/logos/`
2. Actualisez la page → Apparaît automatiquement

### Supprimer un Logo
1. Supprimez le fichier de `/public/logos/`
2. Actualisez la page → Disparaît automatiquement

### Optimiser les Logos
```bash
# Recommandations :
- Fond transparent (PNG/SVG)
- Taille : 200-400px hauteur
- Poids : < 50KB par logo
- Format vectoriel préférable (SVG)
```

## 🎭 Thématique

### Couleurs Industrie 5.0
- **Primary** : `#06b6d4` (Cyan tech)
- **Secondary** : `#f97316` (Orange industriel)  
- **Accent** : `#2563eb` (Bleu électrique)

### Effets Visuels
- Dégradés radiaux subtils
- Masques de fondu sur les bords
- Transitions cubic-bezier fluides
- Mode sombre/clair adaptatif

---

## 📋 Checklist Déploiement

- ✅ Logos placés dans `/public/logos/`
- ✅ Formats optimisés (PNG/SVG)
- ✅ Noms sans espaces
- ✅ Test responsive
- ✅ Génération statique : `npm run generate`

Le carrousel est **entièrement automatique** et s'adapte à vos besoins ! 🎯