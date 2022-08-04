import './App.css';
import {useNavigate} from 'react-router-dom';


   

function App() {
  let navigate = useNavigate();
  return (    
    <div className="App">  
    {/* <Routes>
    <Route path="/AddUsers" component={AddUsers}></Route>      
    </Routes> */}
      <header className="App-header">           
        <h1>
          Spotify Compare
        </h1>
        <br/> 
        <h6 style={{marginTop: '-10px'}}>
          compare your music with your friends' music!
        </h6>
        <button class="main-nav-button" onClick={() => {navigate("/AddUsers")}}>let's go!</button>
      </header>             
    </div>
  );
}


export default App;
