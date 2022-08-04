import MyComponent from './UserEntry.js'

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
        <MyComponent/>
        <button class="main-nav-button">let's go!</button>
      </header>      
    </div>
  );
}

export default AddUsers