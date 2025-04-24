import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './pages/UserList'
import NotFound from './pages/NotFound'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import UserDetail from './pages/UserDetail'
import UserRegistration from "./pages/UserRegistration"


function App() {

  const [userData, setUsers] = useState([
    {
      id: "user01",
      name: '김승기',
      age: 27,
      isOnline: true
    }, {
      id: "user02",
      name: '둘리',
      age: 42,
      isOnline: true
    }, {
      id: "user03",
      name: '또치',
      age: 44,
      isOnline: false
    }, {
      id: "user04",
      name: '도우너',
      age: 42,
      isOnline: true
    }, {
      id: "user05",
      name: '마이콜',
      age: 61,
      isOnline: false
    }, {
      id: "user06",
      name: '고길동',
      age: 82,
      isOnline: true
    }
  ]);

  return (
    <BrowserRouter>
      <nav>
          <Link to="/">홈</Link>
          <Link to="/user">유저 등록</Link>
      </nav>
      <Routes>
          <Route path='/' element={<UserList users={userData}/>} />
          <Route path='/user/:id' element={<UserDetail users={userData}/>}/>
          <Route path='/user' element={<UserRegistration users={userData} setUsers={setUsers}/>}/>
          <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
