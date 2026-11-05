import { Routes, Route } from 'react-router-dom'
import TeacherNavbar from './TeacherNavbar'
import SetAttendance from './SetAttendance'
import SetEdit from './SetEdit'
import SetMarks from './SetMarks'
import About from '../Common/About'
import Contact from '../Common/Contact'
import Footer from '../Common/Footer'

const TeacherHome = () => {
  

  return (
    <>

      <TeacherNavbar />
      <Routes>
      <Route path="/setattendance" element={<SetAttendance />} />
      <Route path="/setmarks" element={<SetMarks />} />
      <Route path="/setremarks" element={<SetEdit />} />
      </Routes>

      <About />
      <Contact />
      <Footer />
      </>
  )
}

export default TeacherHome
