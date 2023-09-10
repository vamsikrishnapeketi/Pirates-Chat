import React, { useContext, useState } from 'react';
import ProfilePhotoSelector from '../components/ProfilePhotoSelector'; 
import { useNavigate } from 'react-router-dom';
import { Registerprofile } from '../context/Registerprofile';


export const Register = () => {
  const {registerProfile} = useContext(Registerprofile);
  const [err,setErr] = useState(false)
  const navigate = useNavigate()
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [file,setFile] = useState(registerProfile)

  const handleBtn = (event) => {
    event.preventDefault();
    if(name && email && password && file) {
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
            <form>
                <input type = "text" placeholder='Name' onChange={(e) => setName(e.target.value)} value = {name}/>
                <input type = "email" placeholder='email' onChange={(e) => setEmail(e.target.value)} value = {email}/>
                <input type = "password" placeholder='password' onChange={(e) => setPassword(e.target.value)} value = {password}/>
                <ProfilePhotoSelector />
                <button onClick={handleBtn}>Sign up</button>
                {err && <p>Make sure you have entered all credentials correctly.</p>}
            </form>
            <p>Already have an account? <a href='/login'>Login</a></p>
        </div>
    </div>
  )
}
