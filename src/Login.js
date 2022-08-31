import React from 'react'
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
// import Profile from './components/Profile';
import {useAuth0} from '@auth0/auth0-react';
import App from './App.js';



const Login = () => {
    const {isAuthenticated} = useAuth0();
    return (
      <div className='App' >
        {isAuthenticated ?  <App /> : <LoginButton /> }
        
      </div>
    );
  }

export default Login