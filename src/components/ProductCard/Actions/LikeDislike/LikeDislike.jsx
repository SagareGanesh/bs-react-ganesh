import React, { useState } from "react";
import styled from "styled-components";

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
          liked ?
            <img src={props.likedUrl} alt="liked img"/>
          :
            <img src={props.notLikedUrl} alt="not liked img"/>
        }
      </div>
    </div>
  );
}

const StyledLikeDislike = styled(LikeDislike)`
  margin-bottom: 1ex;
  cursor: pointer;
`;

LikeDislike.defaultProps = {
  id: '',
  productId: '',
  recordId: '',
  likedUrl: "https://brandscope.com.au/images/like_button_on.png",
  notLikedUrl: "https://brandscope.com.au/images/like_button_off.png"
};

export default StyledLikeDislike;