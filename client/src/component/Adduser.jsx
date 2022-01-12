import { Button,Form,Row,Col } from 'react-bootstrap';

import React,{useState,useEffect} from 'react'
import axios from 'axios';


export default function Adduser() {
    const [name,setName] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
  
    const submitdata = () =>{
      console.log(name);
      axios.post("http://localhost:3001/adduser",{name,username,password})
      .then((res)=>{
        alert('Data insert Successfully');
        setName('');
        setUsername('');
        setPassword('');
      })

    }
  
    return (
      <div className="App">
        <header className="App-header">
  
    <Row className="mb-3">
    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Full Name</Form.Label>
      <Form.Control type="text" placeholder="Full Name" onChange={(e) =>{setName(e.target.value)}}/>
    </Form.Group>
  
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter username" onChange={(e) =>{setUsername(e.target.value)}}/>
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) =>{setPassword(e.target.value)}}/>
      </Form.Group>
    </Row>
  
   <Button variant="primary" type="submit" onClick={submitdata}>
      Submit
    </Button>
        </header>
      </div>
    );
  
}
