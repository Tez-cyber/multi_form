import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { SignIn } from './components/SignIn'
import { Signup } from './components/Signup'




const App = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
    </Router>
  )
}

export default App