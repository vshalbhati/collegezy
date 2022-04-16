import {useState} from 'react'
import {Link} from 'react-router-dom'
import './Main.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(event){
    event.preventDefault()
    const response = await fetch("https://collegezy.herokuapp.com//login",{
      method: 'post',
    headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    const data =await response.json()
    if(data.user){
      localStorage.setItem('token', data.user)
      alert('Login successful')
      window.location.href='https://knowu-09.web.app'
    }else{      alert('Please check your uername and password')
  }
    console.log(data)
  }
  return (
    <div className="login">
      <div className="color-overlay">
      <div className="vid">
      <video autoPlay loop muted>
        <source src='/assets/vid.mp4' type='video/mp4'/>
      </video>
      </div>
      </div>
      <nav>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M45.63 79.75L52 81.25v58.5C45 143.9 40 151.3 40 160c0 8.375 4.625 15.38 11.12 19.75L35.5 242C33.75 248.9 37.63 256 43.13 256h41.75c5.5 0 9.375-7.125 7.625-13.1L76.88 179.8C83.38 175.4 88 168.4 88 160c0-8.75-5-16.12-12-20.25V87.13L128 99.63l.001 60.37c0 70.75 57.25 128 128 128s127.1-57.25 127.1-128L384 99.62l82.25-19.87c18.25-4.375 18.25-27 0-31.5l-190.4-46c-13-3-26.62-3-39.63 0l-190.6 46C27.5 52.63 27.5 75.38 45.63 79.75zM359.2 312.8l-103.2 103.2l-103.2-103.2c-69.93 22.3-120.8 87.2-120.8 164.5C32 496.5 47.53 512 66.67 512h378.7C464.5 512 480 496.5 480 477.3C480 400 429.1 335.1 359.2 312.8z"/></svg>
        <div className="nam">
        <div className="col1">C</div>
        <div className="col2">o</div>
        <div className="col3">l</div>
        <div className="col4">l</div>
        <div className="col5">e</div>
        <div className="col6">g</div>
        <div className="col7">E</div>
        <div className="col8">z</div>
        <div className="col9">y</div>
      </div>
      <div className="rit">
        <Link to="/">
        <a className="Home" href="#">HOME</a>
        </Link>
      </div>
        </nav>
      <h1> Login </h1>
      <form onSubmit={loginUser}>
        <div className="username">
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email"/>
        </div>
        <div className="password">
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your Password"/>
        </div>
        <div className="btn">
        <button type="submit">Log in</button>
        </div>
      </form>
    <Link to="/register">
      <h2>Don't have an account</h2>
      </Link>
    </div>
  );
}

export default App;
