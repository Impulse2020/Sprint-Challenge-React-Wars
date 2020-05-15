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
            <div key={character.name}>
                <h1>{character.name}</h1>



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