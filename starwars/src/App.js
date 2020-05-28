import React, { useState } from 'react';
import axios from "axios";
import styled from 'styled-components';
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
 const getCharacters = (event) => {
 
  const api = 'https://swapi.py4e.com/api/people/';
  setIsFetching(true);
  axios.get(api)
  .then(response =>
    setCharacters(response.data.results), setIsFetching(false)
    )
  .catch(error => {
    console.log(`Error message: ${error}`);
        setErrorState(`${error}`);
        setIsFetching(false);
  })
  } 
  const AppDiv = styled.div`
  display:flex;
  justify-content:center;
  align-content:center;
  flex-direction:column;
  .sc-AxjAm:hover{
    background-color:tan;
  }`;
  const Header = styled.h1`text-align:center;
  width:100%;
  height:10vh;
  top-padding:0px;
  top-margin:0px;
  font-size:3rem;
  color:white;
  -webkit-text-stroke: 3px blue;`;




  return (
    <AppDiv>
      <Header>Welcome, young padawan</Header>
      <Character list={characters} error={ErrorState} fetching={isFetching} getCharacters={getCharacters} />
    </AppDiv>
  );
}

export default App;
