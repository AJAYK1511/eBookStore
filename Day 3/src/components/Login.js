import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css';
const Login = () => {
  const Navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [error ,setError] =useState('');
  const [error1 ,setError1] =useState('');
  function isValidEmail(email) {
    return /^[^\s@]+@gmail.com|gmail.in|ac.in+$/.test(email);
  }

  const handleEmailChange = (e) => {
    if (!isValidEmail(e.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }

    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    if(password.length<=8)
    {
      setError1('Invalid password');
    }
    else
    {
      setError1(null);
    }
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    var flag=true;
    if(email.length==0 && password.length==0)
    {
    setError('Please enter a valid username');
    setError1('Please enter a valid password');
    flag=false;
  }
  if(email.length==0)
  {
    setError('Please enter a valid email');
    flag=false;
  }
  if(password.length==0)
  {
    setError1('Please enter a valid password');
    flag=false;
    }
    if(flag==true)
    {
      Navigate("/sig");
    }
    e.preventDefault();  
  };

  return (
    <div className='whole'>

        <h1>Login Page</h1>
        
        <div className='cenn'>
        <div><p></p><p></p></div>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>Email:</h3>
          <input type="email" value={email} onChange={handleEmailChange}/>
          <p style={{color: 'red'}}>{error}</p>
        </label>
        
        <label>
          <h3>Password:</h3>
          <input type="password" value={password} onChange={handlePasswordChange} />
          <p style={{color: 'red'}}>{error1}</p>
        </label>       
        <h4>Don't have an account?<Link to='/sign'>SignUp</Link>  </h4>  
        <Button variant='contained' type="submit" >Login</Button><br></br>
      </form></div>
    </div>
  );
};

export default Login;