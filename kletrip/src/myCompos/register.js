import './styles/App.css';
import { useState } from "react";
import Axios from "axios";
import {useHistory} from 'react-router-dom';

export default function Register() {
 const[first_name,setFirstName]=useState('');
 const[last_name,setLastName]=useState('');
 const[password,setPassword]=useState('');
 const[email_address,setEmail]=useState('');
 const[gender,setGender]=useState('');
 const history = useHistory();

 const addPassword = (event) => {
   event.preventDefault();
  Axios.post("http://localhost:3008/addpassword", {
  first_name: first_name,
  last_name:last_name,  
  password: password,
  email_address:email_address,
  gender:gender,
  });
  var property = document.getElementById('btn');
  property.style.backgroundColor="green";
  alert("Successfully Registered");
  history.push('/home');

};
function validateForm() {
  return first_name.length > 0 && last_name.length > 0  && password.length >0 && email_address.length >0;
}

  return (
    
    <div className="App1">
      <center><h1> WELCOME!! PLEASE FILL IN THE BELOW DETAILS TO REGISTER</h1></center>
      <div className="AddingPassword1">
      <input
          type="text"
          placeholder="First Name"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
       />


      <input
          type="text"
          placeholder="Last Name"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
         <input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <input type = "radio"
         value = "male" name="gender"
         onChange={(event)=>{
           setGender(event.target.value);
         }}/><label>Male</label><br/>
        <input type = "radio"
         value = "female" name="gender" onChange={(event)=>{
          setGender(event.target.value);
        }}/><label>Female</label>
      
     <button id="btn"  disabled={!validateForm()} onClick={addPassword}>REGISTER</button>
    </div>
    </div>
  );
}