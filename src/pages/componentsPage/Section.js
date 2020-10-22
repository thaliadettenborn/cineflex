import React from 'react';
import styled from 'styled-components';

import fonts from '../../styles/font';
import colors from '../../styles/colors';

export default function Section(props) {
  const {weekday,date,showtimes} = props;

  return (
    <Container>
      <h3>{weekday} - {date}</h3>
      {showtimes.map(t => 
        <button key={t.id}>
          {t.name}
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
