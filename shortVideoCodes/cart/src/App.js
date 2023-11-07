import React, { useState, useEffect } from "react";
import axios from "axios";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.myjson.online/v1/records/5978a70b-ae81-4c9b-8fb4-600b1c4f1f05")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error("API response is not an array.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data: " + error);
      });
  }, []);
  

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="product-list">
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.src.tiny} alt={product.name} />
              {product.name} - ${product.price}
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <img src={product.imageUrl} alt={product.name} />
              {product.name} - ${product.price}
              <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingCart;
