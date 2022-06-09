import React from 'react';
import { useForm } from 'react-hook-form'
import { useContext } from 'react';

import { Context } from '../../contexts/Context';
import { Container, InputContainer, Input, SubmitButton } from './styles';

function SigninForm() {
  const { register, handleSubmit } = useForm()
  const { signIn } = useContext(Context)

  async function handleSignIn(data) {
    await signIn(data)
  }

  return (
    <Container>
      <InputContainer onSubmit={handleSubmit(handleSignIn)}>
        <Input
          {...register('nome')}
          id="nome"
          name="nome"
          type="text"
          required
          placeholder="Nome"
        />
        <Input
          {...register('email')}
          id="email-address"
          name="email"
          type="text"
          autoComplete="email"
          required
          placeholder="Email address"
        />
        <Input
            {...register('password')}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Password"
        />
        <Input
            {...register('password')}
            id="password-confirm"
            name="passwordConfirm"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Password Confirmation"
        />
        <Input
            {...register('date')}
            id="date"
            name="date"
            type="date"
            required
            placeholder="Data de Nascimento"
        />
        <Input
          {...register('address')}
          id="address"
          name="address"
          type="text"
          required
          placeholder="Endereço"
        />
        <Input
          {...register('img')}
          id="img"
          name="img"
          type="text"
          required
          placeholder="Imagem de Perfil"
        />
        <SubmitButton type='submit'/>
      </InputContainer>
    </Container>
  );
}

export default SigninForm;