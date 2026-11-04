import React from 'react'
import Navbar from '../Common/Navbar'

import {useRef} from 'react'

const Contact = ({Contactref}) => {
  return (
    <>
    <div ref={Contactref} className="contactmain flex flex-wrap flex-col gap-5 p-5">
      <div className="contactus text-center opacity-50">
        <b><i>Contact us:</i></b>
      </div>
      <div className="con flex flex-wrap flex-row gap-10 justify-center items-center">
      <div className="contact border p-10 h-85 rounded font-serif">
      <i>For more information,</i><br/>
      Call us, <b>+91 63838 24882</b><br/>
      <br/>
      Mail us at <b>info@gravityschool.com</b><br/>
      <br/>
      <h4>Address:</h4>
      <p><b>No.7, Dubai Main Road, <br/>
      Dubai Kuruku Sandu, Dubai Bus stand,<br/>
      Dubai, 6523</b></p>
      </div>
      <div className="enqform flex flex-col gap-3 border p-5 rounded">
      <div className="query"><i>Having a query . . . ?</i></div>
      <div className="querybox flex flex-col gap-3">
        <input type="text" placeholder='Name' className='p-2 rounded w-80 h-10 bg-red-200'/>
        <input type="text" placeholder='Phone' className='p-2 rounded w-80 h-10 bg-red-200'/>
        <input type="text" placeholder='E-mail' className='p-2 rounded w-80 h-10 bg-red-200'/>
        <input type="text" placeholder='Enquiry' className='p-2 rounded w-80 h-10 bg-red-200'/>
        <button className='bg-red-500 p-3 rounded text-white font-bold'>SEND</button>
      </div>
      </div>
    </div>

    </div>
    
    </>
  )
}

export default Contact