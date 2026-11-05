import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import StudentHome from './Component/Student/Home'
import TeacherHome from './Component/Teacher/TeacherHome'
import Attendance from './Component/Student/Attendance'
import Marks from './Component/Student/Marks'
import Remarks from './Component/Student/Remarks'
import SetAttendance from './Component/Teacher/SetAttendance'
import SetMarks from './Component/Teacher/SetMarks'
import SetEdit from './Component/Teacher/SetEdit'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/student" element={<StudentHome />} />
      <Route path="/teacher" element={<TeacherHome />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/marks" element={<Marks />} />
      <Route path="/remarks" element={<Remarks />} />

      <Route path="/setattendance" element={<SetAttendance />} />
      <Route path="/setmarks" element={<SetMarks />} />
      <Route path="/setedit" element={<SetEdit />} />
    </Routes>
  )
}

export default App
