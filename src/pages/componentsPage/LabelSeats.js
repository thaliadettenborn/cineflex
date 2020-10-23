import React from 'react';
import styled from 'styled-components';

import fonts from '../../styles/font';
import colors from '../../styles/colors';

export default function LabelSeats() {
  return(
    <ContainerLabel>
      <div>
        <input type='button' className='green' />
        <label>Selecionado</label>
      </div>
      <div>
        <input type='button' className='gray' />
        <label>Disponível</label>
      </div>
      <div>
        <input type='button'className='yelow' />
        <label>Indisponível</label>
      </div>
    </ContainerLabel>
  )
};

const ContainerLabel = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 100%;
  padding: 0 10px;

  div{
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: ${fonts.familyRoboto};
    font-size: 18px;
    font-weight: 400;
  }
  input{
    width: 25px;
    height: 25px;
    border-radius: 10px;
    flex-shrink: 0;
    margin-right: 10px;
    border: 1px solid;
  }
  .green{
    background-color: ${colors.greenSweet};
    border-color: ${colors.greenStrong};
  }
  .yelow{
    background-color: ${colors.yelowSweet};
    border-color: ${colors.yelowStrong};
  }
  .gray{
    background-color: ${colors.graySweet};
    border-color: ${colors.grayStrong};
  }
`;
