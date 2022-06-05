import React from 'react';
import Head from 'next/head';

import Menu from '../../components/Menu'
import PontoSaveForm from '../../components/PontoSaveForm';

function cadastrar() {
  return (
    <div>
    <Head>
      <title>Home Page</title>
    </Head>
    <Menu/>
    <PontoSaveForm/>
  </div>
  );
}

export default cadastrar;