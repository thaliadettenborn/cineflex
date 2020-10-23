import React,{useContext} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Link,useHistory} from 'react-router-dom';

import fonts from '../styles/font';
import colors from '../styles/colors';
import FormItems from './componentsPage/FormItems';
import DataContext from '../context/DataContext';

export default function Client() {
  const {cart,setCart} = useContext(DataContext);
  const history = useHistory();

  if(cart === null || cart.selected === null){
    return <label></label>
  }

  const {seatsSelected} = cart.selected

  function submitBooking(event){
    event.preventDefault();

    const {name,phone,email} = event.target.elements;
    const tickets = seatsSelected.map((seat,i) => {
      return {
        id: seat.id,
        value: event.target.elements[`ticket${i+1}`].value
      }
    })
    cart.client ={
      name: name.value,
      phone: phone.value,
      email: email.value,
      tickets
    }
    setCart({...cart})

    axios
      .post('https://mock-api.bootcamp.respondeai.com.br/api/v1/cineflex/seats/book_many',{ids: seatsSelected.map(seat => seat.id)})
      .then(response => history.push("/sucesso"))
  }



  return (
    <Container>
      <h2>Prencha seus dados</h2>
      <form onSubmit={submitBooking} >
        <FormItems htmlFor='name' labelText='Nome completo:' type='text' name='name' />
        <FormItems htmlFor='phone' labelText='Telefone:' type='text' name='phone' />
        <FormItems htmlFor='email' labelText='Email:' type='email' name='email' />
        {seatsSelected.map((seat,i) =>
          <div key={seat.id}>
            <h4>Assento {seat.name}</h4>
            <FormItems htmlFor='meia' labelText='Meia-Entrada' type='radio' count={i+1}/>
            <FormItems htmlFor='inteira' labelText='Inteira' type='radio' count={i+1}/>
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