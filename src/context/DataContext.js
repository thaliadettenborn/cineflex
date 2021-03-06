import React,{createContext,useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import colors from '../styles/colors';

const DataContext = createContext();
export default DataContext;

export function DataProvider(props){
  const [cart,setCart] = useState(null);
  const [films,setFilms] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    axios
    .get('https://mock-api.bootcamp.respondeai.com.br/api/v1/cineflex/movies')
    .then(response => {
      setFilms([...response.data]);
      setTimeout(() => setLoading(false),500)
    })
  },[])

  if(loading || films.length === 0){
    return (
      <DataContext.Provider 
        value={
          {
            cart,
            setCart,
            films
          }
        }
      >
        <Loading>
          <img src="/loading.gif" />
        </Loading>
      </DataContext.Provider>
    )
  }
  
  return (
    <DataContext.Provider 
      value={
        {
          cart,
          setCart,
          films
        }
      }
    >
      {props.children}
    </DataContext.Provider>
  )
}

const Loading = styled.aside`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.grayStrong};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    height: 90%;
  }
`;
