import { useEffect, useState } from 'react';
import UserEntryList from './UserEntry.js'
import UserCard from './ProfileCard.js';
import axios from 'axios'
import _debounce from 'lodash/debounce'

function AddUsers() {

  const [URLS, setURLS] = useState(["", ""])

  const [profileData, setData] = useState([]);

  function getAnalysis() {
    console.log(URLS);
    axios.post("/analyze", URLS).then((response) => {
      console.log(response);
    }).then(() => console.log("finshed everything!"))
  }

//Use a debounce function to only call the API after a certain amount of time has passed without any new input
  useEffect(
    //console.log("state changed!");
    _debounce(() => {
      //console.log(URLS[0])
      axios.post("/get-profile",URLS).then(value => {setData(value.data);}, reason => {console.log("failed!")})
    }, 1000)
  )

  return (
    <div className="AddUsers">
      <header className="Add-users-header">
        <h1>
          How many people?
        </h1>
        <br />
        <h6 style={{ marginTop: '-10px' }}>
          put the links to everyone's Spotify profiles below
        </h6>
        <UserEntryList value={URLS} callback={setURLS} />
        <div className='profiles'>
          {profileData.map((item,i) => <UserCard key = {i} name={item.display_name} images={item.images}/>)}
        </div>
        <button className="main-nav-button" onClick={getAnalysis}>start analysis</button>
      </header>
    </div>
  );
}

export default AddUsers