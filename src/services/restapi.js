// comunicacion con la API Rest node

import { SHA3 } from 'sha3'
import { localService } from './local'
const API_END_POINT = "http://localhost:4000/v1"
const END_POINTS = {
  LOGIN: API_END_POINT + "/accounts/login",
  STORES: API_END_POINT + "/woo/stores"
}

async function login(email, password) {
  const hash = new SHA3(512)
  hash.update(password)
  const password_hash = hash.digest('hex')
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password: password_hash })
  };
  try {
    let response = await fetch(END_POINTS.LOGIN, requestOptions);
    let json = await response.json()
    if (response.ok) return { success: true, data: json }
    else return { success: false, data: json }
  } catch (error) {
    return { success: false, data: error };
  }
}

async function getStores() {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localService.getToken()
    }
  }
  try {
    let response = await fetch(END_POINTS.STORES, requestOptions);
    let json = await response.json()
    if (response.ok) return { success: true, data: json }
    else return { success: false, data: json }
  } catch (error) {
    return { success: false, data: error };
  }
}

export const restapiService = {
  login,
  getStores,
}


