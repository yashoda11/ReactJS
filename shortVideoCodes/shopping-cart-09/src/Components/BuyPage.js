import React, { useState, useEffect } from "react";
import Axios from "axios";
import CartItem from "./CartItem";

import { faker } from '@faker-js/faker';

import { Container, Col, Row } from "reactstrap";




const apiKey = "INSET_YOUR_KEY_HERE";

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
const localurl = "https://api.myjson.online/v1/records/da3d2764-4e71-40a5-a868-0033cf4a9357";

const BuyPage = ({ addInCart }) => {

  const localurl = "https://api.myjson.online/v1/records/42353661-20fb-4e5f-bd89-5f2c07bf893f";

  const [product, setProduct] = useState([]);

  //   const fetchPhotos = async () => {
  //     const response = await Axios.get(url, {
  //       header: {
  //         Authorization: apiKey
  //       }
  //      }
  //     });

  const fetchPhotos = async () => {
    const { data } = await Axios.get(localurl, {});

    const { photos } = data;

    const allProduct = photos.map(photo => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: faker.internet.userName(),
      productPrice: faker.string.uuid(),
      id: faker.string.uuid()
    }));

    setProduct(allProduct);
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
