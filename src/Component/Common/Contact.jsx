import React, { useState } from 'react'

const Contact = ({ Contactref }) => {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiry: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Get existing enquiries from localStorage
    const existingEnquiries = JSON.parse(
      localStorage.getItem('gravity_enquiries') || '[]'
    )

    // Create a new enquiry
    const newEnquiry = {
      id: Date.now(),
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      enquiry: formData.enquiry,
      submittedAt: new Date().toLocaleString()
    }

    // Add the new enquiry to existing enquiries
    const updatedEnquiries = [...existingEnquiries, newEnquiry]

    // Save enquiries to localStorage
    localStorage.setItem(
      'gravity_enquiries',
      JSON.stringify(updatedEnquiries)
    )

    alert('Your enquiry has been submitted successfully!')

    // Clear the form
    setFormData({
      name: '',
      phone: '',
      email: '',
      enquiry: ''
    })
  }

  const cardStyle =
    "p-10 rounded-xl font-serif bg-slate-100 transition-all duration-700 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-950/30"

  return (
    <div
      ref={Contactref}
      className="contactmain flex flex-wrap justify-center items-center gap-10 p-10 bg-white"
    >

      {/* Contact Information */}
      <div className={`${cardStyle} w-full md:w-96`}>

        <h2 className="text-3xl font-bold text-blue-950 mb-8">
          Contact Us
        </h2>

        <div className="flex flex-col gap-6 text-gray-700">

          <div>
            <h3 className="font-bold text-blue-950">Phone</h3>
            <p>+91 63838 24882</p>
          </div>

          <div>
            <h3 className="font-bold text-blue-950">E-mail</h3>
            <p>info@gravityschool.com</p>
          </div>

          <div>
            <h3 className="font-bold text-blue-950">Address</h3>
            <p>Dubai</p>
          </div>

        </div>
      </div>

      {/* Enquiry Form */}
      <form
        onSubmit={handleSubmit}
        className={`${cardStyle} w-full md:w-96 flex flex-col gap-5`}
      >

        <h2 className="text-3xl font-bold text-blue-950 mb-3">
          Enquiry Form
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded-lg border border-blue-200 bg-white outline-blue-950"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 rounded-lg border border-blue-200 bg-white outline-blue-950"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg border border-blue-200 bg-white outline-blue-950"
          required
        />

        <textarea
          name="enquiry"
          placeholder="Your Enquiry"
          value={formData.enquiry}
          onChange={handleChange}
          rows="4"
          className="w-full p-3 rounded-lg border border-blue-200 bg-white outline-blue-950 resize-none"
          required
        />

        <button
          type="submit"
          className="w-full p-3 rounded-lg bg-blue-950 text-white font-semibold hover:bg-blue-900 transition-colors cursor-pointer"
        >
          Send Enquiry
        </button>

      </form>

    </div>
  )
}

export default Contact