import styled from 'styled-components';

const Container = styled.div`

  border: 1px solid #71797E;
  border-radius: 1rem ;
  background-color: rgb(63 63 70) ;
  width: 20%;
  height: 50vh;
  margin: auto;
  margin-top: 10% ;
  
`;

const InputContainer = styled.form`
  height: 70%;
  width: 60%;

  margin: auto;
  margin-top: 20%;
`;

const Label = styled.label`
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
  color: #fff;
`
const Input = styled.input`
  width: 99%;
  height: 2rem;
  border:none;
  border-radius:0.25rem ;

  margin: 0.5rem 0 0.5rem 0;
`

const SubmitButton = styled.input`
  width: 99%;
  height: 2rem;
  border:none;
  border-radius:0.25rem ;

  margin: 0.5rem 0 0.5rem 0;

`

const Ref = styled.a`
color: white;

`

export { Container, InputContainer, Input, Label, Ref, SubmitButton }
