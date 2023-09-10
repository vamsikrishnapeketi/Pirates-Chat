import React , {useContext, useState} from 'react'
import { Navbar } from './Navbar'
import { Chats } from './Chats'
import profilePhotos from '../data'
import { Registerprofile } from '../context/Registerprofile'

export const Sidebar = () => {

  const { registerProfile } = useContext(Registerprofile);
  return (
    <div className='sidebar'>
    <Navbar />
    {profilePhotos.filter(profile => profile.photo !==registerProfile).map((profilephoto) => (
      <Chats key = {profilephoto.id} photo = {profilephoto.photo} name = {profilephoto.name} description={profilephoto.description}/>
    ))}
    </div>
  )
}
