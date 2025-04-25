import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './pages/UserList'
import NotFound from './pages/NotFound'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import UserDetail from './pages/UserDetail'
import UserRegistration from "./pages/UserRegistration"
import { UserProvider } from './components/useContext/UserContext'


function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path="/user" element={<UserRegistration />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
