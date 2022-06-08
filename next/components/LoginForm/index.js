import React from 'react'
import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import { Container, InputContainer, Input, Label, Ref, SubmitButton } from './styles';

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const { logIn } = useContext(AuthContext)

  async function handleSignIn(data) {
    await logIn(data)
  }
  
  return (
    <>
      <Container>
        <InputContainer onSubmit={handleSubmit(handleSignIn)} >
          <Label>E-mail</Label>
          <Input 
            {...register('email')}
            id="email-address"
            name="email"
            type="text" //email
            autoComplete="email"
            required
            placeholder="Email address"
            />
          <Label>Senha</Label>
          <Input 
            {...register('password')}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Password"
          />
          <SubmitButton type='submit'/>
          <Ref href='http://localhost:3000/user/cadastrar'>
            Cadastrar
          </Ref>
        </InputContainer>
      </Container>
    </>
  );
}

export default LoginForm;