import React from 'react';

class UserCard extends React.Component {

  render() {
    const { name, images } = this.props;
    return (
      <div className='profile-card'>
        <img src={images[0] ? images[0].url : "https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/spotify-512.png"}></img>
        <h3>{name}</h3>
      </div>
    );
  }
}

export default UserCard;