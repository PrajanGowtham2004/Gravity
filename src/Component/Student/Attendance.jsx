
import React, { useEffect, useState } from 'react'
import StudentNavbar from './StudentNavbar'

const Attendance = () => {

  const [attendance, setAttendance] = useState([])
  const [studentName, setStudentName] = useState('')

  useEffect(() => {
    const currentUser = JSON.parse(
      localStorage.getItem('gravity_currentUser') || 'null'
    )

    if (!currentUser) return

    setStudentName(currentUser.name)

    const allAttendance = JSON.parse(
      localStorage.getItem('gravity_attendance') || '[]'
    )

    const studentRecords = allAttendance.map((record) => {
      const student = record.students.find(
        (item) => item.id === currentUser.id
      )

      return student
        ? {
            date: record.date,
            status: student.status
          }
        : null
    }).filter(Boolean)

    setAttendance(studentRecords)
  }, [])

  const presentDays = attendance.filter(
    (record) => record.status === 'Present'
  ).length

  const absentDays = attendance.filter(
    (record) => record.status === 'Absent'
  ).length

  const percentage = attendance.length
    ? ((presentDays / attendance.length) * 100).toFixed(1)
    : 0

  return (
    <>
      <StudentNavbar />

      <div className="p-6 flex flex-col gap-6">

        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-950">
            My Attendance
          </h2>
          <p className="text-gray-500 mt-1">
            Welcome, {studentName}
          </p>
        </div>

        {/* Attendance Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="bg-white p-5 rounded-xl shadow-md text-center">
            <h3 className="text-gray-500">Present Days</h3>
            <p className="text-3xl font-bold text-green-600">
              {presentDays}
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md text-center">
            <h3 className="text-gray-500">Absent Days</h3>
            <p className="text-3xl font-bold text-red-500">
              {absentDays}
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md text-center">
            <h3 className="text-gray-500">Attendance Percentage</h3>
            <p className="text-3xl font-bold text-blue-950">
              {percentage}%
            </p>
          </div>

        </div>

        {/* Attendance Table */}
        <div className="bg-white p-5 rounded-xl shadow-md">

          <h3 className="text-lg font-bold text-blue-950 mb-4">
            Attendance History
          </h3>

          {attendance.length === 0 ? (

            <p className="text-center text-gray-500 p-5">
              No attendance records available yet.
            </p>

          ) : (

            <div className="overflow-x-auto">

              <table className="w-full text-left border-collapse">

                <thead>
                  <tr className="bg-blue-950 text-white">
                    <th className="p-3">S.No</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {attendance.map((record, index) => (

                    <tr key={record.date} className="border-b hover:bg-slate-50">

                      <td className="p-3">{index + 1}</td>

                      <td className="p-3">
                        {record.date}
                      </td>

                      <td className="p-3">
                        <span className={`font-semibold ${
                          record.status === 'Present'
                            ? 'text-green-600'
                            : 'text-red-500'
                        }`}>
                          {record.status}
                        </span>
                      </td>

                    </tr>

                  ))}
                </tbody>

              </table>

            </div>

          )}

        </div>

      </div>
    </>
  )
}

export default Attendance
