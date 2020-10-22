import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import fonts from "../styles/font"

export default function Header(){
  return (
    <Logo>
      <h1>CINEFLEX</h1>
    </Logo>
  )
}

const Logo = styled.header`
  width: 100%;
  height: 65px;
  font-size: 35px;
  font-weight: bolder;
  font-family: ${fonts.familyRoboto};
  background: ${colors.grayStrong};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: ${fonts.spacing};
  box-shadow: ${colors.shadowLittle};

  h1{
    color: ${colors.orange};
  }
`;