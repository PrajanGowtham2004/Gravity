import React from 'react'

const Register = () => {
  return (
    <><div className="reg flex flex-wrap flex-row justify-center items-center h-150">
    <div className="rgiesterform flex flex-col gap-3 p-5 rounded-2xl w-100 justify-center items-center">
        <h2 className='text-blue-950 font-medium'><i>Gravity Register</i></h2>
        <input type="text" placeholder='Name' className='p-2 rounded w-80 h-10 bg-blue-100' required/>
        <input type="text" placeholder='Phone' className='p-2 rounded w-80 h-10 bg-blue-100' required/>
        <input type="text" placeholder='E-mail' className='p-2 rounded w-80 h-10 bg-blue-100' required/>  
        <select className="p-2 w-80 h-10 rounded bg-blue-100" required>
            <option value="">Select Role</option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
        </select>
        <input type="text" placeholder='Password' className='p-2 rounded w-80 h-10 bg-blue-100' required/>
        <input type="submit" value="Register" className='bg-blue-950  text-white p-2 rounded w-80 h-10 cursor-pointer text-center'/>
        <p>ALready have an account? &nbsp; <span className='text-blue-800'>Login</span></p>

    </div>
    </div>
    </>
  )
}

export default Register