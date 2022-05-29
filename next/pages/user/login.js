import React from 'react';
import Head from 'next/head';

import Menu from '../../components/Menu'
import LoginForm from '../../components/LoginForm';

function login() {
  return (
    <div>
    <Head>
      <title>Home Page</title>
    </Head>
    <Menu/>
    <LoginForm/>
  </div>
  );
}

export default login;