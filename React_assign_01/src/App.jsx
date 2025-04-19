import { useState } from 'react'
import './App.css'
import ProfileList from './components/ProfileList'

const profileData = [{
  name: '김승기',
  age: 27,
  isOnline: true
}, {
  name: '둘리',
  age: 42,
  isOnline: true
}, {
  name: '또치',
  age: 44,
  isOnline: false
}, {
  name: '도우너',
  age: 42,
  isOnline: true
}, {
  name: '마이콜',
  age: 61,
  isOnline: false
}, {
  name: '고길동',
  age: 82,
  isOnline: true
}]


function App() {

  return (
    <>
      <ProfileList profiles={profileData} />
    </>
  )
}

export default App
