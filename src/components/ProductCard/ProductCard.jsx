import React from 'react';

import Thumbnail from './Thumbnail/Thumbnail.jsx';
import Actions from './Actions/Actions.jsx';
import Months from './Months/Months.jsx';
import Caption from './Caption/Caption.jsx';


const ProductCard = props => {
  return (
    <div
      className={ `${props.className} product mb-3` }
      data-product-id={ props.productId }
      data-release-id={ props.releaseId }
    >
      <Thumbnail
        productId={ props.productId }
        url='/'
        imgSrc={ props.imgSrc }
      />

      <div className="buyplan text-center" data-ats-visible="false" data-sold="true">
        <Actions liked={ props.liked } />

        <Months />
      </div>

      <Caption />
    </div>
  );
};

ProductCard.defaultProps = {
  productId: 120055,
  releaseId: 1424,
  imgSrc: "https://res.cloudinary.com/brandscope/image/upload/c_fill,h_160,w_128/v1561596065/production/product_asset/image/243034.jpg",
  liked: false
};

export default ProductCard;

