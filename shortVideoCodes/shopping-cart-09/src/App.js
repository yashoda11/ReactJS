import React, {useState} from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import { toast } from 'react-toastify';
import BuyPage from './Components/BuyPage';

function App() {

  const [cartItem, setCartItem] = useState([]);

  const addInCart = item =>{
    const isAlreadyAdded = cartItem.findIndex(function(array){
      return array.id === item.id;
    })

    if (isAlreadyAdded !== -1) {
      toast("Item already added in Card", {
        type: "error"
      })
    };

    setCartItem([...cartItem, item]);

    //buy item
    const buyNow = () => {
      setCartItem([]);

      toast("Purchase Complete", {
        type: "succes"
      })
    };

    // Remove
    const removeItem = item => {
      setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id))
    };
  }

  return (
    <div className="App">
    <BuyPage addInCart={addInCart} />
    </div>
  );
}

export default App;