# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run generate` - Generate static site

### Linting and Type Checking
The project uses ESLint with Nuxt's configuration. Run linting checks with:
- Check `.nuxt/eslint.config.mjs` for the generated ESLint configuration
- TypeScript checking is handled automatically by Nuxt during build

### Deployment for Synology DS214 NAS
**IMPORTANT:** To deploy on the Synology DS214 NAS, always use:
```bash
npm run generate
```
This creates a static build in `.output/public/` directory that's compatible with the NAS Web Station. The build includes:
- Complete Industrie 5.0 theme (cyan/orange/blue tech colors)
- Optimized animations and industrial effects
- Static HTML/CSS/JS files ready for upload
- Total size: ~2MB (700KB compressed)

See `DEPLOYMENT_NOTES.md` for detailed deployment instructions.

## Architecture Overview

This is a **Nuxt 3 application** for DONE Group's corporate website, built with Vue 3, TypeScript, and Tailwind CSS.

### Key Technologies
- **Nuxt 3** with SSR/SSG capabilities
- **Nuxt UI** for component library
- **Tailwind CSS** with custom design system
- **TypeScript** with strict mode enabled
- **Vue 3 Composition API**

### Project Structure
- `app.vue` - Main application entry point (single-page layout)
- `components/` - Vue components organized by function:
  - `layout/` - Layout components (AppHeader)
  - `sections/` - Page sections (HeroSection)
- `content/site-data.json` - Centralized site data and content
- `server/api/` - Server-side API routes
- `assets/css/main.css` - Custom CSS (currently commented out in config)

### Data Management
The application uses a **centralized data approach**:
- All site content is stored in `content/site-data.json`
- Data includes: services, company info, stats, contact details
- Accessed via server API route at `/api/site-data`

### Design System
Custom Tailwind configuration includes:
- **Brand colors**: Primary (#ff3b30), Secondary (#06b6d4), Accent (#7c3aed)
- **Custom animations**: fade-in, slide-in, pulse variations
- **Custom shadows**: glow effects for brand colors
- **Extended spacing and typography scales**

### Component Architecture
- **Single-page application** structure in `app.vue`
- **Modular sections**: Each major section is a separate component
- **Nuxt UI integration**: Uses Nuxt UI components with custom theming
- **Responsive design**: Mobile-first approach

### Development Notes
- **CSS configuration**: Main CSS file is currently commented out in `nuxt.config.ts` (line 59-62)
- **ESLint**: Uses Nuxt's auto-generated configuration
- **TypeScript**: Strict mode enabled, uses Nuxt's TypeScript project references
- **Images**: Configured for WebP/AVIF optimization with quality 80
- **Port**: Development server runs on port 3000

### Legacy Files
The `legacy-files/` directory contains the original static HTML/CSS/JS implementation for reference but is not part of the active application.