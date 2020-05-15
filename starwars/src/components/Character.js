// Write your Character component here
import React from "react";

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
            
            <div key={character.name} >
                <h1>Name : {character.name}</h1>
                <h3>Gender : {character.gender}</h3>
                <p> Hair color: {character.hair_color} Height: {character.height} Mass:{character.mass}</p>
                <p> Birth Year: {character.birth_year}</p>
            </div>
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