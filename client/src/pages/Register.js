import {useState} from 'react'
import './Main.css'


function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(event){
    event.preventDefault()
    const response = await fetch("https://mernsignup.herokuapp.com/register",{
      method: 'post',
    headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
    const data =await response.json()
    if(data.status === 'ok'){
      alert('Registered Successfully')
      window.location.href='/'

    }

  }
  return (
    <div className="register">
      <h1> Register </h1>
      <form onSubmit={registerUser}>
        <div className="username">
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"/>
        </div>
        <div className="username">
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email"/>
        </div>
        <div className="password">
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your Password"/>
        </div>
        <div className="btn">
        <button type="submit" value="Register">Register</button>
        </div>
      </form>
    </div>
  );
}

export default App;
