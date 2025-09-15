import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    sections: defineCollection({
      name: 'sections',
      pattern: 'sections/**/*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        eyebrow: z.string().optional(),
        features: z.array(z.string()).optional(),
        stats: z.object({
          number: z.string(),
          label: z.string()
        }).optional()
      })
    })
  }
})