import React from 'react';
import {useNavigate} from 'react-router-dom';
import { clearSession } from './authUtils';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});


const Logout = () => {

    const navigate = useNavigate();
    
    const handleLogout = () => {
    console.log("logout")
    client.post(
        "/api/users/logout",
        {withCredentials: true}
      ).then(function(res) {
        console.log("cleared")
        clearSession()
        navigate('/login');
  }
)};

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
