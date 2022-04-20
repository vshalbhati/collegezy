import React from 'react'
import {  BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Mess from './pages/Mess'
import Stc from './pages/Stc'


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
            <Routes>
                <Route path="/mess" element={<Mess/>}/>
            </Routes>
            <Routes>
                <Route path="/stc" element={<Stc/>}/>
            </Routes>
        </Router>

    </div>
  )
}

export default App