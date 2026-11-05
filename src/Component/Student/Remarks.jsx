
import React, { useEffect, useState } from 'react'
import StudentNavbar from './StudentNavbar'

const Remarks = () => {

  const [studentName, setStudentName] = useState('')
  const [remarks, setRemarks] = useState('')

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

    setRemarks(studentRecord?.remarks || '')
  }, [])

  return (
    <>
      <StudentNavbar />

      <div className="p-6 flex flex-col gap-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-950">
            Teacher's Remarks
          </h2>

          <p className="text-gray-500 mt-1">
            Welcome, {studentName}
          </p>
        </div>

        {/* Remarks Card */}
        <div className="bg-white rounded-xl shadow-md p-6">

          <h3 className="text-lg font-bold text-blue-950 mb-4">
            Your Performance Feedback
          </h3>

          {remarks ? (

            <div className="bg-blue-50 border-l-4 border-blue-950 p-5 rounded-lg">

              <p className="text-gray-700 leading-relaxed">
                {remarks}
              </p>

            </div>

          ) : (

            <p className="text-center text-gray-500 p-5">
              No remarks have been provided by your teacher yet.
            </p>

          )}

        </div>

      </div>
    </>
  )
}

export default Remarks
