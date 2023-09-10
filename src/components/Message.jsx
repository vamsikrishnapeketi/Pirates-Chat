import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

export const Message = () => {

  const {selectedUser} = useContext(MyContext);
  return (
    <div className = 'message owner'>
      <div className='messageInfo'>
          <img src={selectedUser.photo} />
          <span>Just now</span>
      </div>
      <div className='messageContent'>
      <p>Hi , this is {selectedUser.name}.</p>
          <img src={selectedUser.photo} />
          <p>I am the {selectedUser.description} of the ship</p>
      </div>
    </div>
  )
}
