import React from 'react';
import styled from 'styled-components';

const Thumbnail = props => {
  return (
    <div
      className={`${ props.className } thumbnail text-center`}
      data-product-id={props.productId}
    >
      <a href={props.url}>
        <img
          className='img-fluid'
          src={props.imgSrc}
          alt={props.altText}
        />
      </a>
    </div>
  );
}

const StyledThumbnail = styled(Thumbnail)`
  height: 156px;
  border: none;
  box-shadow: none;
  display: block;
  padding: 4px;
  line-height: 20px;
  transition: all .2s ease-in-out;
`;

Thumbnail.defaultProps = {
  url: "#",
  altText: "product thumbnail alt text"
};

export default StyledThumbnail;
