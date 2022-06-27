import React, { useState, useContext, useEffect } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { RestroomContext } from './App.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem;
  margin: 0.5rem 0 0 0;
  // border: solid;
  border-color: #fff;
  background: #afa7cb;
`;

const SearchInput = styled.input`
  margin: 0 0.1rem 0 0.5rem;
  border: none;
  outline: none;
  background: #afa7cb;
  width: 100%;
`;

const Search = () => {

  const {searchLocation} = useContext(RestroomContext);
  const [address, setAddress] = useState("");
  const [coordinates, setCorordinates] = useState({lat: null, lng: null});

  // const [search, setSearch] = useState("");

  // const handleSearchChange = (e) => {
  //   setSearch(e.target.value);
  //   searchLocation(search);
  // };
  const handleSelect =  (value) => {
    console.log('inside handleSelect', value)
    let idx = value.indexOf(',');
    let loc = value.slice(0, idx);
    setAddress(value)
    searchLocation(loc)


    // geocodeByAddress(value)
      // .then(results => loggetLatLng(results[0]))
    //   .then(latLng => console.log('Success', latLng))
      // .catch(error => console.error('Error', error))
    //   .then(setAddress(value))
    //   .then(setCoordinates(latLng))
  }


  return (

      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
      <>
       <SearchContainer>
          {/* <p>Latitude: {coordinates.lat}</p>
          <p>Longitude: {coordinates.lng}</p> */}
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: 'white' }}/>
          <SearchInput {...getInputProps({
            id: "pac-input",
            type: "text",
            placeholder: "Enter a place for search...",
            className: 'location-search-input'
          })}
          />
        </SearchContainer>
          <div className="pac-container">
            {/* {loading ? <div>...loading</div> : null} */}
            {suggestions.map((suggestion) => {
                const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
                const style = suggestion.active
                ? {backgroundColor: "#8377AF", cursor: 'pointer'}
                : {backgroundColor: "#afa7cb", cursor: 'pointer'}

                return (

                  <div key={suggestion.description}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}>
                    <div className="pac-item">
                      <span className="pac-icon pac-icon-marker "></span>
                      {/* <span className="pac-item-query"><span className="pac-matched"></span></span> */}

                      <span>{suggestion.description}</span>
                    </div>
                  </div>
                )
             }
            )}
          </div>
      </>
        )}
      </PlacesAutocomplete>
  )
}

export default Search;