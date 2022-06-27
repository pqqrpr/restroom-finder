import React, { useState, useContext, useEffect } from 'react';
import { RestroomContext } from './App.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
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
  color:  #bab3d2;
  position: absolute;
  top: 40%;
  left: 35%;
`;
// #8377AF
const Home = () => {


  return (
    <ListContainer>
      <h3>Restrooms are matter!!</h3>
      <p> Search location...</p>
      <p> Find a safe restroom for you.</p>
      <p> Add a restroom you found.</p>
      <p> Make a better world.</p>

      <IconMap>
        <FontAwesomeIcon icon={faMapLocationDot} size='10x' />
      </IconMap>
    </ListContainer>
  )

}

export default Home;