import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  startEditing: (recipe) =>
    set(() => ({
      editingId: recipe.id,
      formData: { title: recipe.title, description: recipe.description },
    })),

  cancelEditing: () =>
    set(() => ({
      editingId: null,
      formData: { title: "", description: "" },
    })),

  updateFormData: (name, value) =>
    set((state) => ({
      formData: { ...state.formData, [name]: value },
    })),

  saveRecipe: () =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === state.editingId
          ? { ...recipe, ...state.formData }
          : recipe
      ),
      editingId: null,
      formData: { title: "", description: "" },
    })),
}));

export default useRecipeStore;
