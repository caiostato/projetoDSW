import styled from 'styled-components';
import nextLink from 'next/link';

const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  width: 100%;
  height:4rem;
  background-color: rgb(63 63 70);
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: inline-block;
`;

const ItemList = styled.li`
  padding: 1.5rem;  
  float: left;
`;

const Link = styled.a`
  color: white;

  text-align: center;
  text-decoration: none;
  &:hover {
    opacity: 0.75;
  }
`;

export { Container, List, ItemList, Link }
