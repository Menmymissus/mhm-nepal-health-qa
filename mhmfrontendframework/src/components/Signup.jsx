import { useState, useEffect } from 'react';
import { signupFields } from "../constants/formField"
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import FormAction from "./FormAction";
import Input from "./Input";
import Header from "./Header";
// import { useHistory } from 'react-router-dom'; 


const fields=signupFields;
let fieldsState={};
const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  const [signupState,setSignupState]=useState(fieldsState);
  const [email, setEmail]= useState();
  const [currentUser, setCurrentUser] = useState();
  const navigate = useNavigate()

  // const history = useHistory();

  useEffect(() => {
    client.get("/api/users/user")
    .then(function(res) {
      setCurrentUser(true);
      setEmail(res.data.user.email);
      
    })
    .catch(function(error) {
      setCurrentUser(false);
    });
  }, []);

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});



  function submitRegistration(e) {
    console.log(signupState['password'])

    e.preventDefault();
    client.post(
      "/api/users/register",
      {
        email:signupState['email-address'],
        username:signupState['username'],
        password:signupState['password']
      }
    ).then(function (res) {
      // Registration successful
        navigate('/login')
    }).catch(function (error) {
      // Registration failed
    });
  }
  if (currentUser) {
    return (
        <>
        {signupState === 'success' && (
        <p>Account created successfully! Please sign in with your details.</p>
      )}

      {signupState === 'error' && (
        <p>Registration failed. Please check your details and try again.</p>
      )}
        <p>Logged in</p>
        </>
    )
}
 

    return(
      <>
      <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/login"
              className="absolute top-0 left-0 h-screen w-screen bg-orange-100"
            />
        <form className="mt-8 space-y-6" onSubmit={e => submitRegistration(e)}>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
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
          <FormAction handleSubmit={e => submitRegistration(e)} text="Signup" />
        </div>

         

      </form>
      </>
    )
}