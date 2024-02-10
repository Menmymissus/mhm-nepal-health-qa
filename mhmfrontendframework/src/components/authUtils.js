// authUtils.js
const SESSION_KEY = 'authSession';

export const setSession = (sessionData) => {
  localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
  console.log(sessionData)
};

export const clearSession = () => {
  localStorage.removeItem(SESSION_KEY);
};

export const getSession = () => {
  const sessionData = localStorage.getItem(SESSION_KEY);
  return sessionData ? JSON.parse(sessionData) : null;
};

export const isLoggedIn = () => {
  const sessionData = getSession();
  return !!sessionData;
};
