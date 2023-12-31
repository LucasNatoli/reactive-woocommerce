// comunicacion con la API Rest node

import { SHA3 } from 'sha3'
import { localService } from './local'
//const API_END_POINT = "http://localhost:4000/v1"
const API_END_POINT = "https://xiki.elhosting.cloud/rest/v1"

const END_POINTS = {
  LOGIN: API_END_POINT + "/accounts/login",
  STORES: API_END_POINT + "/woo/stores",
  NOTIFICATIONS: API_END_POINT + '/system/notifications'
}
const HEADERS = {
  APP_JSON: { 'Content-Type': 'application/json' },
}

const authHeader = () => {
  var token = localService.getToken()
  if (token) return { 'Authorization': 'Bearer ' + token}
  return {}
}

async function login(email, password) {
  const hash = new SHA3(512)
  hash.update(password)
  const password_hash = hash.digest('hex')
  const requestOptions = {
    method: 'POST',
    headers: HEADERS.APP_JSON,
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

function logout() {
  // remove user from session storage
  sessionStorage.clear()
  return Promise.resolve()
}

async function getNotifications() {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localService.getToken()
    }
  }
  try {
    let response = await fetch(END_POINTS.NOTIFICATIONS, requestOptions);
    let json = await response.json()
    if (response.ok) return { success: true, data: json }
    else return { success: false, data: json }
  } catch (error) {
    return { success: false, data: error };
  }
}
export const restapiService = {
  login,
  logout,
  getNotifications,
}


