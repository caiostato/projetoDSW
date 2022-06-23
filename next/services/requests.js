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
    token: uuid(),
    json
  }
}
export async function signInRequest(data) {

  const response  = await fetch('http://localhost:8000/user/signin',{
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
export async function savePontoRequest(data) {

  const response  = await fetch('http://localhost:8000/ponto/cadastrar',{
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
export async function updatePontoRequest(data) {

  const response  = await fetch('http://localhost:8000/ponto/cadastrar',{
    method:'PUT',
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
export async function deletePontoRequest(data) {

  const response  = await fetch('http://localhost:8000/ponto/cadastrar',{
    method:'DELETE',
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