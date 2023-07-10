import React, { useState } from 'react';
import { Alert, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import sd from '../Assets/1463.png';
const Login = () => {
  const Navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword,setrePassword] = useState('');
  const [error ,setError] =useState('');
  const [error1 ,setError1] = useState('');
  const [error2 ,setError2] = useState('');
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
    setPassword(e.target.value);
    if(password.length<8)
    {
      setError1('Invalid password');
    }
    else
    {
      setError1(null);
    }
  };

  const handlerePasswordChange = (e) => {
    setrePassword(e.target.value);
    if(repassword.length<8)
    {
      setError2('Invalid password');
    }
    else
    {
      setError2(null);
    }
  };

  const handleSubmit = (e) => {
    var flag=true;
    if(email.length==0 && password.length==0 && repassword.length==0)
    {
    setError('Please enter a valid username');
    setError1('Please enter a valid password');
    setError2('Please enter a valid password');
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
    if(repassword.length==0)
    {
    setError2('Please enter a valid password');
    flag=false;
    }
    if(password!=repassword)
    {
    setError2('Confirm password does not match');
    flag=false;
    }
    e.preventDefault();  
    if(flag==true)
    {
      Navigate("/");
      // Alert("bhdsbhvsdv");
    }

  };

  return (
    <div className='whole'>
        <h1>Sign Up Page</h1>
        <div className='cen'>
          <div>
            <form onSubmit={handleSubmit}>
            <label>
            <h3>Email:</h3>
            <input type="email" value={email} onChange={handleEmailChange} />
            <p style={{color: 'red'}}>{error}</p>
             </label>
            <label>
            <h3>Password:</h3>
            <input type="password" value={password} onChange={handlePasswordChange}  />
            <p style={{color: 'red'}}>{error1}</p>
            </label>
           <label>
            <h3>Confirm Password:</h3>
            <input type="password" value={repassword} onChange={handlerePasswordChange}  />
            <p style={{color: 'red'}}>{error2}</p>
            </label>
           <h4>Already have an account?<Link to='/'>Login</Link> </h4>  
           <Button variant='contained' type="submit">Sign Up</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;