import React,{useContext} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import fonts from '../styles/font';
import colors from '../styles/colors';
import FormItems from './componentsPage/FormItems';
import DataContext from '../context/DataContext';

export default function Client() {
  const {cart,setCart} = useContext(DataContext);

  if(cart === null || cart.selected === null){
    return <label></label>
  }

  const {seatsSelected} = cart.selected

  function submitBooking(event){
    event.preventDefault();
  }

  return (
    <Container>
      <h2>Prencha seus dados</h2>
      <form onSubmit={submitBooking} >
        <FormItems htmlFor='name' labelText='Nome completo:' type='text' />
        <FormItems htmlFor='phone' labelText='Telefone:' type='text' />
        <FormItems htmlFor='email' labelText='Email:' type='email' />
        {seatsSelected.map(seat =>
          <div key={seat.id}>
            <h4>Assento {seat.name}</h4>
            <FormItems htmlFor='meia' labelText='Meia-Entrada' type='radio'/>
            <FormItems htmlFor='inteira' labelText='Inteira' type='radio'/>
          </div>
        )}
        <button type='submit'>Reservar assentos</button>
      </form>
    </Container>
  )
};

const Container = styled.div`
  width: 90%;
  margin: 90px auto;
  box-shadow: ${colors.shadowLittle};
  font-family: ${fonts.familyRoboto};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 10px;
  padding: 20px;

  h2{
    color: ${colors.grayStrong};
    width: 100%;
    font-size: 20px;
    margin: 15px 0;
    font-weight: bold;
    text-align: center;
  }
  button{
    width: 180px;
    height: 40px;
    border: none;
    font-size: 16px;
    border-radius: 10px;
    background: ${colors.orange};
    color: ${colors.white};
    margin: 15px auto 0 auto;
    margin-left: calc((100% - 180px) / 2);
  }
  h4{
    color: ${colors.grayStrong};
    font-size: 18px;
    margin: 10px 0;
  }
`;