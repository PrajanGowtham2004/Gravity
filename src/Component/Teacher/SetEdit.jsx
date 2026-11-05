import React, { useEffect, useState } from 'react'
import TeacherNavbar from './TeacherNavbar'


const SetEdit = () => {
  return (
    <>
      <TeacherNavbar />
      <SettingEdit />
    </>
  )
}

export default SetEdit


export const SettingEdit = () => {

  const [students, setStudents] = useState([])
  const [editId, setEditId] = useState(null)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  })

  // Load registered students
  useEffect(() => {
    loadStudents()
  }, [])

  const loadStudents = () => {
    const users = JSON.parse(
      localStorage.getItem('gravity_users') || '[]'
    )

    const studentList = users.filter(
      (user) => user.role === 'Student'
    )

    setStudents(studentList)
  }

  // Handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }))
  }

  // Start editing a student
  const handleEdit = (student) => {
    setEditId(student.id)

    setFormData({
      name: student.name || '',
      phone: student.phone || '',
      email: student.email || '',
      password: student.password || ''
    })

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Save updated student details
  const handleUpdate = (e) => {
    e.preventDefault()

    const users = JSON.parse(
      localStorage.getItem('gravity_users') || '[]'
    )

    // Check whether another user already has this phone number
    const phoneExists = users.some(
      (user) =>
        user.phone === formData.phone &&
        user.id !== editId
    )

    if (phoneExists) {
      alert('This phone number is already registered!')
      return
    }

    // Update the selected student in the main users list
    const updatedUsers = users.map((user) =>
      user.id === editId
        ? { ...user, ...formData }
        : user
    )

    // Save updated registration data
    localStorage.setItem(
      'gravity_users',
      JSON.stringify(updatedUsers)
    )

    // Update active session if this student is currently logged in
    const currentUser = JSON.parse(
      localStorage.getItem('gravity_currentUser') || 'null'
    )

    if (currentUser && currentUser.id === editId) {
      const updatedCurrentUser = updatedUsers.find(
        (user) => user.id === editId
      )

      localStorage.setItem(
        'gravity_currentUser',
        JSON.stringify(updatedCurrentUser)
      )
    }

    setStudents(
      updatedUsers.filter((user) => user.role === 'Student')
    )

    setEditId(null)

    setFormData({
      name: '',
      phone: '',
      email: '',
      password: ''
    })

    alert('Student details updated successfully!')
  }

  // Cancel editing
  const handleCancel = () => {
    setEditId(null)

    setFormData({
      name: '',
      phone: '',
      email: '',
      password: ''
    })
  }

  // Delete student
  const handleDelete = (studentId) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this student? This action cannot be undone.'
    )

    if (!confirmDelete) return

    const users = JSON.parse(
      localStorage.getItem('gravity_users') || '[]'
    )

    // Remove student from registered users
    const updatedUsers = users.filter(
      (user) => user.id !== studentId
    )

    localStorage.setItem(
      'gravity_users',
      JSON.stringify(updatedUsers)
    )

    // Remove this student's saved marks
    const allMarks = JSON.parse(
      localStorage.getItem('gravity_marks') || '[]'
    )

    const updatedMarks = allMarks.filter(
      (record) => record.id !== studentId
    )

    localStorage.setItem(
      'gravity_marks',
      JSON.stringify(updatedMarks)
    )

    // Remove this student's entries from attendance records
    const allAttendance = JSON.parse(
      localStorage.getItem('gravity_attendance') || '[]'
    )

    const updatedAttendance = allAttendance.map((record) => ({
      ...record,
      students: record.students.filter(
        (student) => student.id !== studentId
      )
    }))

    localStorage.setItem(
      'gravity_attendance',
      JSON.stringify(updatedAttendance)
    )

    // Clear session if the deleted student is currently logged in
    const currentUser = JSON.parse(
      localStorage.getItem('gravity_currentUser') || 'null'
    )

    if (currentUser && currentUser.id === studentId) {
      localStorage.removeItem('gravity_currentUser')
    }

    // Refresh student list
    setStudents(
      updatedUsers.filter((user) => user.role === 'Student')
    )

    if (editId === studentId) {
      handleCancel()
    }

    alert('Student deleted successfully!')
  }

  return (
    <div className="p-6 flex flex-col gap-6">

      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-blue-950">
          Manage Students
        </h2>

        <p className="text-gray-500 mt-1">
          View, edit and manage registered student details
        </p>
      </div>

      {/* Edit Student Form */}
      {editId !== null && (

        <form
          onSubmit={handleUpdate}
          className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4"
        >

          <h3 className="text-lg font-bold text-blue-950">
            Edit Student Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Student Name"
              className="p-3 rounded-lg bg-slate-100 border outline-blue-950"
              required
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="p-3 rounded-lg bg-slate-100 border outline-blue-950"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="p-3 rounded-lg bg-slate-100 border outline-blue-950"
              required
            />

            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="p-3 rounded-lg bg-slate-100 border outline-blue-950"
              required
            />

          </div>

          <div className="flex gap-3">

            <button
              type="submit"
              className="bg-blue-950 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 cursor-pointer"
            >
              Update Student
            </button>

            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 cursor-pointer"
            >
              Cancel
            </button>

          </div>

        </form>
      )}

      {/* Students Table */}
      <div className="bg-white p-5 rounded-xl shadow-md">

        <h3 className="text-lg font-bold text-blue-950 mb-4">
          Registered Students ({students.length})
        </h3>

        {students.length === 0 ? (

          <p className="text-center text-gray-500 p-5">
            No registered students found.
          </p>

        ) : (

          <div className="overflow-x-auto">

            <table className="w-full min-w-[850px] text-left border-collapse">

              <thead>
                <tr className="bg-blue-950 text-white">
                  <th className="p-3">S.No</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Password</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>

              <tbody>

                {students.map((student, index) => (

                  <tr
                    key={student.id}
                    className="border-b hover:bg-slate-50"
                  >

                    <td className="p-3">
                      {index + 1}
                    </td>

                    <td className="p-3 font-medium">
                      {student.name}
                    </td>

                    <td className="p-3">
                      {student.phone}
                    </td>

                    <td className="p-3">
                      {student.email}
                    </td>

                    <td className="p-3">
                      {student.password}
                    </td>

                    <td className="p-3">
                      <div className="flex gap-2">

                        <button
                          onClick={() => handleEdit(student)}
                          className="bg-amber-500 text-white px-3 py-2 rounded-lg hover:bg-amber-600 cursor-pointer"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(student.id)}
                          className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 cursor-pointer"
                        >
                          Delete
                        </button>

                      </div>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </div>
  )
}
