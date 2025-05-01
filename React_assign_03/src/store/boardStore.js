import axios from 'axios';
import { create } from 'zustand';

const useBoardStore = create((set) => ({
  boards: [],
  loading: false,
  error: null,

  getBoards: async () => {
    set({ loading: true, error: null });

    try {
      const res = await axios.get('http://localhost:3001/boards');

      set({ boards: res.data, loading: false });
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },
}));

export default useBoardStore;
