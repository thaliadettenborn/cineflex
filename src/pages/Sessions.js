import React,{useContext} from 'react';
import styled from 'styled-components';

import fonts from '../styles/font';
import colors from '../styles/colors';
import DataContext from '../context/DataContext';
import Session from './componentsPage/Session';


export default function Sessions() {
  const {cart,setCart} = useContext(DataContext);

  function selectionSection(session,showtime){
    setCart(
      {
        selected: {session,showtime,seatsSelected: []},
        ...cart
      }
    )
  }

  if(cart === null) return <label></label>;

  return(
    <Container>
      <h2>Selecione o horário</h2>
      {cart.days.map(d => 
        <Session 
          key={d.id}
          weekday={d.weekday}
          date={d.date}
          showtimes={d.showtimes}
          selectionSection={selectionSection}
        />
      )}
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

  h2{
    font-family: ${fonts.familyRoboto};
    color: ${colors.grayStrong};
    width: 100%;
    font-size: 20px;
    margin: 15px 0;
    font-weight: bold;
  }
`;