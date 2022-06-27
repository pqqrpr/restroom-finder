import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ListEntries = styled.div`
  margin: 0.5rem 1rem 1rem 1rem;
  padding: 1rem 1rem 1.5rem 1rem;
  border-bottom: 1px solid;
`;
const Bold = styled.span`
  font-weight: bold;
`;

const RestroomListEntries = ({ accessible, approved, city, comment, country, created_at, directions, downvote, id, name, state, street, unisex, updated_at, upvote }) => {

  const [restrooms, setRestrooms] = useState([]);
  const [filteredRestrooms, setFilteredRestrooms] = useState(restrooms);


  return (
    <ListEntries>
      <h4>Name: &nbsp;&nbsp;&nbsp;&nbsp;{name}</h4>
      <Bold>Address: </Bold>&nbsp;&nbsp;&nbsp;{street},&nbsp;&nbsp; {state},&nbsp;&nbsp;{country}<br></br>
      <Bold>Accessible:</Bold> &nbsp;&nbsp;{accessible}<br></br>
      <Bold> Unisex: </Bold>&nbsp;&nbsp; {unisex}<br></br>
      <Bold>Comment:</Bold> &nbsp;&nbsp;{comment}
    </ListEntries>
  )

}

export default RestroomListEntries;