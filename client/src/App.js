import React from 'react'
import {  BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'


function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <Routes>
                <Route path="/register" element={<Register/>}/>
            </Routes>
            <Routes>
                <Route path="/join" element={<Login/>}/>
            </Routes>
        </Router>

    </div>
  )
}

export default App