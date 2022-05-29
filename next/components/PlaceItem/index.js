import React from 'react';
import Image from 'next/image';
import { Container } from './styles';

function PlaceItem({ nome, addr, url }) {
  console.log(url)
  return( 
  <Container>
    <h1>{nome}</h1>
      <Image src={url} alt='image ponto' width={400} height={400}/>
    <p>{addr}</p>

  </Container>);
}

export default PlaceItem;