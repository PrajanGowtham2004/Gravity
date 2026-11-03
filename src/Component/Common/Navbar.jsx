import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="navtotal sticky top-0">
    <div className="navmain bg-blue-950 text-white flex flex-row justify-between p-4 items-center ">
        <div className="logo">Gravity</div>
        <div className="sec flex flex-row gap-10">
            <Link path="/Home">Home</Link>
            <Link path="/About">About</Link>
            <Link path="/Contact">Contact</Link>
            <b>Username</b>
            <span className='p-1 cursor-pointer w-8 text-center rounded-2xl bg-red-500'><a>↷</a></span>
        </div>
    </div>

    <div className="subnavbar border-b border-x bg-blue-200 border-left-1px border-right-1px flex flex-row justify-evenly p-2 rounded">
      <div className="attendance">
        <NavLink to="/Attendance"className={({ isActive }) =>isActive? "border-b-2 border-blue-950 text-blue-950": "text-gray-500"}>Attendance</NavLink>
      </div>
      <div className="marks">
        <NavLink to="/Marks"className={({ isActive }) =>isActive? "border-b-2 border-blue-950 text-blue-950": "text-gray-500"}>Marks</NavLink>
      </div>
      <div className="remarks">
        <NavLink to="/Remarks"className={({ isActive }) =>isActive? "border-b-2 border-blue-950 text-blue-950": "text-gray-500"}>Remarks</NavLink>
      </div>
    </div>
    </div>
    </>
  )
}

export default Navbar
