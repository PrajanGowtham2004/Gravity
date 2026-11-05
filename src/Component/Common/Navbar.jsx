import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = ({ Homeref, Aboutref, Contactref }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('gravity_currentUser')
    if (saved) {
      setUser(JSON.parse(saved))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('gravity_currentUser')
    navigate('/')
  }

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  return (
    <>
      <div className="navtotal sticky top-0 z-50">
        <div className="navmain bg-blue-950 text-white flex flex-row justify-between p-4 items-center ">
          <button className="logo font-bold text-xl tracking-wide" onClick={() => navigate('/student')}>
            Gravity
          </button>
          <div className="sec flex flex-row items-center gap-8">
            <button className="cursor-pointer hover:text-blue-300" onClick={() => { navigate('/student'); scrollToSection(Homeref);  }}>Home</button>
            <button className="cursor-pointer hover:text-blue-300" onClick={() => { navigate('/student'); scrollToSection(Aboutref); }}>About</button>
            <button className="cursor-pointer hover:text-blue-300" onClick={() => { navigate('/student'); scrollToSection(Contactref); }}>Contact</button>
            <span className="font-semibold text-blue-200">
              {user ? user.name : 'Student'}
            </span>
            <button 
              onClick={handleLogout}
              title="Logout" 
              className='p-1 px-2 cursor-pointer text-center rounded-xl bg-red-500 hover:bg-red-600 transition-colors text-white font-bold'
            >
              ↷
            </button>
          </div>
        </div>

       
      </div>
    </>
  )
}

export default Navbar
