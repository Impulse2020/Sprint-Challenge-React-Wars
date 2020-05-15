// Write your Character component here
import React from "react";

const Character = (props) =>{
    const handleGetCharacters = event =>{
        event.preventDefault();
        props.GetCharacters();
    }
console.log(Character)
return(


<div>

<button onClick={handleGetCharacters}>
    Show me some star wars
</button>

</div>
)

}

export default Character