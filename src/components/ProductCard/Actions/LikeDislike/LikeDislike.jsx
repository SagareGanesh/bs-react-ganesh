import React, { useState } from "react";
import styled from "styled-components";

const LikeDislike = props => {
  const [liked, setLiked] = useState(props.liked);

  const toggleLiked = () => {
    return setLiked(!liked);
  }

  return (
    <div
      className={`actions ${props.className} ${props.additionalClasses}`}
    >
      <div
        className={`like ${liked ? 'liked' : ''}`}
        onClick={toggleLiked}
        data-id={props.id}
        data-product={props.productId}
        data-record={props.recordId}
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
`

LikeDislike.defaultProps = {
  id: '',
  productId: '',
  recordId: '',
  likedUrl: "https://brandscope.com.au/images/like_button_on.png",
  notLikedUrl: "https://brandscope.com.au/images/like_button_off.png"
};

export default StyledLikeDislike;