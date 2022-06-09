import React from 'react';

import { Container } from './styles';
import PlaceItem from '../PlaceItem';

function PlaceList({places}) {

  return (
  <Container>
    {places?.map((place)=>{
      return (
        <PlaceItem 
          key={place.ponto_id}
          id={place.ponto_id}
          nome={place.ponto_nome} 
          addr={place.ponto_addr} 
          url={place.ponto_img}
        />
      )
    })
    }
  </Container>);
}

export default PlaceList;