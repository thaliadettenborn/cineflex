import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import fonts from '../../styles/font';
import colors from '../../styles/colors';

export default function Session(props) {
  const {weekday,date,showtimes,selectionSection,idDay} = props;

  return (
    <Container>
      <h3>{weekday} - {date}</h3>
      {showtimes.map(showtime =>
          <button
            key={showtime.key}
            onClick={() => selectionSection(idDay,{...showtime})}
          >
            <Link to='/assentos'>{showtime.name}</Link>
          </button>
      )}
    </Container>
  )
};

const Container = styled.div`
  width: 100%;
  text-align: start;
  font-family: ${fonts.familyRoboto};
  
  h3{
    font-size: 18px;
    color: ${colors.grayStrong};
    margin: 20px 0;
    font-weight: 300;
  }
  button{
    background-color: ${colors.orange};
    width: 60px;
    color: ${colors.white};
    font-weight: 300;
    height: 22px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    margin-right: 5px;
    cursor: pointer;
  }
`;
