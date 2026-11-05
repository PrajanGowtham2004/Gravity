
import React from 'react'

import banner from '../../assets/Images/schoolbanner.png'
import lib from '../../assets/Images/lib.png'
import lab from '../../assets/Images/lab.png'
import tech from '../../assets/Images/techroom.png'
import ground from '../../assets/Images/playground.png'

const About = ({ Homeref, Aboutref, Contactref }) => {

  const imageStyle =
    "w-full h-full object-cover rounded-xl transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-950/30"

  const achievementStyle =
    "bg-slate-200 cursor-pointer w-50 h-50 flex items-center flex-col justify-center p-3 rounded-2xl font-bold transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-950/30"

  return (
    <div
      ref={Homeref}
      className="z-10 aboutmain m-10 flex flex-wrap flex-col gap-5 justify-center"
    >

        
      <div className="banner w-250 mx-30 flex flex-row items-center justify-center text-center p-3 h-100">
        <img
          src={banner}
          alt="School Banner"
          className="w-full h-full object-cover"
        />
      </div>

      
      <div className="tagline text-center p-2" ref={Aboutref}>
        <div className="aboutus text-center opacity-50">
          <b><i>About us:</i></b>
        </div>

        <br />

        <h2 className="font-serif">
          Shaping Minds... Building Futures...
        </h2>
      </div>

      
      <div className="amenities flex flex-row justify-center gap-25 flex-wrap">

        <div className="am1 w-50 h-70 rounded-2xl p-3">
          <img src={lib} alt="Library" className={imageStyle} />
        </div>

        <div className="am2 w-50 h-70 p-3">
          <img src={lab} alt="Laboratory" className={imageStyle} />
        </div>

        <div className="am3 w-50 h-70 p-3">
          <img src={tech} alt="Technology Room" className={imageStyle} />
        </div>

        <div className="am4 w-50 h-70 p-3">
          <img src={ground} alt="Playground" className={imageStyle} />
        </div>

      </div>

      
      <div className="soe text-center p-2 font-serif">
        <h2 className="font-bold text-amber-900">
          <i>In the School of Excellence!</i>
        </h2>
      </div>

      
      <div className="mav text-center p-5 flex gap-5">

        <div className="vision opacity-85">
          <h2><b><i>VISION:</i></b></h2>

          <p>
            <i>
              To nurture responsible, confident, and innovative individuals
              who become lifelong learners and contribute positively to society.
            </i>
          </p>
        </div>

        <div className="mission opacity-85">
          <h2><b><i>MISSION:</i></b></h2>

          <p>
            <i>
              To provide quality education in a supportive and inclusive
              environment, fostering academic excellence, critical thinking,
              creativity, discipline, and strong moral values in every student.
            </i>
          </p>
        </div>

      </div>

      
      <div className="achievements flex text-3xl flex-row justify-center gap-35 flex-wrap font-serif text-center">

        <div className={achievementStyle}>
          <h1>2000+</h1>
          <small>
            <p className="font-light">Students</p>
          </small>
        </div>

        <div className={achievementStyle}>
          <h1>100+</h1>
          <small>
            <p className="font-light">Teachers</p>
          </small>
        </div>

        <div className={achievementStyle}>
          <h1>TOP #3</h1>
          <small>
            <p ref={Contactref} className="font-light">in INDIA</p>
          </small>
        </div>

      </div>

    </div>
  )
}

export default About
