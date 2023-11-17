import React from "react";
import "./App.css"

function Card({myname, list, details}){
    // console.log(props);
    return(
        <>
        This is a Card
        <div>myname</div>
        <h1>Name : {details.name?.title} {details.name?.first} {details.name?.last}</h1>
        <h2>Gender : {details.gender}</h2>
        <h2>Country : {details.location?.country}</h2>
        <h2>Country : {details.location?.country}</h2>
        <h2>Phone : {details.phone}</h2>
        <h2>Email : {details.email}</h2>

        <ul>
            {list.map((l) => (
                <li key={l}>{l}</li>
            ))}
        </ul>
        </>
    )
}

export default Card;