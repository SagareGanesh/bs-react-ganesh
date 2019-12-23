import React from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';

import ProductCard from 'components/ProductCard/ProductCard.jsx';

const ProductCardList = props => {
  return props.products.map(product => {
    let badges = product.month_with_year.map(str => {
      return {
        id: str,
        text: str
      }
    });

    let prdct = product.product;

    let captionPrice = `
      ${ product.display_wholesale_price }
      (${ product.retail_price_formatted })
    `;

    return (
      <Col key={ product.id } className={ props.className }>
        <ProductCard
          imgPath={ prdct.primary_image }
          imgAltText={ prdct.name }
          productId={ product.product_id }
          releaseId={ product.releaseId }
          badges={ badges }
          captionName={ prdct.name }
          captionColor={ prdct.display_colour }
          captionPrice={ captionPrice }
          captionSku={ prdct.sku }
        />
      </Col>
    );
  });
}

const StyledProductCardList = styled(ProductCardList)`
  flex-grow: 0;
  align-content: flex-start;
`;

export default StyledProductCardList;
