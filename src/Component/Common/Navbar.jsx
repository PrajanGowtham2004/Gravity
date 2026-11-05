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
          <div className="logo font-bold text-xl tracking-wide">Gravity</div>
          <div className="sec flex flex-row items-center gap-8">
            <button className="cursor-pointer hover:text-blue-300" onClick={() => scrollToSection(Homeref)}>Home</button>
            <button className="cursor-pointer hover:text-blue-300" onClick={() => scrollToSection(Aboutref)}>About</button>
            <button className="cursor-pointer hover:text-blue-300" onClick={() => scrollToSection(Contactref)}>Contact</button>
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

        <div className="subnavbar bg-blue-200 border-b border-blue-300 flex flex-row justify-evenly p-2 rounded">
          <div className="attendance">
            <NavLink to="/Attendance" className={({ isActive }) => isActive ? "border-b-2 border-blue-950 text-blue-950 font-semibold" : "text-gray-700 hover:text-blue-950"}>
              Attendance
            </NavLink>
          </div>
          <div className="marks">
            <NavLink to="/Marks" className={({ isActive }) => isActive ? "border-b-2 border-blue-950 text-blue-950 font-semibold" : "text-gray-700 hover:text-blue-950"}>
              Marks
            </NavLink>
          </div>
          <div className="remarks">
            <NavLink to="/Remarks" className={({ isActive }) => isActive ? "border-b-2 border-blue-950 text-blue-950 font-semibold" : "text-gray-700 hover:text-blue-950"}>
              Remarks
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
