import React from 'react';

function userCard(profileData) {


  return (
  <div className='profile-card'>
    <img src={profileData.images[0].url || "https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/spotify-512.png"}></img>
    <h1>{profileData.display_name}</h1>
  </div>)
}

export default userCard