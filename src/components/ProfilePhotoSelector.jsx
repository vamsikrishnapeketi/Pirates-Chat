// ProfilePhotoSelector.js
import React, { useContext, useState } from 'react';
import profilePhotos from '../data.js';
import { Registerprofile } from '../context/Registerprofile.jsx';

const ProfilePhotoSelector = () => {

  const {registerProfile,setRegisterprofile} = useContext(Registerprofile)

  const handlePhotoClick = (photo) => {
    setRegisterprofile(photo);
  };

  const renderProfilePhotos = () => {
    const rows = [];
    let row = [];

    profilePhotos.forEach((profilephoto, index) => {
      row.push(
        <td
          key={index}
          onClick={() => handlePhotoClick(profilephoto.photo)}
        >
          <img src={profilephoto.photo} className="profile-photo"
          style={{ border: registerProfile === profilephoto.photo ? '5px solid salmon' : 'none'}}
           />
        </td>
      );

      if ((index + 1) % 3 === 0 || index === profilePhotos.length - 1) {
        rows.push(<tr key={index / 3}>{row}</tr>);
        row = [];
      }
    });
    return rows;
  };

  return (
    <div className="profile-photo-selector">
      <h2>Choose a Profile Photo</h2>
      <table className="profile-photos">
        <tbody>{renderProfilePhotos()}</tbody>
      </table>
    </div>
  );
};

export default ProfilePhotoSelector;
