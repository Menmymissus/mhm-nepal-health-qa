import { useState,useEffect } from 'react';
import axios from 'axios';
import Header from "../components/Header";
import { loginFields } from "../constants/formField";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";

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
        console.log('Email:', email);
        console.log('Username:', userName);
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
          
        });
      }

      function submitLogout(e) {
        e.preventDefault();
        client.post(
          "/api/users/logout",
          {withCredentials: true}
        ).then(function(res) {
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
      <>
          <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
        <form className="mt-8 space-y-6" onSubmit={e => submitLogin(e)}>
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
      </>
    )
}