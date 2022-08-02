import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {useNavigate, Route, Routes} from 'react-router-dom';
import AddUsers from './AddUsersPage.js';


   

function App() {
  let navigate = useNavigate();
  return (    
    <div className="App">        
      <header className="App-header">           
        <h1>
          Spotify Compare
        </h1>
        <br/> 
        <h6 style={{marginTop: '-10px'}}>
          compare your music with your friends' music!
        </h6>
        <Button onClick={() => {navigate("/AddUsers")}}>let's go!</Button>
      </header>             
    </div>
  );
}


export const Button = styled.button`
  color: white;
  font-size: 0.5em;
  margin: 1em;
  padding: 0.25em 1em;
  background-color: #3C3C3C;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);

  :hover {
    background-color: #2B2B2B;
  }

  :active {
    background-color: #1A1A1A;
  }
`


export default App;
