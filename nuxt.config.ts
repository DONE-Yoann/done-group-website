// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-08-21',
  devtools: { enabled: true },
  
  // Modules
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/content'
  ],

  // Nuxt Content configuration
  content: {
    // Configuration Nuxt Content
    highlight: {
      theme: 'github-dark'
    },
    // Studio configuration
    studio: {
      enabled: true
    }
  },

  // Configuration de l'application
  app: {
    head: {
      title: 'DONE Group — Experts en automatisation et solutions industrielles',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'DONE Group : spécialiste en automatisation, informatique industrielle, mécanique de précision, construction et rénovation. Solutions sur mesure pour l\'industrie.' 
        },
        { 
          name: 'keywords', 
          content: 'automatisation, informatique industrielle, mécanique, construction, rénovation, industrie 4.0, robotique, IoT' 
        },
        { name: 'author', content: 'DONE Group' },
        { name: 'robots', content: 'index, follow' },
        // Open Graph
        { property: 'og:title', content: 'DONE Group — Experts en automatisation et solutions industrielles' },
        { 
          property: 'og:description', 
          content: 'Spécialiste en automatisation, informatique industrielle, mécanique de précision, construction et rénovation.' 
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://done.group' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Source+Sans+Pro:wght@300;400;600;700&display=swap' 
        },
        { 
          rel: 'icon', 
          type: 'image/svg+xml', 
          href: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 12L12 4L20 12L12 20L4 12Z" fill="%23ff3b30"/></svg>' 
        }
      ]
    }
  },

  // Configuration des composants
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],

  // Auto-import des composables
  imports: {
    dirs: [
      'composables'
    ]
  },

  // Configuration CSS
  css: [
    '~/assets/css/main.css',
    '~/assets/css/components.css',
    '~/assets/css/header.css'
  ],


  // Configuration des images
  image: {
    quality: 80,
    format: ['webp', 'avif', 'jpg']
  },

  // Configuration TypeScript
  typescript: {
    strict: true
  },

  // Configuration du build - désactiver le prerender pour le moment
  nitro: {
    prerender: {
      failOnError: false
    }
  },

  // Configuration du développement
  devServer: {
    port: 3000
  }
})