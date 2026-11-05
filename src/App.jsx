import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import StudentHome from './Component/Student/Home'
import TeacherHome from './Component/Teacher/TeacherHome'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/student" element={<StudentHome />} />
      <Route path="/teacher" element={<TeacherHome />} />
    </Routes>
  )
}

export default App
