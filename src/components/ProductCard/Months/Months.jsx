import React from 'react';
import styled from 'styled-components';

import BadgeList from '../Actions/BadgeList/BadgeList.jsx'

const Months = props => {
  return (
    <BadgeList badges={ props.badges } />
  );
};

Months.defaultProps = {
  badges: [
    {
      id: 1,
      text: "DEC19"
    },
    {
      id: 2,
      text: "JAN20"
    }
  ]
};

const StyledMonths = styled(Months)`
  border-bottom: 1px solid #DDDDDD;
`;

export default StyledMonths;
