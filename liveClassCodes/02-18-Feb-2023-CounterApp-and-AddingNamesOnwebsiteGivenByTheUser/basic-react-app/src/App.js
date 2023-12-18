import { useState } from "react";
import "./App.css";

function SuperHeros(){
  const [hero, setHero] = useState(["Super-Man", "Spider-Man", "Iron-Man"]);
  const [name, setName] = useState(() => "Ant-Man")

  function onAddName(){
    setHero([...hero, name])
    setName("")
  }

  return(
    <div>
      <ol >
        {hero.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ol>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
       onClick={onAddName}
       >Add Name</button>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(100);

  function oneUp(){
    setCount(count + 1);
  }

  return (
    <div>
    <button 
    onClick={oneUp} 
    className="button"
    >Count : {count}</button>
    <SuperHeros />
    </div>
  )
}

function App() {
  return (
    <div>
    <h1>Hello React</h1>
    <Counter />
    </div>
  );
}

export default App;