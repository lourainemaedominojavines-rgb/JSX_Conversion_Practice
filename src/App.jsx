import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Member from './components/Member'

function App() {

  return (
    <>
    <main>
      <h1>Our Team</h1>
      <Member name = "Ana" role = "Designer"></Member>
      <Member name = "Ben" role = "Developer"></Member>
    </main>
    </>
  );
  
  
}

export default App
