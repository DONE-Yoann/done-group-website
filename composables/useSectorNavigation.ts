export interface SectorData {
  id: string
  title: string
  subtitle: string
  description: string
  color: string
  services: string[]
  advantages: string[]
  cta: string
}

export const sectorsData: SectorData[] = [
  {
    id: 'automation',
    title: 'Automatisation industrielle',
    subtitle: 'Solutions d\'automatisme pour optimiser vos processus de production',
    description: 'DONE Group conçoit et intègre des systèmes d\'automatisation sur mesure pour améliorer votre productivité, votre précision et votre sécurité industrielle. De la programmation d\'automates à l\'intégration de robots, nous accompagnons vos projets d\'automatisation.',
    color: 'var(--sector-automation)',
    services: [
      'Programmation et configuration d\'automates (Siemens, Schneider, Allen-Bradley)',
      'Intégration de systèmes robotiques et motion control',
      'Développement d\'interfaces homme-machine (HMI/SCADA)',
      'Câblage et mise en service d\'armoires électriques',
      'Systèmes de vision industrielle et contrôle qualité',
      'Maintenance préventive et corrective'
    ],
    advantages: [
      'Plus de 15 ans d\'expertise en automatisation',
      'Maîtrise de tous les standards industriels',
      'Solutions sur mesure adaptées à votre métier',
      'Support technique et formation inclus',
      'Amélioration mesurable de vos performances'
    ],
    cta: 'Votre projet d\'automatisation mérite une expertise reconnue. Parlons-en ensemble.'
  },
  {
    id: 'informatique',
    title: 'Informatique industrielle',
    subtitle: 'Digitalisez vos processus avec l\'industrie 4.0 et l\'IoT',
    description: 'DONE Group développe des solutions informatiques industrielles innovantes pour connecter, superviser et optimiser vos équipements. De la collecte de données IoT aux systèmes SCADA avancés, nous vous accompagnons dans votre transformation digitale.',
    color: 'var(--sector-informatique)',
    services: [
      'Développement de systèmes SCADA et supervision temps réel',
      'Solutions IoT industriel et connectivité machine',
      'Développement d\'applications métier sur mesure',
      'Intégration de bases de données industrielles (historisation)',
      'Solutions de traçabilité et MES (Manufacturing Execution System)',
      'Cybersécurité industrielle et architectures sécurisées'
    ],
    advantages: [
      'Développement full-stack avec technologies modernes',
      'Expertise en protocoles industriels (OPC UA, Modbus, Profinet...)',
      'Solutions cloud et on-premise adaptées à vos besoins',
      'Formation et accompagnement de vos équipes',
      'Maintenance évolutive et support technique'
    ],
    cta: 'L\'industrie 4.0 commence par une informatique industrielle maîtrisée. Découvrez nos solutions.'
  },
  {
    id: 'demolition',
    title: 'Démolition & Rénovation',
    subtitle: 'Solutions sécurisées de démolition et désamiantage industriel',
    description: 'DONE Red, filiale spécialisée du groupe, intervient sur vos projets de démolition industrielle, désamiantage et rénovation. Basée en Normandie, notre équipe certifiée assure des interventions sécurisées conformes aux réglementations les plus strictes.',
    color: 'var(--sector-demolition)',
    services: [
      'Désamiantage certifié (sous-sections 3 et 4)',
      'Démolition sélective et totale d\'installations industrielles',
      'Curage et déconstruction de bâtiments',
      'Gestion et évacuation des déchets spéciaux',
      'Préparation de sites pour reconstruction',
      'Diagnostic amiante et polluants avant travaux'
    ],
    advantages: [
      'Certifications et habilitations réglementaires à jour',
      'Équipements spécialisés et personnel formé',
      'Respect strict des normes environnementales',
      'Intervention rapide en Normandie et Île-de-France',
      'Gestion complète du projet de A à Z'
    ],
    cta: 'Votre site industriel nécessite une intervention spécialisée ? DONE Red vous accompagne en toute sécurité.'
  },
  {
    id: 'construction',
    title: 'Construction & Ingénierie',
    subtitle: 'Maîtrise d\'œuvre et réalisation de projets industriels complexes',
    description: 'DONE Group pilote vos projets de construction industrielle de l\'étude de faisabilité à la livraison. Notre équipe pluridisciplinaire maîtrise les enjeux techniques, réglementaires et économiques des projets industriels les plus exigeants.',
    color: 'var(--sector-construction)',
    services: [
      'Études de faisabilité et avant-projet industriel',
      'Maîtrise d\'œuvre et coordination de chantiers',
      'Construction de bâtiments industriels et logistiques',
      'Aménagement d\'ateliers et espaces de production',
      'Gestion des procédures administratives et permis',
      'Coordination des corps de métiers spécialisés'
    ],
    advantages: [
      'Approche globale du projet industriel',
      'Équipe pluridisciplinaire intégrée',
      'Respect des délais et budgets',
      'Conformité aux normes industrielles et environnementales',
      'Expérience en projets complexes et multi-sites'
    ],
    cta: 'Votre projet industriel mérite une approche intégrée. Construisons ensemble votre réussite.'
  },
  {
    id: 'mecanique',
    title: 'Mécanique de précision',
    subtitle: 'Conception et usinage de haute précision pour l\'industrie',
    description: 'L\'atelier mécanique DONE Group combine savoir-faire traditionnel et technologies modernes pour concevoir et usiner vos pièces mécaniques sur mesure. De la pièce unitaire à la petite série, nous garantissons une précision et une qualité irréprochables.',
    color: 'var(--sector-mecanique)',
    services: [
      'Usinage de précision 3, 4 et 5 axes (tournage, fraisage)',
      'Conception et bureau d\'études mécaniques',
      'Rectification cylindrique et plane de haute précision',
      'Assemblage mécanique et intégration système',
      'Prototypage rapide et validation de concept',
      'Rétro-ingénierie et reproduction de pièces obsolètes'
    ],
    advantages: [
      'Parc machines modernes et précises (tolérances μm)',
      'Bureau d\'études intégré avec logiciels CAO/FAO',
      'Maîtrise des matériaux spéciaux et alliages',
      'Traçabilité complète et contrôle qualité rigoureux',
      'Réactivité et flexibilité pour projets urgents'
    ],
    cta: 'Vos pièces mécaniques exigent la perfection ? Notre atelier relève le défi de la précision.'
  },
  {
    id: 'fabrication',
    title: 'Fabrication série',
    subtitle: 'Production optimisée de pièces en petites et moyennes séries',
    description: 'DONE Group industrialise la fabrication de vos pièces mécaniques en séries. Grâce à nos processus optimisés et notre approche qualité, nous garantissons reproductibilité, délais maîtrisés et coûts compétitifs pour vos productions récurrentes.',
    color: 'var(--sector-fabrication)',
    services: [
      'Industrialisation et optimisation de gammes de fabrication',
      'Production en série avec suivi temps réel',
      'Contrôle qualité statistique et traçabilité',
      'Gestion des approvisionnements et stock tampon',
      'Assemblage et conditionnement sur mesure',
      'Amélioration continue des processus'
    ],
    advantages: [
      'Processus industrialisés pour réduire les coûts',
      'Système qualité certifié et contrôles systématiques',
      'Flexibilité des volumes selon vos besoins',
      'Délais de livraison garantis et fiables',
      'Accompagnement dans l\'optimisation produit'
    ],
    cta: 'Vos séries de pièces méritent une production maîtrisée. Optimisons ensemble votre supply chain.'
  }
]

