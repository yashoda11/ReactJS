import React , { useState, createContext } from "react";

import Navbar from "./Components/Navbar"
import HeroSection from "./Components/HeroSection";
import UseCard from "./Components/UserCard"

export const MyContext = createContext();

function App() {

  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const myName = (event) => {
    setName(event.target.value);
  };
  const myColor = (event) => {
    setColor(event.target.value);
  };
  return (
    <MyContext.Provider value={{name, color}}>
    <Navbar />
    <form>
    <input 
      type={"text"}
      value = {name}
      placeholder = "Enter Use Name"
      onChange = {myName}    
    />
    <input 
      type={"text"}
      value={color}
      placeholder="Enter Color"
      onChange={myColor}
    />
    </form>
    <HeroSection />
    <UseCard />
    </MyContext.Provider>
  );
}

export default App;