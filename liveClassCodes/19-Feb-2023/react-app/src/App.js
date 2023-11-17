import React from "react";
import Card from "./Card";

function App(){
    
    let list = ["hitest", "Anurag", "Sahu"];
    return(
        <>
        <div>App</div>
        <Card myname="hitesh" list={list} />
        </>
    )
}

export default App;