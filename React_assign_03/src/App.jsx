import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import BoardList from './pages/BoardList';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BoardGame } from './pages/BoardGame';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<BoardList />} />
        <Route path="/GameBoards" element={<BoardGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
