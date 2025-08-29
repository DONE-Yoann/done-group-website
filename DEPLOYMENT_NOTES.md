# 📝 Notes de Déploiement - DONE Group Website

## 🚀 Commande de Génération pour NAS

**Pour déployer sur Synology DS214 :**
```bash
npm run generate
```

Cette commande génère le site statique dans `.output/public/` qui est prêt pour le déploiement sur NAS.

## 📂 Déploiement sur Synology DS214

### Étapes :
1. Exécuter `npm run generate`
2. Copier tout le contenu de `.output/public/` 
3. Uploader sur Web Station du NAS
4. Point d'entrée : `index.html`

### Caractéristiques du Build :
- **Taille** : ~2MB total, ~700KB compressé
- **Format** : Site statique (HTML/CSS/JS)
- **Compatibilité** : Serveurs HTTP statiques
- **Thème** : Industrie 5.0 (cyan/orange/bleu)

## ⚡ Optimisations Appliquées

### Thème Industrie 5.0 :
- ✅ Couleurs tech : `#06b6d4`, `#f97316`, `#2563eb`
- ✅ Backgrounds industriels avec grilles cyber
- ✅ Animations optimisées (0.1s timing)
- ✅ Effets de lueur suivant la souris
- ✅ Light/Dark mode fonctionnels
- ✅ **Carrousel de logos clients** automatique

### Résolutions de Conflits CSS :
- ✅ Eyebrow text : Conflit résolu dans `components.css`
- ✅ Animations secteurs : Spécificité CSS équilibrée
- ✅ Architecture documentée dans `CSS_ARCHITECTURE.md`

## 🔄 Maintenance

**Si modifications du code :**
1. Faire les changements
2. Tester avec `npm run dev`
3. Regénérer avec `npm run generate`
4. Redéployer le contenu de `.output/public/`

**Gestion des logos clients :**
1. Ajouter/supprimer des logos dans `/public/logos/`
2. Formats supportés : PNG, SVG, JPG, WebP
3. Les logos apparaissent automatiquement dans le carrousel
4. Voir `LOGO_CAROUSEL_GUIDE.md` pour les détails

---
*Dernière génération : 29 août 2024*
*Status : ✅ Prêt pour production sur DS214*