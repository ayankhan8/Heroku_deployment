import React from "react";
import Axios from "axios";
import './styles/login.css';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import {useHistory} from 'react-router-dom';


export default function Login() {
    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    //var [bool, setState] = useState("");


    function validateForm() {
        return Email.length > 0 && password.length > 0;
      }

      // function validateLogin() {
      //   alert(bool);
      //   if(bool === "1")
      //    { 
      //      return 5 && 5;
      //    }

      // }

      function send_email(Email){
        Axios.post("http://localhost:3008/myEmailGetter", {
              email: Email,
          });
        
    }

     function getmypasswd(password){
            Axios.get("http://localhost:3008/mypassword")
              .then(function (response) {
                //alert(response.data);
                var passwd = response.data.toString();
                //console.log(passwd);
                 if(password === passwd ){
                      alert('Succesful');
                      history.push('/home');

                      //bool = setState("1");
                    }
                  else{
                        alert('Incorrect! Please Try Again')
                  }
              });
              

              // console.log(x);
        }

        function sleep(milliseconds) {
          const date = Date.now();
          let currentDate = null;
          do {
            currentDate = Date.now();
          } while (currentDate - date < milliseconds);
        }
      


      const checkUser = (e) =>{
         
          
          //console.log(Email);
          e.preventDefault();
          //bool = setState("0");
          send_email(Email);
          sleep(1000);
          // var x = JSON.stringify(getmypasswd());
          // console.log(x);
          //console.log(password);
          getmypasswd(password);
        
          
          // if(password === passwd ){
          //     alert('Succesful')
          // }
          // else{
          //     alert('Erroring')
          // }
      }


    

    return (
      <div className="Login">
        <center>
        <h1> LOGIN </h1></center>
        <Form onSubmit={checkUser}>
          <Form.Group size="lg" controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" id ="butn" disabled={!validateForm()} onClick={checkUser}>
            Login
          </Button>
        </Form>
        {/* <Link  to="/home">
            GO TO HOME PAGE
          </Link>     */}
      </div>
    );
  }






  