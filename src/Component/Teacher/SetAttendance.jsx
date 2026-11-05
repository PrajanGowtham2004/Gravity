import React, { useEffect, useState } from 'react'
import TeacherNavbar from './TeacherNavbar'


const SetAttendance = () => {
  return (
    <>
      <TeacherNavbar />
      <SettingAttendance />
    </>
  )
}

export default SetAttendance




export const SettingAttendance = () => {

  const [students, setStudents] = useState([])
  const [attendance, setAttendance] = useState({})
  const [submittedAttendance, setSubmittedAttendance] = useState([])
  const [submitted, setSubmitted] = useState(false)

  // Today's date in YYYY-MM-DD format
  const today = new Date().toLocaleDateString('en-CA')

  // Load students and today's existing attendance
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('gravity_users') || '[]')

    const studentList = users.filter(
      (user) => user.role === 'Student'
    )

    setStudents(studentList)

    const allAttendance = JSON.parse(
      localStorage.getItem('gravity_attendance') || '[]'
    )

    const todayRecord = allAttendance.find(
      (record) => record.date === today
    )

    if (todayRecord) {
      setSubmittedAttendance(todayRecord.students)
      setSubmitted(true)

      const savedAttendance = {}

      todayRecord.students.forEach((student) => {
        savedAttendance[student.id] = student.status === 'Present'
      })

      setAttendance(savedAttendance)
    } else {
      // Default: everyone is absent until marked present
      const initialAttendance = {}

      studentList.forEach((student) => {
        initialAttendance[student.id] = false
      })

      setAttendance(initialAttendance)
    }
  }, [])

  // Handle checkbox changes
  const handleAttendance = (studentId) => {
    setAttendance((previous) => ({
      ...previous,
      [studentId]: !previous[studentId]
    }))

    setSubmitted(false)
  }

  // Submit attendance
  const handleSubmit = () => {

    const attendanceList = students.map((student) => ({
      id: student.id,
      name: student.name,
      status: attendance[student.id] ? 'Present' : 'Absent'
    }))

    // Store submitted attendance in state
    setSubmittedAttendance(attendanceList)
    setSubmitted(true)

    // Get existing attendance records
    const allAttendance = JSON.parse(
      localStorage.getItem('gravity_attendance') || '[]'
    )

    // Check whether today's attendance already exists
    const existingIndex = allAttendance.findIndex(
      (record) => record.date === today
    )

    const newRecord = {
      date: today,
      students: attendanceList
    }

    if (existingIndex !== -1) {
      // Update today's attendance
      allAttendance[existingIndex] = newRecord
    } else {
      // Add a new day's attendance
      allAttendance.push(newRecord)
    }

    // Save attendance
    localStorage.setItem(
      'gravity_attendance',
      JSON.stringify(allAttendance)
    )
  }

  return (
    <div className="p-6 flex flex-col gap-6">

      <div className="text-center">
        <h2 className="text-2xl font-bold text-blue-950">
          Student Attendance
        </h2>

        <p className="text-gray-500 mt-1">
          Date: {today}
        </p>
      </div>

      {/* Student Attendance Selection */}
      <div className="bg-white rounded-xl shadow-md p-5">

        <h3 className="font-semibold text-lg text-blue-950 mb-4">
          Mark Attendance
        </h3>

        {students.length === 0 ? (

          <p className="text-center text-gray-500">
            No registered students found.
          </p>

        ) : (

          <div className="flex flex-col gap-3">

            {students.map((student) => (

              <label
                key={student.id}
                className="flex justify-between items-center p-3 rounded-lg bg-slate-100 hover:bg-blue-50 cursor-pointer transition-colors"
              >

                <span className="font-medium text-gray-800">
                  {student.name}
                </span>

                <div className="flex items-center gap-2">

                  <span className={`text-sm font-semibold ${
                    attendance[student.id]
                      ? 'text-green-600'
                      : 'text-red-500'
                  }`}>
                    {attendance[student.id] ? 'Present' : 'Absent'}
                  </span>

                  <input
                    type="checkbox"
                    checked={!!attendance[student.id]}
                    onChange={() => handleAttendance(student.id)}
                    className="w-5 h-5 accent-green-600 cursor-pointer"
                  />

                </div>

              </label>

            ))}

          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={students.length === 0}
          className="mt-5 w-full bg-blue-950 text-white p-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit Attendance
        </button>

      </div>

      {/* Submitted Attendance Table */}
      {submitted && (

        <div className="bg-white rounded-xl shadow-md p-5">

          <h3 className="text-lg font-bold text-blue-950 mb-4">
            Attendance Report
          </h3>

          <div className="overflow-x-auto">

            <table className="w-full text-left border-collapse">

              <thead>
                <tr className="bg-blue-950 text-white">
                  <th className="p-3">S.No</th>
                  <th className="p-3">Student Name</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>

              <tbody>

                {submittedAttendance.map((student, index) => (

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

                      <span className={`font-semibold ${
                        student.status === 'Present'
                          ? 'text-green-600'
                          : 'text-red-500'
                      }`}>
                        {student.status}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      )}

    </div>
  )
}
