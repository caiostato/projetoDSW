import React from 'react';
import Head from 'next/head';

import Menu from '../../components/Menu'
import SigninForm from '../../components/SigninForm'

function cadastrar() {
  return (
    <div>
    <Head>
      <title>Home Page</title>
    </Head>
    <Menu/>
    <SigninForm/>
  </div>
  );
}

export default cadastrar;