import React, { useContext } from 'react'
import { Message } from './Message'
import { UserChat } from '../context/UserChat'
import { Registerprofile } from '../context/Registerprofile';

export const Messages = () => {

  const {userChats} = useContext(UserChat);
  const {registerProfile} = useContext(Registerprofile)

  return (
    <div className='messages'>
    <Message />
    {userChats.map((msg) => (
        <div>
            <img className= 'userImg' src = {registerProfile}/>
            <p>{msg}</p>
        </div>
        
    ))}
    </div>
  )
}
