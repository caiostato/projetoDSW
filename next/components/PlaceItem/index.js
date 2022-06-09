import React from 'react';
import Image from 'next/image';

import { Container } from './styles';
import { deletePonto } from '../../contexts/Context';
import BinIcon from '../../assets/images/bin.png'

function PlaceItem({ id, nome, addr, url }) {

  async function handleClick(id){
    await deletePonto(id)
  }

  return( 
  <Container>
    <h1>{nome}</h1>
    <Image src={BinIcon} alt='image bin' width={50} height={50} onClick={handleClick}/>
    <Image src={url} alt='image ponto' width={400} height={400}/>
    <p>{addr}</p>

  </Container>);
}

export default PlaceItem;