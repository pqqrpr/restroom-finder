import React, { useState, useContext, useEffect }  from 'react';
import { RestroomContext } from './App.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import RestroomListEntries from './RestroomListEntries.jsx';
import styled from 'styled-components';


const ListContainer = styled.div`
  // display: flex;
  align-items: center;
  text-align: center;
  // justify-content: space-between;
  padding: 0.3rem;
  margin: 1rem 0 0 1.5rem;
`;

const IconMap = styled.div`
  margin-top: 6rem;
  text-align: center;
  color: #8377AF;
`;

const RestroomList = () => {

  const {restrooms, loading, setLoading} = useContext(RestroomContext);


console.log('loading', loading)
  return (

    <div>
      {loading && <div> &nbsp;&nbsp;&nbsp;Data Loading... </div>}
      {restrooms.map((restroom)=> <RestroomListEntries key={restroom.id} id={restroom.id} name={restroom.name} street={restroom.street} city={restroom.city} state={restroom.state} unisex={restroom.unisex} updated_at={restroom.updated_at} upvote={restroom.upvote} downvote={restroom.downvote} directions={restroom.directions} created_at={restroom.created_at} country={restroom.country} accessible={restroom.accessible} approved={restroom.approved} comment={restroom.comment} />)}
    </div>
  )

}

export default RestroomList;