import React, { useContext } from 'react';
import { MyContext } from '../App';

const Button = () => {
  const data = useContext(MyContext)
  return (
    <div style={{backgroundColor: data.color, fontSize: "30px", padding: "10px", display: "inline", }}>
      Button
    </div>
  );
};

export default Button;