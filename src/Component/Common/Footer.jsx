import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="footer flex flex-col gap-2 bg-blue-950 text-white">
    <div className="footermain bg-blue-950 text-white flex flex-row justify-evenly p-4 items-center flex-wrap">
      <div className="schooldetail">
        <h3><b>Gravity</b></h3>
      <h2><i>School of Excellence</i></h2><br/>
      <p>No.7, Dubai Main Road, <br/>
      Dubai Kuruku Sandu, Dubai Bus stand,<br/>
      Dubai, 6523.</p><br/>
      <p>Call us, <b>+91 63838 24882</b></p>
      <p>Mail us at <b>info@gravityschool.com</b></p>
      </div>

      <div className="quicklinks p-15 ">
        <h3><b><u>Quick Links</u></b></h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Attendance</li>
          <li>Marks</li>
          <li>Remarks</li>
        </ul>
      </div>
      
      <div className="media">
        <h3><b>Follow us on</b></h3>
        <div className="icons flex flex-row gap-5">
        <img src="https://cdn-icons-png.flaticon.com/128/15713/15713420.png" alt="Instagram Icon" width="40" height="40" />
        <img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="Facebook Icon" width="40" height="40" />
        <img src="https://cdn-icons-png.flaticon.com/128/15047/15047435.png" alt="Facebook Icon" width="40" height="40" />
        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png" alt="Facebook Icon" width="40" height="40" />
        </div>
        
      </div>
      
    </div>
    <div className="copyrights text-center p-2 opacity-40"><p>© 2023 Gravity School. All rights reserved.</p></div>
    </div>
    
    </>
  )
}

export default Footer