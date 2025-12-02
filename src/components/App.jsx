import { useState } from 'react'
import reactLogo from '../assets/images/react.svg'
import viteLogo from '/vite.svg'
import '../styles/App.css'
import Header from '../components/Header'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from '../pages/Dashboard'
import Tools from '../pages/Tools'
import Analytics from '../pages/Analytics'
import Settings from '../pages/Settings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
