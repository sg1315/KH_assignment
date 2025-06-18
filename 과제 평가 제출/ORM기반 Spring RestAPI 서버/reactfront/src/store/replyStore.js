import { create } from 'zustand';
import axios from 'axios';
// import dayjs from 'dayjs';

const useReplyStore = create((set) => ({
  replys: [],
  loading: false,
  error: null,

  getReplysByBoardId: async (boardNo) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(`http://localhost:8888/api/replys/${boardNo}`);
      set({ replys: res.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  addReply: async (newReply) => {
    try {
      const res = await axios.post('http://localhost:8888/api/replys', newReply);
      set((state) => ({
        replys: [...state.replys, res.data],
      }));
    } catch (error) {
      console.error('댓글 추가 실패:', error);
    }
  },
}));

export default useReplyStore;
