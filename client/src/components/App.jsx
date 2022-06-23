import React from 'react';
import Search from './Search.jsx';
import RestroomList from './RestroomList.jsx';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  backgroud: #41326B
`;
const BodyContainer = styled.div`
  background: #8377AF
`;
const App = () => {

  return (
    <>
      <HeaderContainer>
      <header>
        <nav>
          <h1>RESTROOM FINDER</h1>
          <div>
            <span> Home</span> |
            <span> Add a Restroom</span> |
            <span> About</span> |
            <span> Contact</span>
          </div>
        </nav>
        <Search />
      </header>
      </HeaderContainer>
      <BodyContainer>
      <div>
        <RestroomList />
      </div>
      </BodyContainer>
    </>
  )

}

export default App;