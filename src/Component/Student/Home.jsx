import Navbar from '../Common/Navbar'
import About from '../Common/About'
import Contact from '../Common/Contact'
import Footer from '../Common/Footer'
import { useRef } from 'react'
import StudentNavbar from './StudentNavbar'

const Home = () => {
  const Homeref = useRef(null)
  const Aboutref = useRef(null)
  const Contactref = useRef(null)

  return (
    <>
      <StudentNavbar Homeref={Homeref} Aboutref={Aboutref} Contactref={Contactref}/>
      <About Homeref={Homeref} Aboutref={Aboutref} Contactref={Contactref}/>
      <Contact />
      <Footer />
    </>
  )
}

export default Home
