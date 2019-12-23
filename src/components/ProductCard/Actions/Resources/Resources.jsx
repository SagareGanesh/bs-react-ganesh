import React from 'react';

const Resources = props => {
  return (
    <div
      className={`resources`}
      data-product-id={props.productId}
    >

    </div>
  );
}

Resources.defaultProps = {
  productId: ''
}

export default Resources;