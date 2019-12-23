import React, { useState } from "react";
import styled from "styled-components";
import { TiTick, TiTickOutline } from 'react-icons/ti';

const LikeDislike = props => {
  const [liked, setLiked] = useState(props.liked);

  const toggleLiked = () => {
    return setLiked(!liked);
  }

  return (
    <div
      className={`actions ${props.className}`}
    >
      <div
        className={`like ${liked ? 'liked' : ''}`}
        onClick={toggleLiked}
        data-id={props.id}
        data-product-id={props.productId}
        data-record-id={props.recordId}
      >
        {
          liked ? <TiTick /> : <TiTickOutline />
        }
      </div>
    </div>
  );
}

const StyledLikeDislike = styled(LikeDislike)`
  margin-bottom: 1ex;
  cursor: pointer;

  svg {
    width: 2em;
    height: auto;
    fill: #2f8be2;
  }
`;

LikeDislike.defaultProps = {
  id: '',
  productId: '',
  recordId: '',
  likedUrl: "https://brandscope.com.au/images/like_button_on.png",
  notLikedUrl: "https://brandscope.com.au/images/like_button_off.png"
};

export default StyledLikeDislike;