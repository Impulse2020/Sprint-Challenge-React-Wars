// Write your Character component here
import React from "react";

const Character = (props) =>{


return(


<div>

<button onClick={console.log(props.list)}>
    Show me some star wars
</button>

</div>
)

}

export default Character