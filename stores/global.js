
export const useGlobalStore = defineStore('global', {
    state: () => ({
      cartsArray: [],
    }),
    persist: true, // ✅ If you're using `pinia-plugin-persistedstate`
  })