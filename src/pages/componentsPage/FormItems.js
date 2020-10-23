import React from 'react';
import styled from 'styled-components';

import colors from '../../styles/colors';

export default function FormItems(props) {
  const {htmlFor,labelText,type,count} = props;

  if(type === 'radio'){
    return (
      <ContainerRadio>
        <input required type={type} id={htmlFor} name={`ticket${count}`} value={htmlFor} />
        <label htmlFor={htmlFor}>{labelText}</label>
      </ContainerRadio>
    )
  }
  return(
    <Container>
      <label htmlFor={htmlFor}>{labelText}</label>
      <input type={type} id={htmlFor} required />
    </Container>
  )
};

const Container = styled.div`
  font-family: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 15px;

  label{
    display: block;
    color: ${colors.orange};
  }
`;

const ContainerRadio = styled.div`
  font-family: inherit;
  label{
    font-size: 14px;
    margin-left: 10px;
    color: ${colors.orange};
  }
`;

