import React from 'react';

const Quantity = props => {
  return (
    <div
      className={`item-info`}
      data-id={props.id}
    >
      <div className='item-quantity release-product'>
        <span>
          <img src={props.qtyIconUrl} alt="quantity img"/>
        </span>
      </div>
    </div>
  );
}

Quantity.defaultProps = {
  id: '',
  qtyIconUrl: ''
}

export default Quantity;