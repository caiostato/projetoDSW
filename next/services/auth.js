import { v4 as uuid } from 'uuid'

export async function logInRequest(data) {

  const response  = await fetch('http://localhost:8000/user/login',{
    method:'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const json = await response.json()

  return {
    json
  }
}

export async function signInRequest(data) {

  const response  = await fetch('http://localhost:8000/user/login',{
    method:'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const json = await response.json()

  return {
    json
  }
}

export async function recoverUserInformation() {
  await delay()

  return {
    user: {
      name: 'Diego Fernandes',
      email: 'diego@rocketseat.com.br',
      avatar_url: 'https://github.com/diego3g.png'
    }
  }
}