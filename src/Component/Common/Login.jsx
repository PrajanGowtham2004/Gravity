import React from 'react'

const Login = () => {
  return (
    <>
    <div className="log flex flex-wrap flex-row justify-center items-center h-150">
    <div className="loginform flex flex-col gap-3 p-5 rounded-2xl w-100 justify-center items-center">
        <h2 className='text-blue-950 font-medium'><i>Gravity Login</i></h2>
        <input type="text" placeholder='Phone' className='p-2 rounded w-80 h-10 bg-blue-100' required/>
        <input type="text" placeholder='Password' className='p-2 rounded w-80 h-10 bg-blue-100' required/>
        <input type="submit" value="Login" className='bg-blue-950  text-white p-2 rounded w-80 h-10 cursor-pointer text-center'/>
        <p>Don't have an account? &nbsp; <span className='text-blue-800 cursor-pointer'>Register</span></p>

    </div>
    </div>
    </>
  )
}

export default Login