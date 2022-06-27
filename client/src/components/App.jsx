import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import Home from './Home.jsx';
import Search from './Search.jsx';
import About from './About.jsx';
import AddRestroom from './AddRestroom.jsx';
import MapView from './MapView.jsx';
import RestroomList from './RestroomList.jsx';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToiletPaper } from '@fortawesome/free-solid-svg-icons';

export const RestroomContext = React.createContext();

const ToiletPaper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Title = styled.h1`
  margin-left: 0.5rem;
`;

const App = () => {

  const [restrooms, setRestrooms] = useState([]);
  const [filteredRestrooms, setFilteredRestrooms] = useState(restrooms);
  const [view, setView] = useState('Home');
  const [location, setLocation] = useState('');
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hoverH, setHoverH] = useState(false);
  const [hoverA, setHoverA] = useState(false);
  const [hoverR, setHoverR] = useState(false);
  const [hoverC, setHoverC] = useState(false);

  const handleMouseEnterH = () => { setHoverH(true); };
  const handleMouseLeaveH = () => { setHoverH(false); };
  const handleMouseEnterA = () => { setHoverA(true); };
  const handleMouseLeaveA = () => { setHoverA(false); };
  const handleMouseEnterR = () => { setHoverR(true); };
  const handleMouseLeaveR = () => { setHoverR(false); };
  const handleMouseEnterC = () => { setHoverC(true); };
  const handleMouseLeaveC = () => { setHoverC(false); };

  const searchLocation = (loc) => {
    console.log('inside searchLocation:')
    setView('List')
    setLoading(true)
    let url = `https://www.refugerestrooms.org/api/v1/restrooms/search?query=${loc}`;
    console.log('search location url:', url)
    axios.get(url)
      .then((response) => {
        setRestrooms(response.data);
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err))
  }

  const changeView = (name) => {
    setView(name);
  };

  const renderView = () => {
    switch (view) {
      case "Home":
        return <Home />;
      case "AddRestroom":
        return <AddRestroom />;
      case "About":
        return <About />;
      case "List":
        return <RestroomList />;
      default:
        return <Home />;
    };
  };
 console.log('App loading', loading)
  return (
    <>
      <RestroomContext.Provider value={{ setView, restrooms, setRestrooms, count, setCount, searchLocation, loading, setLoading }}>
        <header>
          <nav>
            <ToiletPaper>
              <FontAwesomeIcon icon={faToiletPaper} size='2x' style={{ color: 'white' }} />
              <Title>RESTROOM <span style={{ color: 'white' }}>FINDER</span></Title>
            </ToiletPaper>
            <MenuContainer>
              <span style={{
                cursor: 'pointer',
                color: hoverH ? 'white' : ''
              }}
                onMouseEnter={handleMouseEnterH}
                onMouseLeave={handleMouseLeaveH}
                onClick={() => { setView('Home') }}
              > Home</span> &nbsp;&nbsp;|&nbsp;&nbsp;
              <span style={{
                cursor: 'pointer',
                color: hoverR ? 'white' : ''
              }}
                onMouseEnter={handleMouseEnterR}
                onMouseLeave={handleMouseLeaveR}
                onClick={() => { setView('AddRestroom') }}
              > Add a Restroom</span>&nbsp;&nbsp; |&nbsp;&nbsp;
              <span style={{
                cursor: 'pointer',
                color: hoverA ? 'white' : ''
              }}
                onMouseEnter={handleMouseEnterA}
                onMouseLeave={handleMouseLeaveA}
                onClick={() => { setView('About') }}
              > About</span> &nbsp;&nbsp;|&nbsp;&nbsp;
              <span style={{
                cursor: 'pointer',
                color: hoverC ? 'white' : ''
              }}
                onMouseEnter={handleMouseEnterC}
                onMouseLeave={handleMouseLeaveC}
              > Contact</span>
            </MenuContainer>
          </nav>
          <Search />
        </header>
        {renderView()}
        {/* <RestroomList /> */}
      </RestroomContext.Provider>
    </>
  )
}

export default App;