import React, { useContext, useState } from 'react'
import { UserChat } from '../context/UserChat'

export const Input = () => {

  const [usermessage,setUsermessage] = useState(null)
  const {setUserchats} = useContext(UserChat);

  const handleChange = (event) =>{
    setUsermessage(event.target.value);
  }
  const handleButton = () => {
    if (usermessage != '') {
      setUserchats(current => [...current,usermessage])
    }
    setUsermessage('')
  }
  
  return (
    <div className='input'>
      <input type = 'text' placeholder='Type the message here' onChange={handleChange} value = {usermessage}/>
      <button type='submit' onClick={handleButton}>Send</button>
    </div>
  )
}
