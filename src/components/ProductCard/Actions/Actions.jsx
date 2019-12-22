import React from 'react';
import styled from 'styled-components';

import LikeDislike from './LikeDislike/LikeDislike.jsx';
import Zoom from './Zoom/Zoom.jsx';
import Resources from './Resources/Resources.jsx';
import Quantity from './Quantity/Quantity.jsx';

const Actions = props => {
  return (
    <div className={`${props.className} ${props.additionalClasses}`}>
      <LikeDislike
        liked={props.liked}
        likedUrl={props.likedUrl}
        notLikedUrl={props.notLikedUrl}
      />

      <Zoom zoomIconUrl={props.zoomIconUrl} />

      <Resources />

      <Quantity qtyIconUrl={props.qtyIconUrl} />
    </div>
  );
}

Actions.defaultProps = {
  likedUrl: "http://localhost:3000/images/like_button_on.png",
  notLikedUrl: "http://localhost:3000/images/like_button_off.png",
  zoomIconUrl: "http://localhost:3000/images/zoom_icon.png",
  qtyIconUrl: "http://localhost:3000/images/qty.png"
}

const StyledActions = styled(Actions)`
  position: absolute;
  top: 2%;
  right: 8%;
`;

export default StyledActions;