// État global partagé
const currentSector = ref<SectorData | null>(null)
const isTransitioning = ref(false)

export const useSectorNavigation = () => {
  const isHomeView = computed(() => currentSector.value === null)

  // Fonction pour scroll smooth vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const goToSector = async (sectorId: string) => {
    const sector = sectorsData.find(s => s.id === sectorId)
    if (sector && sector.id !== currentSector.value?.id) {
      // Démarrer la transition
      isTransitioning.value = true
      
      // Petit délai pour l'animation de sortie
      await new Promise(resolve => setTimeout(resolve, 150))
      
      // Changer le contenu
      currentSector.value = sector
      
      // Scroll vers le haut avec un délai pour laisser le DOM se mettre à jour
      await nextTick()
      scrollToTop()
      
      // Terminer la transition après un délai pour l'animation d'entrée
      setTimeout(() => {
        isTransitioning.value = false
      }, 300)
    }
  }

  const goToHome = async () => {
    if (currentSector.value) {
      // Démarrer la transition
      isTransitioning.value = true
      
      // Petit délai pour l'animation de sortie
      await new Promise(resolve => setTimeout(resolve, 150))
      
      // Changer le contenu
      currentSector.value = null
      
      // Scroll vers le haut
      await nextTick()
      scrollToTop()
      
      // Terminer la transition
      setTimeout(() => {
        isTransitioning.value = false
      }, 300)
    }
  }

  const getSectorColor = (sectorId: string): string => {
    const sector = sectorsData.find(s => s.id === sectorId)
    return sector?.color || 'var(--accent)'
  }

  return {
    currentSector: readonly(currentSector),
    isHomeView,
    isTransitioning: readonly(isTransitioning),
    goToSector,
    goToHome,
    getSectorColor,
    sectorsData
  }
}