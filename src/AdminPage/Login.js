import React, {useState} from 'react'
import './Login.css'
import { Container, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


function Login({onLoginSuccess}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   

    const loginHandler = () => {
        const user = { email, password };
        console.log(user)
        axios.post("http://localhost:8080/adminpannel/login", user)
        .then((response) => {
            console.log(response.data.message);
            if (response.status === 200) {
                console.log("Login successful");
                onLoginSuccess();
               
            } else {
                console.log("Incorrect email or password");
               
            }
        })
        .catch((error) => {
            console.error("Error:", error.response.data.message);
            // Handle other errors, e.g., display a generic error message
        });
       
      };


  return (
    <>
    <div className='login-box'>
 <Container style={{ height: '50%',width: "30%",position: "absolute",margin: "auto", justifyContent: 'center', alignItems: 'center'  }}>
      <h1 style={{textAlign: "center" }}>Login Form</h1>
        <Form style={{ border: '1px solid #ccc', padding: '50px', borderRadius: '8px', height: '52%'}} >
          <Form.Group className="mb-8" controlId="formBasicEmail">
           
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              style={{ marginBottom: '25px' }}
            />
           
          </Form.Group>

          <Form.Group className="mb-8" controlId="formBasicPassword">
          
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={{ marginBottom: '25px' }}
            />
          </Form.Group>
          <Form.Group className="mb-8" >
          <div className="login-btn" onClick={loginHandler}  style={{ width: '100%', marginTop: '20px', }}>
            Login
          </div>
       
          </Form.Group>
        </Form>
      </Container> 
      </div>
    </>
  )
}

export default Login
