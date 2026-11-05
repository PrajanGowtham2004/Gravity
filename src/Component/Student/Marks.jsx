
import React, { useEffect, useState } from 'react'
import StudentNavbar from './StudentNavbar'

const Marks = () => {

  const subjects = ['Tamil', 'English', 'Maths', 'Science', 'Social']

  const [studentName, setStudentName] = useState('')
  const [studentMarks, setStudentMarks] = useState(null)

  useEffect(() => {
    const currentUser = JSON.parse(
      localStorage.getItem('gravity_currentUser') || 'null'
    )

    if (!currentUser) return

    setStudentName(currentUser.name)

    const allMarks = JSON.parse(
      localStorage.getItem('gravity_marks') || '[]'
    )

    const studentRecord = allMarks.find(
      (record) => record.id === currentUser.id
    )

    setStudentMarks(studentRecord || null)
  }, [])

  const total = studentMarks
    ? subjects.reduce(
        (sum, subject) => sum + Number(studentMarks.marks[subject] || 0),
        0
      )
    : 0

  const percentage = ((total / 500) * 100).toFixed(1)

  return (
    <>
      <StudentNavbar />

      <div className="p-6 flex flex-col gap-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-950">
            My Academic Performance
          </h2>

          <p className="text-gray-500 mt-1">
            Welcome, {studentName}
          </p>
        </div>

        {!studentMarks ? (

          <div className="bg-white p-8 rounded-xl shadow-md text-center text-gray-500">
            Your marks have not been published yet.
          </div>

        ) : (

          <>

            {/* Marks Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <div className="bg-white p-5 rounded-xl shadow-md text-center">
                <h3 className="text-gray-500">Total Marks</h3>
                <p className="text-3xl font-bold text-blue-950">
                  {total} / 500
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-md text-center">
                <h3 className="text-gray-500">Percentage</h3>
                <p className="text-3xl font-bold text-green-600">
                  {percentage}%
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-md text-center">
                <h3 className="text-gray-500">Subjects</h3>
                <p className="text-3xl font-bold text-blue-950">
                  5
                </p>
              </div>

            </div>

            {/* Subject Marks */}
            <div className="bg-white p-5 rounded-xl shadow-md">

              <h3 className="text-lg font-bold text-blue-950 mb-4">
                Subject-wise Marks
              </h3>

              <div className="overflow-x-auto">

                <table className="w-full text-left border-collapse">

                  <thead>
                    <tr className="bg-blue-950 text-white">
                      <th className="p-3">S.No</th>
                      <th className="p-3">Subject</th>
                      <th className="p-3">Maximum Marks</th>
                      <th className="p-3">Obtained Marks</th>
                    </tr>
                  </thead>

                  <tbody>

                    {subjects.map((subject, index) => (

                      <tr key={subject} className="border-b hover:bg-slate-50">

                        <td className="p-3">{index + 1}</td>

                        <td className="p-3 font-medium">
                          {subject}
                        </td>

                        <td className="p-3">100</td>

                        <td className="p-3 font-semibold text-blue-950">
                          {studentMarks.marks[subject]}
                        </td>

                      </tr>

                    ))}

                    <tr className="bg-blue-50 font-bold">
                      <td className="p-3" colSpan="2">
                        Total
                      </td>
                      <td className="p-3">500</td>
                      <td className="p-3">{total}</td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

          </>

        )}

      </div>
    </>
  )
}

export default Marks
