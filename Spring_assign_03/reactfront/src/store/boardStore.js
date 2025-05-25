import { create } from 'zustand';
import axios from 'axios';

const useBoardStore = create((set) => ({
  boards: [],
  filteredBoards: [],
  loading: false,
  error: null,

  getBoards: async () => {
    set({ loading: true, error: null });

    try {
      const res = await axios.get('http://localhost:8888/api/boards');

      const formatted = res.data
      .sort((a, b) => b.board_no - a.board_no)
      .map((board) => ({
        ...board,
        create_date: board.create_date.slice(0, 10),
      }));

      set({
        boards: formatted,
        filteredBoards: formatted,
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
        const title = board.board_title?.toLowerCase() || '';
        const content = board.board_content?.toLowerCase() || '';
        const writer = board.board_writer?.toLowerCase() || '';

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
    const newBoard = {
      ...formData,
      board_writer: userId || '알 수 없음',
    };

    await axios.post('http://localhost:8888/api/boards', newBoard);
    set((state) => ({ boards: [...state.boards, newBoard] }));
  },

  getBoardDetail: async (boardNo) => {
    try {
      const res = await axios.get(`http://localhost:8888/api/boards/${boardNo}`);
      const formattedData = {
        ...res.data,
        create_date: res.data.create_date.slice(0, 10),
      };

    return formattedData;
    } catch (error) {
      console.error('게시글 가져오기 실패:', error);

      throw new Error('게시글 정보를 가져오는 데 실패했습니다.');
    }
  },

  updateBoard: async (boardNo, updatedData) => {
    try {
      await axios.patch(`http://localhost:8888/api/boards/${boardNo}`, updatedData);
    } catch (error) {
      console.error('게시글 수정 실패:', error);
      throw new Error('게시글 수정에 실패했습니다.');
    }
  },

  deleteBoard: async (boardNo) => {
    try {
      await axios.delete(`http://localhost:8888/api/boards/${boardNo}`);
      set((state) => ({
        boards: state.boards.filter((board) => board.board_no !== boardNo),
        filteredBoards: state.filteredBoards.filter((board) => board.board_no !== boardNo),
      }));
    } catch (error) {
      console.error('게시글 삭제 실패:', error);
      throw new Error('게시글 삭제에 실패했습니다.');
    }
  },
}));

export default useBoardStore;
