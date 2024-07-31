// src/store/index.js
import create from 'zustand';

const useStore = create((set) => ({
  levels: [
    { name: "Level 1: Linux Basics" },
    { name: "Level 2: File Permissions" },
    { name: "Level 3: Processes Management" },
  ],
  level: 1,
  tasksCompleted: 0,
  completeTask: () => set((state) => ({ tasksCompleted: state.tasksCompleted + 1 })),
  nextLevel: () => set((state) => ({ level: state.level + 1, tasksCompleted: 0 })),
}));

export default useStore;
