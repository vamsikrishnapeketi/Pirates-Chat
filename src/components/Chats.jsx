import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import { UserChat } from '../context/UserChat';

export const Chats = ({photo,name,description}) => {

  const {setSelectedUser} = useContext(MyContext);
  const {setUserchats} = useContext(UserChat);

  const handleClick = () => {
    setSelectedUser({
      photo,
      name,
      description
    })
    setUserchats([])
  }

  return (
    <div className='chats'>
    <div className='userChat' onClick = {handleClick}>
      <img src= {photo} />
      <div className='userChatInfo' >
        <span>{name}</span>
        <p>{description}</p>
      </div>
    </div>
    </div>
  )
}
