import React from "react";

function Card({myname, list}){
    // console.log(props);
    return(
        <>
        This is a Card
        <h1>myname</h1>
        <ul>
            {list.map((l) => (
                <li key={l}>{l}</li>
            ))}
        </ul>
        </>
    )
}

export default Card;