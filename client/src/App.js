import React from 'react'
import {  BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'


function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
            </Routes>
            <Routes>
                <Route path="/register" element={<Register/>}/>
            </Routes>
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </Router>

    </div>
  )
}

export default App