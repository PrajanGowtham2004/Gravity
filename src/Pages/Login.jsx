import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    phone: '',
    password: ''
  })

  // Toast notification state
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' })

  const showNotification = (message, type = 'success', duration = 3000) => {
    setToast({ show: true, message, type })
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' })
    }, duration)
  }

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()

    // Retrieve registered users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('gravity_users') || '[]')

    // Find user with matching phone & password
    const matchedUser = existingUsers.find(
      (user) => user.phone === credentials.phone && user.password === credentials.password
    )

    if (matchedUser) {
      // Save logged-in user session
      localStorage.setItem('gravity_currentUser', JSON.stringify(matchedUser))

      // Show auto-dismissing banner notification without any OK button
      setToast({
        show: true,
        message: `Welcome back, ${matchedUser.name}! Logging you in...`,
        type: 'success'
      })

      // Automatically navigate to Home after 1.2 seconds
      setTimeout(() => {
        if (matchedUser.role === 'Teacher') {
          navigate('/teacher')
        } else {
          navigate('/student')
        }
      }, 1200)
    } else {
      showNotification('Invalid Phone number or Password!', 'error')
    }
    
  }

  return (
    <div className="relative log flex flex-wrap flex-row justify-center items-center h-screen bg-slate-50">
      {/* Floating Auto-dismiss Notification (No OK button needed) */}
      {toast.show && (
        <div 
          className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-3.5 rounded-xl shadow-2xl text-white font-medium transition-all duration-300 ${
            toast.type === 'error' ? 'bg-red-600 border border-red-500' : 'bg-emerald-600 border border-emerald-500'
          }`}
        >
          <span className="text-xl">{toast.type === 'error' ? '⚠️' : '✅'}</span>
          <span className="text-sm md:text-base">{toast.message}</span>
        </div>
      )}

      <form 
        onSubmit={handleLogin}
        className="loginform flex flex-col gap-4 p-8 rounded-2xl w-96 bg-white shadow-lg justify-center items-center"
      >
        <h2 className='text-blue-950 font-bold text-2xl tracking-wide'>Gravity Login</h2>
        
        <input 
          type="tel" 
          name="phone"
          placeholder='Phone' 
          value={credentials.phone}
          onChange={handleChange}
          className='p-2 rounded w-80 h-10 bg-blue-50 border border-blue-200 outline-blue-950' 
          required
        />
        
        <input 
          type="password" 
          name="password"
          placeholder='Password' 
          value={credentials.password}
          onChange={handleChange}
          className='p-2 rounded w-80 h-10 bg-blue-50 border border-blue-200 outline-blue-950' 
          required
        />
        
        <input 
          type="submit" 
          value="Login" 
          className='bg-blue-950 hover:bg-blue-900 transition-colors text-white p-2 rounded w-80 h-10 cursor-pointer text-center font-medium'
        />
        
        <p className="text-sm text-gray-600 mt-2">
          Don't have an account? &nbsp; 
          <Link to="/register" className='text-blue-800 font-semibold cursor-pointer hover:underline'>Register</Link>
        </p>
      </form>
    </div>
  )
}

export default Login
