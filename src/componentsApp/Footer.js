import React,{useContext} from 'react';
import styled from 'styled-components';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import fonts from '../styles/font';
import colors from '../styles/colors';
import DataContext from '../context/DataContext';

export default function Footer(props) {
  const {cart} = useContext(DataContext);

  if(cart === null){
    return (
      <Container>
        <Link to='/'>
          <FaArrowAltCircleLeft className='icon' />
        </Link>
        <h3>Escolha um filme</h3>
      </Container>
    )
  }

  return(
    <Container>
      <Image src={cart.posterURL}/>
      <h3>{cart.title}</h3>
      <h3>{cart.sectionSelectd}</h3>
    </Container>
  )
}

const Container = styled.footer`
  width: 100%;
  height: 85px;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 10px 30px;
  background: ${colors.graySweet};
  display: flex;
  align-items: center;
  box-shadow: ${colors.shadow};

  h3{
    font-family: ${fonts.familyRoboto};
    letter-spacing: ${fonts.spacing}
    color: ${colors.grayStrong};
    margin-left: 20px;
    text-transform: capitalize;
    font-weight: 500;
  }
  .icon{
    font-size: 30px;
    margin-right: 5px;
    color: ${colors.orange};
  }
`

const Image = styled.div`
  background-image: url(
    ${props => props.src}
  );
  background-size: cover;
  width: 40px;
  height: 60px;
  background-color: red;
  border: 1px solid ${colors.white};
  box-shadow: ${colors.shadowLittle};
`;