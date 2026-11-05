
import React from 'react'

const Contact = ({ Contactref }) => {

  const cardStyle =
    "p-10 h-85 rounded-xl font-serif  transition-all duration-700 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-950/30"

  const inputStyle =
    "p-2 rounded w-80 h-10 bg-red-200 outline-none border border-transparent focus:border-red-500 transition-all duration-300"

  return (
    <div
      ref={Contactref}
      className="contactmain flex flex-wrap flex-col gap-5 p-5"
    >

      {/* Contact Heading */}
      <div className="contactus text-center opacity-50">
        <b><i>Contact us:</i></b>
      </div>

      <div className="con flex flex-wrap flex-row gap-10 justify-center items-center">

        {/* Contact Details */}
        <div className={cardStyle}>
          <i>For more information,</i><br />

          Call us, <b>+91 63838 24882</b><br />
          <br />

          Mail us at <b>info@gravityschool.com</b><br />
          <br />

          <h4 className="font-bold">Address:</h4>

          <p>
            <b>
              No.7, Dubai Main Road,<br />
              Dubai Kuruku Sandu, Dubai Bus stand,<br />
              Dubai, 6523
            </b>
          </p>
        </div>

        {/* Enquiry Form */}
        <div className="enqform flex flex-col gap-3 p-5 rounded-xl  transition-all duration-700 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-950/30">

          <div className="query">
            <i>Having a query . . . ?</i>
          </div>

          <div className="querybox flex flex-col gap-3">

            <input
              type="text"
              placeholder="Name"
              className={inputStyle}
            />

            <input
              type="tel"
              placeholder="Phone"
              className={inputStyle}
            />

            <input
              type="email"
              placeholder="E-mail"
              className={inputStyle}
            />

            <textarea
              placeholder="Enquiry"
              className="p-2 rounded w-80 h-24 bg-red-200 outline-none border border-transparent focus:border-red-500 transition-all duration-300 resize-none"
            />

            <button className="bg-red-500 p-3 rounded text-white font-bold cursor-pointer transition-all duration-300 hover:bg-red-700">
              SEND
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
