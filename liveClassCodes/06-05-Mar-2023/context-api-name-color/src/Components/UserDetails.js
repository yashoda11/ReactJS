import React, { useContext } from 'react';
import { MyContext } from '../App';

const UserDetails = () => {

  const data = useContext(MyContext);
  return (
    <div style={{fontSize:"30px", fontWeight:"semi-bold"}}>
      <p style={{backgroundColor: data.color}}>My Name is : {data.name}</p>
      <p>My Favourite Color is : {data.color}</p>
    </div>
  );
};

export default UserDetails;