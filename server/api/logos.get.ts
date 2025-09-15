import { readdir } from 'fs/promises'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  try {
    const publicDir = join(process.cwd(), 'public', 'logos')
    
    // Read directory contents
    let files: string[] = []
    try {
      files = await readdir(publicDir)
    } catch (error) {
      // Directory doesn't exist or is empty
      return []
    }
    
    // Filter for image files only
    const imageExtensions = ['png', 'jpg', 'jpeg', 'svg', 'webp', 'gif']
    const logoFiles = files.filter(file => {
      const extension = file.toLowerCase().split('.').pop()
      return extension && imageExtensions.includes(extension)
    })
    
    // Return logo data
    const logos = logoFiles.map(filename => {
      const name = filename
        .split('.')[0] // Remove extension
        .replace(/[-_]/g, ' ') // Replace dashes/underscores with spaces
        .replace(/\b\w/g, l => l.toUpperCase()) // Capitalize first letter of each word
      
      return {
        name,
        filename,
        url: `/logos/${filename}`
      }
    })
    
    return logos
  } catch (error) {
    // Log error in development only
    if (process.env.NODE_ENV === 'development') {
      console.error('Error reading logos directory:', error)
    }
    return []
  }
})