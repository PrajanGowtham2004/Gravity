import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    role: '',
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()

    if (!formData.role) {
      showNotification('Please select a role (Teacher or Student)', 'error')
      return
    }

    // Get existing registered users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('gravity_users') || '[]')

    // Check if phone number is already registered
    const alreadyExists = existingUsers.some((u) => u.phone === formData.phone)
    if (alreadyExists) {
      showNotification('A user with this phone number is already registered!', 'error')
      return
    }

    // Add new user to the list
    const newUser = {
      ...formData,
      id: Date.now()
    }
    const updatedUsers = [...existingUsers, newUser]

    // Save to localStorage
    localStorage.setItem('gravity_users', JSON.stringify(updatedUsers))

    // Show auto-dismissing success banner and redirect to login
    setToast({
      show: true,
      message: 'Registration successful! Redirecting to login...',
      type: 'success'
    })

    setTimeout(() => {
      navigate('/')
    }, 1200)
  }

  return (
    <div className="relative reg flex flex-wrap flex-row justify-center items-center h-screen bg-slate-50">
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
        onSubmit={handleRegister} 
        className="rgiesterform flex flex-col gap-3 p-8 rounded-2xl w-96 bg-white shadow-lg justify-center items-center"
      >
        <h2 className='text-blue-950 font-bold text-2xl tracking-wide'>Gravity Register</h2>
        
        <input 
          type="text" 
          name="name"
          placeholder='Name' 
          value={formData.name}
          onChange={handleChange}
          className='p-2 rounded w-80 h-10 bg-blue-50 border border-blue-200 outline-blue-950' 
          required
        />
        
        <input 
          type="tel" 
          name="phone"
          placeholder='Phone' 
          value={formData.phone}
          onChange={handleChange}
          className='p-2 rounded w-80 h-10 bg-blue-50 border border-blue-200 outline-blue-950' 
          required
        />
        
        <input 
          type="email" 
          name="email"
          placeholder='E-mail' 
          value={formData.email}
          onChange={handleChange}
          className='p-2 rounded w-80 h-10 bg-blue-50 border border-blue-200 outline-blue-950' 
          required
        />  
        
        <select 
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="p-2 w-80 h-10 rounded bg-blue-50 border border-blue-200 outline-blue-950" 
          required
        >
          <option value="">Select Role</option>
          <option value="Teacher">Teacher</option>
          <option value="Student">Student</option>
        </select>
        
        <input 
          type="password" 
          name="password"
          placeholder='Password' 
          value={formData.password}
          onChange={handleChange}
          className='p-2 rounded w-80 h-10 bg-blue-50 border border-blue-200 outline-blue-950' 
          required
        />
        
        <input 
          type="submit" 
          value="Register" 
          className='bg-blue-950 hover:bg-blue-900 transition-colors text-white p-2 rounded w-80 h-10 cursor-pointer text-center font-medium'
        />
        
        <p className="text-sm text-gray-600 mt-2">
          Already have an account? &nbsp; 
          <Link to="/" className='text-blue-800 font-semibold cursor-pointer hover:underline'>Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Register
