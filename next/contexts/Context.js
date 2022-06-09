import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'

import { recoverUserInformation, logInRequest,signInRequest, deletePontoRequest, updatePontoRequest, savePontoRequest } from "../services/requests";
// import { api } from "../services/api";

export const Context = createContext({})

export function Provider({ children }) {

  const [user, setUser] = useState(null)
  const isAuthenticated = !!user;

  console.log(user)

  async function logIn(data) {
    const response = await logInRequest(data)
    const status = response.json.result
    const token = response.token
    const userResponse = response.json.user

    setCookie(undefined, 'nextauth.token', token, {
      maxAge: 60 * 60 * 1, // 1 hour
    })

    setUser(userResponse)

    // api.defaults.headers['Authorization'] = `Bearer ${token}`;

    if (status == 200){
      Router.push('/');
      window.alert('Login efetuado')
    } else if (status == 400){
      const error = response.json.message
      Router.push('/user/login');
      window.alert(`Login não efetuado\n${error}`)
    } else if (status == 500){
      const error = response.json.message
      Router.push('/');
      window.alert(`Login não efetuado\n${error}`)
    }

  }

  async function signIn(data) {
    const response = await signInRequest(data)
    const status = response.json.result

    console.log(response.json.user)

    if (status == 200){
      Router.push('/');
      window.alert('Login efetuado')
    } else if (status == 400){
      const error = response.json.message
      Router.push('/user/login');
      window.alert(`Login não efetuado\n${error}`)
    } else if (status == 500){
      const error = response.json.message
      Router.push('/');
      window.alert(`Login não efetuado\n${error}`)
    }

  }
  //////
  async function savePonto(data) {
    const response = await savePontoRequest(data)
    const status = response.json.result

    if (status == 200){
      Router.push('/');
      window.alert('Cadastro efetuado')
    } else if (status == 400){
      const error = response.json.message
      Router.push('/pontos/cadastrar');
      window.alert(`Cadastro não efetuado\n${error}`)
    } else if (status == 500){
      const error = response.json.message
      Router.push('/pontos/cadastrar');
      window.alert(`Cadastro não efetuado\n${error}`)
    }

  }
  async function updatePonto(data) {
    const response = await updatePontoRequest(data)
    const status = response.json.result

    if (status == 200){
      Router.push('/');
      window.alert('Atualização efetuado')
    } else if (status == 400){
      const error = response.json.message
      Router.push('/pontos/cadastrar');
      window.alert(`Atualização não efetuado`+error)
    } else if (status == 500){
      const error = response.json.message
      Router.push('/pontos/cadastrar');
      window.alert(`Atualização não efetuado`+error)
    }

  }
  async function deletePonto(data) {
    const response = await deletePontoRequest(data)
    const status = response.json.result

    if (status == 200){
      if (status == 200){
        Router.push('/');
        window.alert('Deleção efetuado')
      } else if (status == 400){
        const error = response.json.message
        Router.push('/pontos/cadastrar');
        window.alert(`Deleção não efetuado\n${error}`)
      } else if (status == 500){
        const error = response.json.message
        Router.push('/pontos/cadastrar');
        window.alert(`Deleção não efetuado\n${error}`)
      }

  }

  return (
    <Context.Provider value={{ user, isAuthenticated, signIn, logIn }}>
      {children}
    </Context.Provider>
  )
}}