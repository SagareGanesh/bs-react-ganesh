import React from 'react';
import styled from 'styled-components';

const Caption = props => {
  return (
    <div
      className={`
        ${ props.className } ${ props.additionalClasses }
        caption d-flex flex-column text-center
      `}
    >
      <span className="name d-block text-truncate">
        { props.name }
      </span>

      <span className="color">
        { props.color }
      </span>

      <br />

      <span className="price">
        { props.price }
      </span>

      <br />

      <span className="sku">
        { props.sku }
      </span>
    </div>
  );
};

const StyledCaption = styled(Caption)`
  font-size: 12px;
  color: #666;
  & > .name {
    color: #444;
  }
`;

Caption.defaultProps = {
  name: "GRANITA S/S WOVEN BLOUSE ...",
  color: "GHR-Golden Hour",
  price: "$30.43 ($69.99)",
  sku: "A505NGRA"
};

export default StyledCaption;
