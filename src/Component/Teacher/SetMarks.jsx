import React, { useEffect, useState } from 'react'
import TeacherNavbar from './TeacherNavbar'


const SetMarks = () => {
  return (
    <>
      <TeacherNavbar />
      <SettingMarks />
    </>
  )
}

export default SetMarks



export const SettingMarks = () => {

  const subjects = ['Tamil', 'English', 'Maths', 'Science', 'Social']

  const initialMarks = {
    Tamil: '',
    English: '',
    Maths: '',
    Science: '',
    Social: '',
    remarks: ''
  }

  const [students, setStudents] = useState([])
  const [selectedStudent, setSelectedStudent] = useState('')
  const [marks, setMarks] = useState(initialMarks)
  const [marksList, setMarksList] = useState([])
  const [editId, setEditId] = useState(null)

  // Load students and saved marks
  useEffect(() => {
    const users = JSON.parse(
      localStorage.getItem('gravity_users') || '[]'
    )

    const studentList = users.filter(
      (user) => user.role === 'Student'
    )

    setStudents(studentList)

    const savedMarks = JSON.parse(
      localStorage.getItem('gravity_marks') || '[]'
    )

    setMarksList(savedMarks)
  }, [])

  // Handle subject and remarks inputs
  const handleChange = (e) => {
    const { name, value } = e.target

    setMarks((previous) => ({
      ...previous,
      [name]: value
    }))
  }

  // Submit or update marks
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!selectedStudent) {
      alert('Please select a student')
      return
    }

    const selected = students.find(
      (student) => String(student.id) === selectedStudent
    )

    if (!selected) {
      alert('Student not found')
      return
    }

    const newRecord = {
      id: selected.id,
      name: selected.name,
      marks: {
        Tamil: Number(marks.Tamil),
        English: Number(marks.English),
        Maths: Number(marks.Maths),
        Science: Number(marks.Science),
        Social: Number(marks.Social)
      },
      remarks: marks.remarks
    }

    let updatedList

    if (editId !== null) {
      // Update the selected student's existing record
      updatedList = marksList.map((record) =>
        record.id === editId ? newRecord : record
      )
    } else {
      // Prevent duplicate marks records for the same student
      const alreadyExists = marksList.some(
        (record) => record.id === selected.id
      )

      if (alreadyExists) {
        alert('Marks already entered for this student. Use Edit instead.')
        return
      }

      updatedList = [...marksList, newRecord]
    }

    setMarksList(updatedList)

    localStorage.setItem(
      'gravity_marks',
      JSON.stringify(updatedList)
    )

    // Reset form
    setSelectedStudent('')
    setMarks(initialMarks)
    setEditId(null)
  }

  // Edit an individual student's marks record
  const handleEdit = (record) => {
    setSelectedStudent(String(record.id))

    setMarks({
      Tamil: String(record.marks.Tamil),
      English: String(record.marks.English),
      Maths: String(record.marks.Maths),
      Science: String(record.marks.Science),
      Social: String(record.marks.Social),
      remarks: record.remarks || ''
    })

    setEditId(record.id)

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Cancel editing
  const handleCancel = () => {
    setSelectedStudent('')
    setMarks(initialMarks)
    setEditId(null)
  }

  return (
    <div className="p-6 flex flex-col gap-6">

      {/* Page Heading */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-blue-950">
          Student Marks & Remarks
        </h2>

        <p className="text-gray-500 mt-1">
          Enter and manage student examination marks
        </p>
      </div>

      {/* Marks Entry Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4"
      >

        <h3 className="text-lg font-semibold text-blue-950">
          {editId !== null ? 'Edit Student Marks' : 'Enter Student Marks'}
        </h3>

        {/* Student Dropdown */}
        <div className="flex flex-col gap-2">
          <label className="font-medium">
            Select Student
          </label>

          <select
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 outline-blue-950"
            required
          >
            <option value="">-- Select Student --</option>

            {students.map((student) => (
              <option
                key={student.id}
                value={student.id}
              >
                {student.name}
              </option>
            ))}
          </select>
        </div>

        {/* Subject Marks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {subjects.map((subject) => (
            <div
              key={subject}
              className="flex flex-col gap-2"
            >
              <label className="font-medium">
                {subject}
              </label>

              <input
                type="number"
                name={subject}
                value={marks[subject]}
                onChange={handleChange}
                placeholder={`Enter ${subject} marks`}
                min="0"
                max="100"
                className="p-3 rounded-lg bg-slate-100 border border-gray-200 outline-blue-950"
                required
              />
            </div>
          ))}

        </div>

        {/* Remarks */}
        <div className="flex flex-col gap-2">
          <label className="font-medium">
            Remarks
          </label>

          <textarea
            name="remarks"
            value={marks.remarks}
            onChange={handleChange}
            placeholder="Enter student's performance remarks..."
            rows="3"
            className="p-3 rounded-lg bg-slate-100 border border-gray-200 outline-blue-950 resize-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">

          <button
            type="submit"
            disabled={students.length === 0}
            className="bg-blue-950 text-white p-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors cursor-pointer disabled:opacity-50"
          >
            {editId !== null ? 'Update Marks' : 'Submit Marks'}
          </button>

          {editId !== null && (
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 text-white p-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors cursor-pointer"
            >
              Cancel
            </button>
          )}

        </div>

      </form>

      {/* Submitted Marks Table */}
      <div className="bg-white rounded-xl shadow-md p-5">

        <h3 className="text-lg font-bold text-blue-950 mb-4">
          Student Marks Report
        </h3>

        {marksList.length === 0 ? (

          <p className="text-center text-gray-500 p-5">
            No marks have been submitted yet.
          </p>

        ) : (

          <div className="overflow-x-auto">

            <table className="w-full text-left border-collapse min-w-[850px]">

              <thead>
                <tr className="bg-blue-950 text-white">
                  <th className="p-3">S.No</th>
                  <th className="p-3">Student Name</th>
                  {subjects.map((subject) => (
                    <th key={subject} className="p-3">
                      {subject}
                    </th>
                  ))}
                  <th className="p-3">Remarks</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>

              <tbody>

                {marksList.map((record, index) => (

                  <tr
                    key={record.id}
                    className="border-b hover:bg-slate-50"
                  >

                    <td className="p-3">{index + 1}</td>

                    <td className="p-3 font-medium">
                      {record.name}
                    </td>

                    {subjects.map((subject) => (
                      <td key={subject} className="p-3">
                        {record.marks[subject]}
                      </td>
                    ))}

                    <td className="p-3">
                      {record.remarks || '-'}
                    </td>

                    <td className="p-3">
                      <button
                        type="button"
                        onClick={() => handleEdit(record)}
                        className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors cursor-pointer"
                      >
                        Edit
                      </button>
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
