export const useTheme = () => {
  const isDark = ref(false)

  // Initialiser le thème depuis localStorage ou préférence système
  const initTheme = () => {
    if (process.client) {
      const stored = localStorage.getItem('theme')
      if (stored) {
        isDark.value = stored === 'dark'
      } else {
        // Détecter la préférence système
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      }
      updateTheme()
    }
  }

  // Mettre à jour le thème
  const updateTheme = () => {
    if (process.client) {
      const html = document.documentElement
      if (isDark.value) {
        html.classList.add('dark')
        html.classList.remove('light')
      } else {
        html.classList.add('light')
        html.classList.remove('dark')
      }
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }
  }

  // Toggle le thème
  const toggleTheme = () => {
    isDark.value = !isDark.value
    updateTheme()
  }

  // Watcher pour les changements
  watch(isDark, updateTheme)

  // Initialiser au montage
  onMounted(() => {
    initTheme()
  })

  return {
    isDark: readonly(isDark),
    toggleTheme
  }
}