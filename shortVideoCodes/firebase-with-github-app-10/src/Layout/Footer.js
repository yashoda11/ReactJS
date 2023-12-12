import React from 'react';
import { Container } from 'reactstrap';

const Footer = () => {
  return (
    <Container
        fluid
        tag='footer'
        className='text-center text-white text-uppercase p-3 bg-info fixed-bottom fst-italic'
    >
      @LCO Github search App with Firebase
    </Container>
  );
};

export default Footer;