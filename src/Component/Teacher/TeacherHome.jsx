import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TeacherHome = () => {
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
    <div className="min-h-screen bg-slate-50 flex flex-col">
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

      {/* Main Content */}
      <div className="flex-1 p-8 max-w-5xl mx-auto w-full">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-8">
          <h1 className="text-2xl font-bold text-blue-950">
            Welcome, {currentUser ? currentUser.name : 'Teacher'}! 👋
          </h1>
          <p className="text-gray-600 mt-1">Here is your daily classroom management overview.</p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-950">Daily Attendance</h3>
              <p className="text-sm text-gray-500 mt-2">Mark student attendance for your classes and review records.</p>
            </div>
            <button className="mt-6 w-full py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-900 transition-colors text-sm font-medium">
              Take Attendance
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-950">Enter Marks</h3>
              <p className="text-sm text-gray-500 mt-2">Record scores for term tests, assignments, and exams.</p>
            </div>
            <button className="mt-6 w-full py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-900 transition-colors text-sm font-medium">
              Update Marks
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-950">Student Remarks</h3>
              <p className="text-sm text-gray-500 mt-2">Add feedback and behavioral notes for students and parents.</p>
            </div>
            <button className="mt-6 w-full py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-900 transition-colors text-sm font-medium">
              Add Remarks
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherHome
