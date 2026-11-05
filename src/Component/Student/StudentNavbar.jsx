import Navbar from '../Common/Navbar'
import {NavLink} from 'react-router-dom'
import {useRef} from 'react'

const StudentNavbar = ({ Homeref, Aboutref, Contactref }) => {

  return (
    <>
    <Navbar Homeref={Homeref} Aboutref={Aboutref} Contactref={Contactref}/>
     <div className="subnavbar sticky top-15 bg-blue-200 border-b border-blue-300 flex flex-row justify-evenly p-2 rounded">
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
    </>
  )
}

export default StudentNavbar