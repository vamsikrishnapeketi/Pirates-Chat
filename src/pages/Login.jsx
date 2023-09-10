import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

  const navigate = useNavigate()
  const [err,setErr] = useState(false);
  const [lemail,setLemail] = useState();
  const [lpassword,setLpassword] = useState();

  const handleButton = (event) =>{
    event.preventDefault();
    if(lemail && lpassword) {
      navigate("/");
    }
    else {
      setErr(true);
    }
  }

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
        <img src="https://www.iconarchive.com/download/i54293/crountch/one-piece-jolly-roger/Luffys-flag.ico"  alt='pirates-icon' />
        <span className='logo'>Pirates Chat</span>
        <span className='title'>Login</span>
            <form>
                <input type = "email" placeholder='email' onChange={(e) => setLemail(e.target.value)} value={lemail}/>
                <input type = "password" placeholder='password' onChange={(e) => setLpassword(e.target.value)} value={lpassword}/>
                <button onClick={handleButton}>Sign in</button>
            </form>
            <p>You don't have an account? <a href='/register'>Register</a></p>
            {err && <p>Make sure you have entered all credentials correctly.</p>}
        </div>
    </div>
  )
}
