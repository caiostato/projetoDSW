import React from 'react';

import { Container, InputContainer, Input, SubmitButton } from './styles';

function PontoSaveForm() {
  return (
    <Container>
      <InputContainer method='post' action='http://localhost:8000/pontos/cadastrar/save'>
        <Input type="text" placeholder="Nome" name="nome"/>
        <Input type="text" placeholder="CEP" name="cep"/>
        <Input type="text" placeholder="Endereço" name="address"/>
        <Input type="text" placeholder="Barrio" name="bairro"/>
        <Input type="text" placeholder="Cidade" name="cidade"/>
        <Input type="text" placeholder="Estado" name="estado"/>
        <Input type="text" placeholder="Imagem" name="img"/>
        <SubmitButton type='submit'/>
      </InputContainer>
    </Container>
  );
}

export default PontoSaveForm;