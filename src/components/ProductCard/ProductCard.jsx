import React from 'react';

import Thumbnail from './Thumbnail/Thumbnail.jsx';
import Actions from './Actions/Actions.jsx';
import Months from './Months/Months.jsx';
import Caption from './Caption/Caption.jsx';


const ProductCard = props => {
  return (
    <div
      className={ `product mb-3` }
      data-product-id={ props.productId }
      data-release-id={ props.releaseId }
    >
      <Thumbnail
        productId={ props.productId }
        imgSrc={ `${ props.imgPath }` }
        altText={ props.imgAltText }
      />

      <div className="buyplan text-center" data-ats-visible="false" data-sold="true">
        <Actions liked={ props.liked } />

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

ProductCard.defaultProps = {
  productId: 120055,
  releaseId: 1424,
  imgPath: "v1561596065/production/product_asset/image/243034.jpg",
  imgAltText: "product thumbnail alt text",
  liked: false
};

export default ProductCard;

