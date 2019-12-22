import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

import ProductCard from 'components/ProductCard/ProductCard.jsx';

const App = props => {
  return(
    <Container fluid className={ props.className }>
      <Row>
        <Col>
          <ProductCard
            imgSrc="https://res.cloudinary.com/brandscope/image/upload/c_fill,h_160,w_128/v1561596065/production/product_asset/image/243034.jpg"
            liked={ true }
          />
        </Col>
        <Col>
          <ProductCard
            imgSrc="https://res.cloudinary.com/brandscope/image/upload/c_fill,h_160,w_128/v1561596100/production/product_asset/image/243036.jpg"
          />
        </Col>
        <Col>
          <ProductCard
            imgSrc="https://res.cloudinary.com/brandscope/image/upload/c_fill,h_160,w_128/v1561596111/production/product_asset/image/243037.jpg"
        />
        </Col>
        <Col>
          <ProductCard
            imgSrc="https://res.cloudinary.com/brandscope/image/upload/c_fill,h_160,w_128/v1561597497/production/product_asset/image/243038.jpg"
            liked={ true }
          />
        </Col>
        <Col>
          <ProductCard
            imgSrc="https://res.cloudinary.com/brandscope/image/upload/c_fill,h_160,w_128/v1561597505/production/product_asset/image/243039.jpg"
          />
        </Col>
        <Col>
          <ProductCard
            imgSrc="https://res.cloudinary.com/brandscope/image/upload/c_fill,h_160,w_128/v1561597610/production/product_asset/image/243040.jpg"
          />
        </Col>
        <Col>
          <ProductCard
            imgSrc="https://res.cloudinary.com/brandscope/image/upload/c_fill,h_160,w_128/v1561597696/production/product_asset/image/243041.jpg"
          />
        </Col>
        <Col>
          <ProductCard
            imgSrc="https://res.cloudinary.com/brandscope/image/upload/c_fill,h_160,w_128/v1561597705/production/product_asset/image/243042.jpg"
          />
        </Col>
        <Col>
          <ProductCard
            imgSrc="https://res.cloudinary.com/brandscope/image/upload/c_fill,h_160,w_128/v1/production/product_asset/image/5b4681e4b80cc8166a000a0d.jpg"
          />
        </Col>
        <Col>
          <ProductCard
            imgSrc="https://res.cloudinary.com/brandscope/image/upload/c_fill,h_160,w_128/v1/production/product_asset/image/5b4681f6b80cc82097000457.jpg"
            liked={ true }
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;