import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import BoardList from './pages/BoardList';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import BoardEnroll from './pages/BoardEnroll';
import NotFound from './pages/NotFound';
import UserEnroll from './pages/UserEnroll';
import UserInfo from './pages/UserInfo';
import BoardDetail from './pages/BoardDetail';
import BoardEdit from './pages/BoardEdit';


function App() {
  
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<BoardList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userEnroll" element={<UserEnroll />} />
        <Route path='/userInfo' element={<UserInfo/>} />
        <Route path="/enrollBoard" element={<BoardEnroll />} />
        <Route path='/boards/:board_no' element={<BoardDetail />} />
        <Route path='/boards/edit/:board_no' element={<BoardEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
