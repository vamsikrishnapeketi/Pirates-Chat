import React, { useContext } from 'react'
import { Messages } from './Messages'
import { Input } from './Input'
import { MyContext } from '../context/MyContext'

export const Chat = () => {

  const {selectedUser} = useContext(MyContext);
  
  return (
    <div className='chat'>
      <div className='chatInfo'>
      <img src={selectedUser.photo} />
        <span>{selectedUser.name}</span>
      </div>
      <Messages />
      <Input />
    </div>
  )
}


