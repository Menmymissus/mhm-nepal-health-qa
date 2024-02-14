// yo stressometer ko lagi gareko hai bharat solti
import Cookies from 'js-cookie';
const SESSION_KEY = 'authSession';

export const getCSRFToken = () => {
  return Cookies.get('csrftoken');
};
//yaha samma

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



