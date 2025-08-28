# 📝 Guide de gestion du contenu - DONE Group

## 🎯 Vue d'ensemble

Le site DONE Group utilise **Nuxt Content** pour permettre la modification des textes sans toucher au code. Tous les textes sont maintenant stockés dans des fichiers markdown dans le dossier `content/`.

## 📁 Structure des fichiers de contenu

```
content/
├── site-config.md          # Configuration générale du site
└── sections/
    ├── hero.md             # Section d'accueil (Hero)
    ├── about.md            # Section "À propos"
    ├── contact.md          # Section contact
    └── footer.md           # Footer du site
```

## ✏️ Comment modifier les textes

### 1. **Section Hero (Accueil)**
**Fichier :** `content/sections/hero.md`

```yaml
---
badge:
  icon: "i-heroicons-bolt"
  text: "Votre badge"

title:
  main: "Début du titre"
  highlight: "mot en surbrillance"
  subtitle: "fin du titre"

description: "Votre description principale"

stats:
  - number: "128"
    label: "clients accompagnés"
    animated: true  # Animation du compteur
---
```

### 2. **Section À propos**
**Fichier :** `content/sections/about.md`

```yaml
---
eyebrow: "À propos"
title: "Qui sommes‑nous ?"
description: "Description de votre équipe..."

features:
  - "Premier avantage"
  - "Deuxième avantage"
  - "Troisième avantage"
---
```

### 3. **Section Contact**
**Fichier :** `content/sections/contact.md`

```yaml
---
title: "Un projet industriel ?"
description: "Votre message d'appel à l'action..."

actions:
  - type: "primary"
    text: "contact@done.group"
    href: "mailto:contact@done.group"
  - type: "ghost"
    text: "+33 7 45 28 75 09"
    href: "tel:+33745287509"
---
```

### 4. **Footer**
**Fichier :** `content/sections/footer.md`

```yaml
---
brand:
  name: "DONE Group"
  description: "Votre tagline"

links:
  services:
    title: "Services"
    items:
      - "Service 1"
      - "Service 2"

contact:
  email: "contact@done.group"
  phone: "+33 7 45 28 75 00"
---
```

## 🔧 Comment procéder

1. **Ouvrir le fichier** correspondant à la section à modifier
2. **Modifier les valeurs** entre guillemets dans la section `---`
3. **Enregistrer** le fichier
4. **Recharger** le navigateur - les changements apparaissent immédiatement

## ⚠️ Points importants

- **Ne pas toucher** aux clés (texte avant les `:`)
- **Garder les guillemets** autour des valeurs textuelles
- **Respecter l'indentation** (espaces en début de ligne)
- **Les icônes** utilisent le format Heroicons (`i-heroicons-nom`)

## 🎨 Icônes disponibles

Exemples d'icônes Heroicons couramment utilisées :
- `i-heroicons-bolt` ⚡
- `i-heroicons-rocket-launch` 🚀
- `i-heroicons-phone` 📞
- `i-heroicons-envelope` ✉️
- `i-heroicons-cpu-chip` 🔧

**Liste complète :** [heroicons.com](https://heroicons.com)

## 🚀 Avantages de cette solution

✅ **Modification simple** - Édition directe dans les fichiers markdown  
✅ **Pas de code** - Aucune connaissance technique requise  
✅ **Aperçu immédiat** - Changements visibles instantanément  
✅ **Versioning** - Historique des modifications avec Git  
✅ **Performance** - Génération statique optimisée  

## 🆘 Support

Pour toute question sur la modification du contenu :
1. Consulter ce guide
2. Tester les modifications en mode développement
3. Contacter l'équipe technique si problème

## 🔄 Commandes de développement

```bash
# Démarrer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la version de production
npm run preview
```

---

**Mise à jour :** Août 2024  
**Version :** Nuxt Content v2