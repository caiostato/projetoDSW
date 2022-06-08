import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'

import { recoverUserInformation, logInRequest,signInRequest } from "../services/auth";
// import { api } from "../services/api";

export const AuthContext = createContext({})

export function AuthProvider({ children }) {

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

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, logIn }}>
      {children}
    </AuthContext.Provider>
  )
}