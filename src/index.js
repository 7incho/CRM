import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Login from './Login';
import {ContextProvider} from './contexts/ContextProvider';
import { Auth0Provider } from '@auth0/auth0-react';

const domain=process.env.REACT_APP_AUTH0_DOMAIN;
const clientId=process.env.REACT_APP_AUTH0_CLIENT_ID;

console.log(domain, clientId);

ReactDOM.render(
    <ContextProvider >
        <Auth0Provider 
        domain={domain} 
        clientId={clientId} 
        redirectUri={window.location.origin} 
        >
            <Login />
        </Auth0Provider>
    
    </ContextProvider>, document.getElementById('root')
    );