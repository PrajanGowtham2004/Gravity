import Navbar from '../Common/Navbar'
import About from '../Common/About'
import Contact from '../Common/Contact'
import Footer from '../Common/Footer'

import {useRef} from 'react'



const Home = () => {
  
  const Homeref = useRef(null)
  const Aboutref = useRef(null)
  const Contactref = useRef(null)

  const scrollToSection = (sectionRef) =>{
    sectionRef.current.scrollIntoView({
            behavior: "smooth"
      });
  }
  return (
    <>
  <Navbar/>
  <About/>
  <Contact/>
  <Footer/>

    </>
  )
}

export default Home;