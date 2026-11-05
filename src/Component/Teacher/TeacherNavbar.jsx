import React from 'react'
import {useNavigate, NavLink} from 'react-router-dom'
import {useState, useEffect} from 'react'

const TeacherNavbar = () => {

    const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('gravity_currentUser')
    if (saved) {
      setCurrentUser(JSON.parse(saved))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('gravity_currentUser')
    navigate('/')
  }

  return (
    <>
        
      {/* Teacher Top Navigation */}
      <div className="bg-blue-950 text-white flex justify-between items-center p-4 shadow-md">
        <div className="text-xl font-bold tracking-wider">Gravity <span className="text-blue-300 text-sm font-normal">| Teacher Portal</span></div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="font-semibold">{currentUser ? currentUser.name : 'Teacher'}</p>
            <p className="text-xs text-blue-200">Role: Teacher</p>
          </div>
          <button 
            onClick={handleLogout}
            title="Logout"
            className="p-1 px-3 cursor-pointer rounded-lg bg-red-500 hover:bg-red-600 transition-colors text-white text-sm font-medium"
          >
            Logout ↷
          </button>
        </div>
      </div>
      

      <div className="subnavbar bg-blue-200 border-b border-blue-300 flex flex-row justify-evenly p-2 rounded">
          <div className="attendance">
            <NavLink to="/SetAttendance" className={({ isActive }) => isActive ? "border-b-2 border-blue-950 text-blue-950 font-semibold" : "text-gray-700 hover:text-blue-950"}>
              Attendance
            </NavLink>
          </div>
          <div className="marks">
            <NavLink to="/SetMarks" className={({ isActive }) => isActive ? "border-b-2 border-blue-950 text-blue-950 font-semibold" : "text-gray-700 hover:text-blue-950"}>
              Marks & Remarks
            </NavLink>
          </div>
          <div className="editinfo">
            <NavLink to="/SetEdit   " className={({ isActive }) => isActive ? "border-b-2 border-blue-950 text-blue-950 font-semibold" : "text-gray-700 hover:text-blue-950"}>
              Edit Information
            </NavLink>
          </div>
        </div>
    </>
  )
}

export default TeacherNavbar