import { Router } from 'react-router-dom';
import Button from './App.js'


function AddUsers() {
  
  return (
    <div className="AddUsers">      
      <header className="Add-users-header">        
        <h1>
          How many people?
        </h1>
        <br/> 
        <h6 style={{marginTop: '-10px'}}>
          put the links to everyone's Spotify profiles below
        </h6>  
        {/* <Button>let's go!</Button> */}
      </header>      
    </div>
  );
}

export default AddUsers