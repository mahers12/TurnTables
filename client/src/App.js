import './App.css'
import { Route, Routes } from 'react-router'
import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import Feed from './pages/Feed'

function App() {
  const [user, setUser] = useState(null)
  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    // toggleAuthenticated(false)
    localStorage.clear()
  }

  return (
    <div className="App">
      <Navbar
        // authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
