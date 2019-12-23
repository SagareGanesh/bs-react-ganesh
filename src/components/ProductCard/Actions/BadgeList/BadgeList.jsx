import React from 'react';
import { Badge } from 'reactstrap';
import styled from 'styled-components';

const BadgeList = props => {
  return props.badges.map((badge, index) => {
    return (
      <Badge
        key={ badge.id || index }
        className={`${ props.additionalClasses } mr-1`}
        color="secondary"
      >
        { badge.text }
      </Badge>
    );
  });
};

const StyledBadgeList = styled(BadgeList)`
  background-color: #BFBFBF;
  font-size: 0.7rem;
`;

export default StyledBadgeList;
