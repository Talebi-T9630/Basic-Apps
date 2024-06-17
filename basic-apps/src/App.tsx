import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';
import MagicBall from './MagicBall';
import './App.css'


function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/magic_ball" element={<MagicBall />} />

      </Routes>
    </Router>

    </>
  )
}

export default App
