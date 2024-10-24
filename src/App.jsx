import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import { SignIn } from './components/SignIn'
import { Signup } from './components/Signup'




const App = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>

  )
}

export default App