import { Routes, Route } from "react-router-dom"

const Route = () => {
  return (
    <Routes>
        <Route path="/Attendance" element={<Attendance/>} />
        <Route path="/Marks" element={<Marks/>} />
        <Route path="/Remarks" element={<Remarks/>} />
    </Routes>
  )
}

export default Route