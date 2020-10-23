import React,{useContext} from 'react';
import styled from 'styled-components';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link, useLocation,useHistory } from 'react-router-dom';

import fonts from '../styles/font';
import colors from '../styles/colors';
import DataContext from '../context/DataContext';

export default function Footer(props) {
  const {cart,setCart} = useContext(DataContext);
  const {pathname} = useLocation();
  const history = useHistory();

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

  function returnPage(){
    if(pathname === '/sessoes'){
      setCart(null);
      history.push('/')
    }else if(pathname === '/assentos'){
      cart.selected = {};
      setCart({...cart});
      history.push('/sessoes');
    }else if(pathname === '/cliente'){
      cart.selected.seatsSelected = [];
      setCart({...cart});
      history.push('/assentos');
    }
  }

  return(
    <Container>
      <Image src={cart.posterURL}/>
      <div>
        <h3>{cart.title}</h3>
        <h4>{cart.selected ? cart.selected.session : ''}</h4>
      </div>
      <FaArrowAltCircleLeft className='back-page' onClick={returnPage} />
    </Container>
  )
}

const Container = styled.footer`
  width: 100%;
  height: 85px;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 10px;
  background: ${colors.graySweet};
  display: flex;
  align-items: center;
  box-shadow: ${colors.shadow};

  h3,h4{
    margin-left: 10px;
    font-family: ${fonts.familyRoboto};
    letter-spacing: ${fonts.spacing};
    color: ${colors.grayStrong};
    text-transform: capitalize;
  }
  h3{
    font-weight: 500;
  }
  h4{
    margin-top: 5px;
  }
  .icon{
    font-size: 30px;
    margin-right: 5px;
    color: ${colors.orange};
  }
  .back-page{
    font-size: 20px;
    position: fixed;
    right: 15px;
    bottom: calc((85px - 20px) / 2);
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