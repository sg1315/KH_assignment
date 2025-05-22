import { create } from 'zustand';
import axios from 'axios';
import dayjs from 'dayjs';

const useBoardStore = create((set) => ({
  boards: [],
  filteredBoards: [],
  loading: false,
  error: null,

  getBoards: async () => {
    set({ loading: true, error: null });

    try {
      const res = await axios.get('http://localhost:3001/boards');

      const sorted = res.data.sort((a, b) => b.id - a.id);
      set({
        boards: sorted,
        filteredBoards: sorted,
        loading: false,
      });
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },

  filterByCategory: (category) => {
    set((state) => {
      if (category === '전체') {
        return { filteredBoards: state.boards };
      } else {
        const filtered = state.boards.filter((board) => board.category === category);
        return { filteredBoards: filtered };
      }
    });
  },

  searchBoards: (type, keyword) => {
    set((state) => {
      const lowerKeyword = keyword.toLowerCase().trim();

      const filtered = state.boards.filter((board) => {
        const title = board.title?.toLowerCase() || '';
        const content = board.content?.toLowerCase() || '';
        const writer = board.userId?.toLowerCase() || '';

        switch (type) {
          case 'title':
            return title.includes(lowerKeyword);
          case 'content':
            return content.includes(lowerKeyword);
          case 'writer':
            return writer.includes(lowerKeyword);
          default:
            return title.includes(lowerKeyword) || content.includes(lowerKeyword);
        }
      });

      return { filteredBoards: filtered };
    });
  },

  addBoard: async (formData, userId) => {
    const res = await axios.get('http://localhost:3001/boards');
    const boards = res.data;
    const maxId = boards.length > 0 ? Math.max(...boards.map((board) => board.id)) : 0;

    const newBoard = {
      ...formData,
      id: (maxId + 1).toString(),
      userId: userId || '알 수 없음',
      createDate: dayjs().format('YY.MM.DD'),
    };

    await axios.post('http://localhost:3001/boards', newBoard);
    set((state) => ({ boards: [...state.boards, newBoard] }));
  },

  getBoardDetail: async (boardId) => {
    try {
      const res = await axios.get(`http://localhost:3001/boards/${boardId}`);
      return res.data;
    } catch (error) {
      console.error('게시글 가져오기 실패:', error);
      throw new Error('게시글 정보를 가져오는 데 실패했습니다.');
    }
  },

  updateBoard: async (id, updatedData) => {
    try {
      await axios.patch(`http://localhost:3001/boards/${id}`, updatedData);
    } catch (error) {
      console.error('게시글 수정 실패:', error);
      throw new Error('게시글 수정에 실패했습니다.');
    }
  },

  deleteBoard: async (id) => {
    try {
      await axios.delete(`http://localhost:3001/boards/${id}`);
      set((state) => ({
        boards: state.boards.filter((board) => board.id !== id),
        filteredBoards: state.filteredBoards.filter((board) => board.id !== id),
      }));
    } catch (error) {
      console.error('게시글 삭제 실패:', error);
      throw new Error('게시글 삭제에 실패했습니다.');
    }
  },
}));

export default useBoardStore;
