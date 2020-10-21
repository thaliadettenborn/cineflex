import React,{useContext} from 'react';
import styled from 'styled-components';
import fonts from '../../styles/font';
import colors from '../../styles/colors';


import DataContext from '../../context/DataContext';

export default function Main() {
  const {setCart,films} = useContext(DataContext);

  return(
    <Container>
      <h2>Selecione o filme</h2>
      {films.map(f => 
        <Film src={f.posterURL} />
      )}
    </Container>
  )
}

const Container = styled.section`
  margin-top: 70px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  text-align: center;

  h2{
    font-family: ${fonts.familyRoboto};
    color: ${colors.grayStrong};
    width: 100%;
    font-size: 20px;
    margin: 10px 0;
  }
`;

const Film = styled.img`
  width: 100px;
  height: 160px;
  border: 5px solid white;
  margin: 15px;
  background-color: blue;
  flex-shrink: 0;
  box-shadow: ${colors.shadow};
  -webkit-box-shadow: ${colors.shadow};
  -moz-box-shadow: ${colors.shadow};
  cursor: pointer;
`;