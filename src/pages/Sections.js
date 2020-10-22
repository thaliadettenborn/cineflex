import React,{useContext} from 'react';
import styled from 'styled-components';

import fonts from '../styles/font';
import colors from '../styles/colors';
import DataContext from '../context/DataContext';
import Section from './componentsPage/Section';


export default function Sections() {
  const {cart,setCart} = useContext(DataContext);

  function selectionSection(idDay,showtime){
    setCart(
      {
        selected: {idDay,showtime},
        ...cart
      }
    )
  }

  if(cart === null) return <label></label>;

  return(
    <Container>
      <h2>Selecione o horário</h2>
      {cart.days.map(d => 
        <Section 
          key={d.id}
          idDay={d.id}
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