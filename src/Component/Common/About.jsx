import React from 'react'
import Navbar from '../Common/Navbar'


import {useRef} from 'react'

const About = () => {
  const Aboutref = useRef(null)
  const scrollToSection = (sectionRef) =>{
    sectionRef.current.scrollIntoView({
            behavior: "smooth"
      });
  }

  return (
    <>
    <div ref={Aboutref} className="aboutmain m-10 flex flex-wrap flex-col gap-5 justify-center ">
      <div className="aboutus text-center"><b><i>About us:</i></b></div>
      <div className="banner bg-amber-300 w-250 mx-30 flex flex-row items-center justify-center text-center p-3 h-100">
      <img src="https://chatgpt.com/s/m_6aead1faac84819189aa3834d89739b6" alt="School Banner"/>
      </div>
      <div className="tagline text-center p-2">
        <h2><b>Shaping Minds... Building Futures...</b></h2>
      </div>
      <div className="amenities flex  flex-row justify-center gap-25 flex-wrap">
        <div className="am1 bg-amber-400 w-50 h-70 p-3">Photo</div>
        <div className="am2 bg-amber-400 w-50 h-70 p-3">Photo</div>
        <div className="am3 bg-amber-400 w-50 h-70 p-3">Photo</div>
        <div className="am4 bg-amber-400 w-50 h-70 p-3">Photo</div>
      </div>
      <div className="soe text-center p-2 ">
        <h2><b>In the School of Excellence!</b></h2>
      </div>
      <div className="mav text-center p-5 flex gap-5">
        <div className="vision">
          <h2><b><i>VISION:</i></b></h2>
          <p>To nuture responsible, confident, and innovative individuals who become lifelong learners and contribute positively to society.</p>
        </div>
        <div className="mission">
          <h2><b><i>MISSION:</i></b></h2>
          <p>To provide quality education in a supportive and inclusive environment, fostering academic excellence, critical thinking, creativity, discipline and strong moral values in every student.</p>
        </div>
      </div>
      <div className="achievements flex  flex-row justify-center gap-35 flex-wrap">
        <div className="ach1 bg-amber-400 w-50 h-70 p-3">Photo</div>
        <div className="ach2 bg-amber-400 w-50 h-70 p-3">Photo</div>
        <div className="ach3 bg-amber-400 w-50 h-70 p-3">Photo</div>
      </div>
    </div>
    </>
  )
}

export default About