// Write your Character component here
import React from "react";
import styled from 'styled-components';



const CharacterPanel = styled.div`
color:white;
border:2px solid black;
width:100%;
display:flex;
justify-content:center;
align-content:center;
flex-direction:column;
margin:1.5%;
padding-top:1%;
padding-bottom-1%;
-webkit-text-stroke: 1px black;
h3{
    font-size:1.75rem;
}
p{
    font-size:1.5rem;
}
`;

const Character = props =>{
    const handleGetCharacters = event =>{
        event.preventDefault();
        props.getCharacters();
        

   }
  
 
console.log(props.list)
return(
<div>
    {props.error ? (<h3>{props.error}</h3>) : (

        props.list.map(character => (
            
            <CharacterPanel  key={character.name} >
                <h1>Name : {character.name}</h1>
                <h3>Gender : {character.gender}</h3>
                <p> Hair color: {character.hair_color} Height: {character.height} Mass:{character.mass}</p>
                <p> Birth Year: {character.birth_year}</p>
            </CharacterPanel>
        ))




    )}




    {props.fetching ? ('Loading') :(
    <button onClick={handleGetCharacters}>
        Show me some star wars
    </button>
    )}



</div>
)
}

export default Character