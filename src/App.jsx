import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import { SignIn } from './components/SignIn'
import { Signup } from './components/Signup'
import { Multi } from './components/multiform/Multi'
import { ForgotPassword } from './components/forgotPassword'




const App = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/multi" element={<Multi />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>

  )
}

export default App