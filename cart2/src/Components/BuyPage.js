import React, { useState, useEffect } from "react";
import Axios from "axios";
import CartItem from "./CartItem";

import { faker } from "@faker-js/faker";
import { Container, Col, Row } from "reactstrap";

const apiKey = "INSET_YOUR_KEY_HERE";

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
const localurl = "https://api.myjson.online/v1/records/908eb7fc-76d7-4f1e-bf9f-c7f7fc3686d3";
const BuyPage = ({ addInCart }) => {
const [product, setProduct] = useState([]);

  //   const fetchPhotos = async () => {
  //     const response = await Axios.get(url, {
  //       header: {
  //         Authorization: apiKey
  //       }
  //     });

  const fetchPhotos = async () => {
    const localurl = "https://api.myjson.online/v1/records/908eb7fc-76d7-4f1e-bf9f-c7f7fc3686d3";
  
    try {
      const { data } = await Axios.get(localurl, {});
      const { photos } = data;
      console.log("Fetched photos:", photos); // Log the fetched photos
      const allProduct = photos.map((photo) => ({
        smallImage: photo.src.small,
        tinyImage: photo.src.tiny,
        productName: faker.commerce.productName(),
        productPrice: faker.commerce.price(),
        id: faker.internet.uuid(),
      }));
      setProduct(allProduct);
    } catch (error) {
      console.error("Error fetching data: " + error);
    }
  };
  

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map(product => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
