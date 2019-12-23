import React from 'react';
import styled from 'styled-components';

import Thumbnail from './Thumbnail/Thumbnail.jsx';
import Actions from './Actions/Actions.jsx';
import Months from './Months/Months.jsx';
import Caption from './Caption/Caption.jsx';


const ProductCard = props => {
  return (
    <div
      className={ `${ props.className } product mb-3` }
      data-product-id={ props.productId }
      data-release-id={ props.releaseId }
    >
      <Thumbnail
        productId={ props.productId }
        imgSrc={ `${ props.imgPath }` }
        altText={ props.imgAltText }
      />

      <div className="buyplan text-center" data-ats-visible="false" data-sold="true">
        <Actions
          liked={ props.liked }
          imgUrl={ `${ props.imgPath }` }
          imgAltText={ props.imgAltText }
        />

        <Months badges={ props.badges }/>
      </div>

      <Caption
        name={ props.captionName }
        color={ props.captionColor }
        price={ props.captionPrice }
        sku={ props.captionSku }
      />
    </div>
  );
};

const StyledProductCard = styled(ProductCard)`
  display: inline-block;
  margin-bottom: 20px;
  margin-left: 0px !important;
  min-height: 300px !important;
  text-align: center;
  border-radius: 5px;
  border: 1px solid transparent;
  position: relative;
  vertical-align: top;
  width: 195px !important;
  margin-right: 10px;
  &:hover {
    border: 1px solid #ddd;
  }
`;

ProductCard.defaultProps = {
  productId: 120055,
  releaseId: 1424,
  imgPath: "v1561596065/production/product_asset/image/243034.jpg",
  imgAltText: "product thumbnail alt text",
  liked: false
};

export default StyledProductCard;

