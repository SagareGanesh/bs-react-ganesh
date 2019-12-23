import React from 'react';
import styled from 'styled-components';

const Zoom = props => {
  return (
    <div
      className={`zoom ${props.className}`}
      data-product-id={props.productId}
    >
      <img src={props.zoomIconUrl} alt="zoom icon"/>
    </div>
  );
}

const StyledZoom = styled(Zoom)`
  margin-bottom: 1ex;
`;

Zoom.defaultProps = {
  productId: '',
  zoomIconUrl: ''
};

export default StyledZoom;
