import React from 'react';

import { Container, InputContainer, Input, Label, Ref, SubmitButton } from './styles';

function LoginForm() {
  return (
    <Container>
      <InputContainer method='post' action='http://localhost:3000/user/cadastrar/auth'>
        <Label>Usuário</Label>
        <Input type={'text'} name={'username'}/>
        <Label>Senha</Label>
        <Input type={'password'} name={'password'}/>
        <SubmitButton type={'submit'}/>
        <Ref href='http://localhost:3000/user/cadastrar'>
          Cadastrar
        </Ref>
      </InputContainer>
    </Container>
  );
}

export default LoginForm;