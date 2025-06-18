import { create } from 'zustand';
import axios from 'axios';

const useUserStore = create((set, get) => ({
  users: [],
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,

  getUsers: async () => {
    set({ loading: true, error: null });

    try {
      const res = await axios.get('http://localhost:3001/users');

      set({ users: res.data, loading: false });
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },

  login: async (id, password) => {
  set({ loading: true, error: null });

  try {
    const res = await axios.post(
      'http://localhost:8888/api/members/login',
      {
        user_id: id,
        user_pwd: password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const user = res.data;

    if (user && user.user_id) {
      set({
        user,
        isAuthenticated: true,
        loading: false,
        error: null,
      });
    } else {
      set({
        error: '아이디나 비밀번호가 잘못되었습니다.',
        loading: false,
        isAuthenticated: false,
      });
    }
  } catch (error) {
    console.error('로그인 오류:', error);
    set({
      error: '로그인 중 오류가 발생했습니다.',
      loading: false,
      isAuthenticated: false,
      });
    }
  },

  logout: () => set({
    user: null,
    isAuthenticated: false,
    error: null,
  }),

  getLoginUser: () => {
    return get().user;
  },

  registerUser: async (userData) => {
    try {
      set({ loading: true });
  
      const res = await axios.post('http://localhost:8888/api/members', userData);
      set((state) => ({
        users: [...state.users, res.data],
        loading: false,
      }));
  
      alert('회원가입이 완료되었습니다.');
    } catch (error) {
      set({ loading: false, error: error.message });
      alert('회원가입 실패');
    }
  },
  

}));

export default useUserStore;
