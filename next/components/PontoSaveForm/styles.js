import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #71797E;
  border-radius: 1rem ;
  background-color: rgb(63 63 70) ;
  width: 20%;
  height: 60vh;
  margin: auto;
  margin-top: 10% ;
`;

const InputContainer = styled.form`
  height: 90%;
  width: 60%;

  margin: auto;
  margin-top: 10%;
`;

const Input = styled.input`
  width: 99%;
  height: 2rem;
  border:none;
  border-radius:0.25rem ;

  margin: 0.5rem 0 0.5rem 0;

  &::placeholder{
    
  }
`

const SubmitButton = styled.input`
  width: 99%;
  height: 2rem;
  border:none;
  border-radius:0.25rem ;

  margin: 0.5rem 0 0.5rem 0;
`

export { Container, InputContainer, Input, SubmitButton }