import React,{useContext} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import fonts from '../styles/font';
import colors from '../styles/colors';
import DataContext from '../context/DataContext';

export default function Sucess() {
  const {cart,setCart} = useContext(DataContext);

  if(cart === null || cart.selected === null || cart.client === null){
    return <label></label>
  }
  
  const {name,phone,email,tickets} = cart.client;
  const {date,showtime} = cart.selected;

  return(
    <Container>
      <h2>Pedido feito com sucesso!</h2>
      <Dados color={colors.grayStrong}>
        <h3>{cart.title}</h3>
        <h3>{date} {showtime.name}</h3>
      </Dados>

      {tickets.map(t => 
        <Dados color={colors.orange} key={t.id}>
          <h4>Assento {t.name}</h4>
          <span>#{t.id}</span>
          <span className='capitalize'>{t.value}</span>
        </Dados>
      )}

      <Dados color={colors.grayStrong}>
        <h5>Nome: {name}</h5>
        <h5>Telefone: {phone}</h5>
        <h5>Email: {email}</h5>
      </Dados>
      <Link to='/' onClick={() => setCart(null)}>Home</Link>
    </Container>
  )
};

const Container = styled.section`
  width: 100%;
  margin: 70px 0 90px 0;
  padding: 0 20px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  text-align: center;
  color: ${colors.grayStrong};
  font-family: ${fonts.familyRoboto};

  h2{
    color: ${colors.greenStrong};
    width: 100%;
    font-size: 20px;
    margin: 15px 50px;
    font-weight: bold;
    text-align: center;
  }
  a{
    width: 180px;
    height: 40px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    border-radius: 10px;
    background: ${colors.orange};
    color: ${colors.white};
    margin-top: 60px;
    cursor: pointer;
  }
`;

const Dados = styled.div`
  text-align: start;
  width: 100%;
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: 500;
  color: ${props => props.color};

  h4{
    display: inline-block;
    font-size: 18px;
    margin-left: 10px;
    margin-right: 5px;
  }
  span{
      font-size: 16px;
      color: ${colors.grayStrong};
      font-weight: 100;
      margin: 0 5px;

      .capitalize{
        text-transform: capitalize;
      }
  }
  h5{
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 5px;
  }
`;
