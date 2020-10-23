import React,{useContext} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import fonts from '../styles/font';
import colors from '../styles/colors';
import LabelSeats from './componentsPage/LabelSeats';
import DataContext from '../context/DataContext';

export default function Seats() {
  const {cart,setCart} = useContext(DataContext);

  if(cart === null || cart.selected === null){
    return <label></label>
  }
  
  const {seats} = cart.selected.showtime;
  const quantitySeats = cart.selected.seatsSelected.length;

  function selectionSeat(item){
    if(!(item.isAvailable)) alert("Esse assento não está disponível");
    else {
      isSelected(item) 
        ? cart.selected.seatsSelected = cart.selected.seatsSelected.filter(s => s.id !== item.id)
        : cart.selected.seatsSelected.push(item);
      
      setCart({...cart})
    }
  }

  function isSelected(seat){
    return cart.selected.seatsSelected.includes(seat);
  }

  return(
    <Container>
      <h2>Selecione o(s) assento(s)</h2>
      <ContainerSeats>
        {seats.map(seat =>
          <input 
            type='button'
            value={seat.name}
            key={seat.id}
            className={
              isSelected(seat)
                ? "selected"
                : (seat.isAvailable ? "available" : "unavailable")
            }
            onClick={() => selectionSeat(seat)}
          />
        )}
      </ContainerSeats>
      <LabelSeats />
      <Link to={quantitySeats && '/cliente'}>Reservar assento(s)</Link>
    </Container>
  )
};

const Container = styled.div`
  width: 100%;
  margin: 70px 0 90px 0;
  padding: 0px 10px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  text-align: center;
  font-family: ${fonts.familyRoboto};

  h2{
    color: ${colors.grayStrong};
    width: 100%;
    font-size: 20px;
    margin: 15px 0;
    font-weight: bold;
  }
  a{
    width: 180px;
    height: 40px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    border-radius: 10px;
    background: ${colors.orange};
    color: ${colors.white};
  }
`;

const ContainerSeats = styled.div`
  width: 100%;
  background-color: ${colors.white};
  border: 1px solid ${colors.grayStrong};
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 260px;
  padding: 10px;
  border-radius: 10px;

  input{
    width: 30px;
    height: 35px;
    border-radius: 10px;
    flex-shrink: 0;
    margin: 1px;
    box-shadow: ${colors.shadowLittle};
    border: 1px solid;
    font-family: inherit;
    font-weight: 500;
    font-size: 12px;
    color: ${colors.grayStrong}
  }
  input.unavailable{
    background-color: ${colors.yelowSweet};
    border-color: ${colors.yelowStrong};
  }
  input.available{
    background-color: ${colors.graySweet};
    border-color: ${colors.grayStrong};
  }
  input.selected{
    background-color: ${colors.greenSweet};
    border-color: ${colors.greenStrong};
  }
`;  