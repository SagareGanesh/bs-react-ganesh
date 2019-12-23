import React from 'react';

const Thumbnail = props => {
  return (
    <div
      className={`thumbnail text-center`}
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

Thumbnail.defaultProps = {
  url: "#",
  altText: "product thumbnail alt text"
};

export default Thumbnail;
