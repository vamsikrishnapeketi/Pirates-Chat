import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Registerprofile } from '../context/Registerprofile'
import profilePhotos from '../data'


export const Navbar = () => {

  const navigate = useNavigate()
  const {registerProfile}  = useContext(Registerprofile);
  const [registerprofileName,setRegisterprofilename] = useState('');

  const registerName = () =>{
    for(let i=0;i<profilePhotos.length;i++){
      if(registerProfile === profilePhotos[i].photo){
        return profilePhotos[i].name;
      }
    }
    return '';
  }

  return (
    <div className='navbar'>
      <span className='logo'>Pirates Chat</span>
      <div className='user'>
        <img src={registerProfile} />
        <span>{registerName()}</span>
        <button onClick={() => navigate("/login")}>Logout</button>
      </div>
    </div>
  )
}
