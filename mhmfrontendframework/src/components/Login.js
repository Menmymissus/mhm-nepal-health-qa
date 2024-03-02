import { useState,useEffect } from 'react';
import axios from 'axios';
import Header from "../components/Header";
import { loginFields } from "../constants/formField";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import {useNavigate} from 'react-router-dom';
import { clearSession, setSession } from './authUtils';
import background from '../assets/background.png';


const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });



export default function Login(){

    const [currentUser, setCurrentUser] = useState();
    const [registrationToggle, setRegistrationToggle] = useState(false);
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessages, setErrorMessages] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
      client.get("/api/users/user")
      .then(function(res) {
        setCurrentUser(true);
        const userData = res.data.user;
        
        // Access the username and password from the user data
        setEmail(userData['email'])
        setUserName(userData['username'])
        // const { email, username } = userData;

        // Do something with the username and password
        // console.log('Email:', email);
        // console.log('Username:', userName);
      })
      .catch(function(error) {
        setCurrentUser(false);
      });
    }, []);

    const [loginState,setLoginState]=useState(fieldsState);

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }
    // console.log(loginState['email-address'])

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e.target.value)
        
    }

    
    function submitLogin(e) {
        e.preventDefault();
        client.post(
          "/api/users/login",
          {
            email:loginState['email-address'],
            password:loginState['password']
          }
        ).then(function(res) {
          setCurrentUser(true);
          const userData = res.data;

        // Set session data upon successful login
          setSession(userData);

          navigate('/user/dashboard')
        }).catch(function (error) {
          if (error.response) {
            if (error.response.data && error.response.data.error) {
              setErrorMessages(Array.isArray(error.response.data.error) ? error.response.data.error : [error.response.data.error]);
    
            }
            if (error.response.status === 400 && error.response.data.errors) {
    
              console.error('Custom validation errors:', error.response.data.errors);
      
              // setRegistrationErrors(error.response.data.errors);
            }
          } else if (error.request) {
    
            console.error('No response received from the server');
          } else {
            console.error('Error during request setup:', error.message);
          }
        });
      }

      function submitLogout(e) {
        e.preventDefault();
        client.post(
          "/api/users/logout",
          {withCredentials: true}
        ).then(function(res) {
          clearSession()
          setCurrentUser(false);
        });
      }

    if (currentUser) {
      // const user = client.get("/api/user")
      // console.log(user)
        return (
            <>
            
            <h3>You are logged in {email}. DASHBOARD GOES HERE!!!</h3>
            <form onSubmit={e => submitLogout(e)}>
                  <button type="submit">Log out</button>
                </form>
            </>
        )
    }
    
    return(
      <main id="login" className="absolute top-0 left-0 h-screen w-screen bg-cover flex items-center justify-center flex-col" style={{backgroundImage:`url(${background})`}}>
      {/* {successMsgFlag > 0 && (
        <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
        <span class="font-medium">Success!</span> Your account has been created. Please log in to continue!
      </div>
      )} */}
      {errorMessages.length > 0 && (
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" 
        role="alert">
          <ul>
            {errorMessages.map((errorMessage, index) => (
              <li key={index} 
              >
                
                
                {errorMessage}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="text-slate-300 backdrop-blur-sm" style={{
    "border": "1px solid #ffffff5c",
   " background-color": "#00000024",    "padding": "24px"}}>
          <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
               
                
                
                />
        <form className="mt-8 space-y-6 " onSubmit={e => submitLogin(e)}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                            
                    />
                
                )
            }
        </div>

        <FormExtra/>
        <FormAction handleSubmit={e => submitLogin(e)} text="Login"/>

      </form>
      </div>
      </main>
    )
}