import React from 'react';
import Image from 'next/image';
import { Container, List, ItemList, Link } from './styles'

import UserIcon from '../../assets/images/iconUser.svg'

function Menu() {
  return (
    // menu
    <Container>
        <List>
          <ItemList>
            <Link href='/'>
              Home
            </Link>
          </ItemList>
        </List>

        <div></div>
        <div></div>
        <div></div>

        <List>
          <ItemList>
            <Link href='/user/login'>
              <Image src={UserIcon} alt='User Icon'></Image>
            </Link>
          </ItemList>

          <ItemList>
            <Link href='/pontos/cadastrar'>
              <Image src={UserIcon} alt='User Icon'></Image>
            </Link>
          </ItemList>
        </List>
    </Container>
  );
}

export default Menu;