import { create } from "zustand";

//This is the zustand store
const useSearchStore = create((set) => ({
  //1 Initial value for input field
  searchQuery: "",

  //2 Function to update the search query
  setSearchQuery: (query) => set({ searchQuery: query }),

  //3 Function to handle form submission
  submitSearch: () => {
    set((state) => {
      console.log("Searching for:", state.searchQuery); //pretend API call
      return state; //return the current state (no change needed)
    });
  },
}));

export default useSearchStore;
