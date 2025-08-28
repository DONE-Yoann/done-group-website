<template>
  <button
    @click="toggleTheme"
    class="theme-toggle"
    :class="{ 'dark': isDark }"
    title="Changer de thème"
  >
    <div class="toggle-track">
      <div class="toggle-thumb">
        <div class="toggle-icon">
          <UIcon v-if="isDark" name="i-heroicons-moon" class="icon" />
          <UIcon v-else name="i-heroicons-sun" class="icon" />
        </div>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<style scoped>
.theme-toggle {
  position: relative;
  width: 60px;
  height: 32px;
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
}

.toggle-track {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.1),
    0 4px 12px rgba(0, 0, 0, 0.1);
}

.theme-toggle.dark .toggle-track {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.3),
    0 4px 12px rgba(0, 0, 0, 0.2);
}

.toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-toggle.dark .toggle-thumb {
  transform: translateX(28px);
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.1);
}

.toggle-icon {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 14px;
  height: 14px;
  transition: all 0.3s ease;
}

.theme-toggle:not(.dark) .icon {
  color: #f59e0b;
  filter: drop-shadow(0 0 4px rgba(245, 158, 11, 0.4));
}

.theme-toggle.dark .icon {
  color: #e2e8f0;
  filter: drop-shadow(0 0 4px rgba(226, 232, 240, 0.4));
}

.theme-toggle:hover .toggle-track {
  transform: scale(1.05);
}

.theme-toggle:hover .toggle-thumb {
  transform: scale(1.1);
}

.theme-toggle.dark:hover .toggle-thumb {
  transform: translateX(28px) scale(1.1);
}

.theme-toggle:active .toggle-track {
  transform: scale(0.98);
}

.theme-toggle:active .toggle-thumb {
  transform: scale(0.95);
}

.theme-toggle.dark:active .toggle-thumb {
  transform: translateX(28px) scale(0.95);
}
</style>