
// return the user data from the session storage
function getUser() {
  const userStr = sessionStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  else return null;
}

// return the token from the session storage
function getToken() {
  let user = getUser();
  return user.token || null;
}

// remove the token and user from the session storage
function removeUserSession() {
  sessionStorage.removeItem('user');
}

// set the token and user from the session storage
function setUserSession(user) {
  sessionStorage.setItem('user', JSON.stringify(user));
}

function setStores(stores) {
  sessionStorage.setItem('stores', JSON.stringify(stores));
}

function getStores() {
  let stores = sessionStorage.getItem('stores')
  if (stores) return JSON.parse(stores)
  return []
}

export const localService = {
  getUser,
  getToken,
  removeUserSession,
  setUserSession,
  getStores,
  setStores
}