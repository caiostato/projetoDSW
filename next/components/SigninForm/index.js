import React from 'react';

import { Container, InputContainer, Input, SubmitButton } from './styles';

function SigninForm() {
  return (
    <Container>
      <InputContainer method='post' action='http://localhost:8000/user/signin/auth'>
        <Input type="text" placeholder="Nome" name="nome"/>
        <Input type="text" placeholder="E-mail" name="email"/>
        <Input type="password" placeholder="Password" name="password"/>
        <Input type="password" placeholder="Confirm password" name="passwordConfirmation"/>
        <Input type="date" placeholder="Data de Nascimento" name="date"/>
        <Input type="text" placeholder="Endereço" name="address"/>
        <Input type="text" placeholder="Imagem de Perfil" name="img"/>
        <SubmitButton type='submit'/>
      </InputContainer>
    </Container>
  );
}

export default SigninForm;