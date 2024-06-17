import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';



import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
