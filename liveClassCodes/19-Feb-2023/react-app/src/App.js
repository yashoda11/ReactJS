import React, { useEffect, useState } from "react";
import Card from "./Card";
import Axios from "axios";

function App(){

    const [details, setDetails] = useState({});

    const fetchDetails = async () => {
        const {data} = await Axios.get("https://randomuser.me/api");
        console.log("RESPONSE", data);

        const details = data.results[0];
        setDetails(details)
    };
    
    let list = ["hitest", "Anurag", "Sahu"];

    useEffect(()=>{
        fetchDetails()
    }, []);


    return(
        <>
        <div>App</div>
        <Card myname="hitesh" list={list} details={details} />
        <button
        onClick={fetchDetails}
        >get Details
        </button>
        </>
    )
}

export default App;