import React, { useState } from 'react';
import axios from "axios";
import Character from "./components/Character"
import './App.css'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const [ErrorState, setErrorState] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const api = 'https://swapi.py4e.com/api/people/';
 // setIsFetching(true);
  axios.get(api)
  .then(response =>
    setCharacters(response.data.results)
  //  setIsFetching(false)
    )
  .catch(error => {


  } )






  return (
    <div className="App">
      <h1 className="Header">Welcome, young padawan</h1>
      <Character list={characters} />
    </div>
  );
}

export default App;
