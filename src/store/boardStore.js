import { create } from 'zustand'

export const useBoardStore = create((set) => ({
  theme: '',
  tables: [],
  setTheme: (theme) => set({ theme }),
  setTables: (tables) => set({ tables })
}))
