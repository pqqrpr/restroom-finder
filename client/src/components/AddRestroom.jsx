import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { RestroomContext } from './App.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const FormContainer = styled.div`
  // display: flex;
  align-items: left;
  text-align: left;
  // justify-content: space-between;
  padding: 0.3rem;
  margin: 1rem 0 0 1.5rem;
`;

const IconMap = styled.div`
  margin-top: 6rem;
  text-align: center;
  color: #bab3d2;
  position: absolute;
  top: 70%;
  left: 70%;
`;
const AddRestroom = () => {


  // const {count, setCount} = useContext(AttendeeContext);
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [accessible, setAccessible] = useState("");
  const [unisex, setUnisex] = useState("");
  const [table, setTable] = useState("");
  const [directions, setDirections] = useState("");
  const [comment, setComment] = useState("");

  const handleChangeName = (e) => { setName(e.target.value) };
  const handleChangeStreet = (e) => { setStreet(e.target.value) };
  const handleChangeCity = (e) => { setCity(e.target.value) };
  const handleChangeState = (e) => { setState(e.target.value) };
  const handleChangeCountry = (e) => { setCountry(e.target.value) };
  const handleChangeAccessible = (e) => { setAccessible(e.target.value) };
  const handleChangeUnisex = (e) => { setUnisex(e.target.value) };
  const handleChangeTable = (e) => { setTable(e.target.value) };
  const handleChangeDirections = (e) => { setDirections(e.target.value) };
  const handleChangeComment = (e) => { setComment(e.target.value) };

  const handleSubmit = (e) => {

    e.preventDefault();
    const data = {
      name,
      street,
      city,
      country,
      accessible,
      unisex,
      table,
      directions,
      comment
    }
    axios.post('/restrooms', data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => console.log('success'))
      .then(() => setCount(count +1))
      .catch((err) => console.log(err))
      .then(() => {
        setName("");
        setStreet("");
        setCity("");
        setCountry("");
        setAccessible("");
        setUnisex("");
        setTable("");
        setDirections("");
        setComment("");
      })
      .then (() => window.alert("The information was successfully saved"))
  }

  return (
    <>
    <FormContainer>
      <h3>Add a restroom you found!!</h3>

      <div>
        <h6>* marks required</h6>
        <form onSubmit={handleSubmit}>
          <label> Name * <br></br>
            <input
              name="name"
              type="text"
              size="60"
              value={name}
              onChange={handleChangeName}
              required>
            </input>
          </label><br></br>
          <label>Street * <br></br>
            <input
              name="street"
              type="text"
              size="60"
              value={street}
              onChange={handleChangeStreet}
              required>
            </input>
          </label><br></br>
          <label>City * <br></br>
            <input
              name="city"
              type="text"
              size="60"
              value={city}
              onChange={handleChangeCity}
              required>
            </input>
          </label><br></br>
          <label>State/Province * <br></br>
            <input
              name="state"
              type="text"
              size="60"
              value={state}
              onChange={handleChangeState}
              required>
            </input>
          </label><br></br>
          <label htmlFor="country">Country *</label><br></br>
          <select name="country" id="country" onChange={handleChangeCountry} defaultValue="usa" required>
            {/* <option value="">Please choose an option</option> */}
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
          </select><br></br>
          <label htmlFor="accessible">Accessible</label><br></br>
          <select name="accessible" id="accessible" onChange={handleChangeAccessible} defaultValue="Not accessible">
            {/* <option value="">Please choose an option</option> */}
            <option value="Accessible">Accessible</option>
            <option value="Not accessible">Not accessible</option>
          </select><br></br>
          <label htmlFor="unisex">Unisex</label><br></br>
          <select name="unisex" id="unisex" onChange={handleChangeUnisex} defaultValue="Gendered single stall or safe place">
            {/* <option value="">Please choose an option</option> */}
            <option value="Unisex/Gender neutral">Unisex/Gender neutral</option>
            <option value="Gendered single stall or safe place">Gendered single stall or safe place</option>
          </select><br></br>
          <label htmlFor="table">Changing Table</label><br></br>
          <select name="table" id="table" onChange={handleChangeTable} defaultValue="No changing table" required>
            <option value="Changing table">Changing table</option>
            <option value="No changing table">No changing table</option>
          </select><br></br>
          <label>Directions <br></br>
            <textarea
              name="directions"
              value={directions}
              placeholder="(e.g.: third floor in the back, by the dressing rooms...)"
              onChange={handleChangeDirections}
              rows="4"
              cols="60"
            />
          </label><br></br>
          <label>Comment <br></br>
            <textarea
              name="comment"
              value={comment}
              placeholder="(e.g.: you have to be a 'paying customer', just act like you are browsing for a bit...)"
              onChange={handleChangeComment}
              rows="4"
              cols="60"
            />
          </label><br></br>
          <button type="submit" >Add Restroom</button>
        </form>
      </div>
    </FormContainer>

    <IconMap>
      <FontAwesomeIcon icon={faMapLocationDot} size='10x' />
    </IconMap>
    </>
  )
}

export default AddRestroom;