import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useThemeModeStore = defineStore('themeMode', () => {
    const mode = ref('dark')

    const themeMode = computed(() => mode.value)

    function toggleThemeMode() {
        mode.value = themeMode.value === 'dark' ? 'light' : 'dark'
    }

    return { themeMode, toggleThemeMode }
})