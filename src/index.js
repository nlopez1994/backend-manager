import React from 'react';
import ReactDOM from 'react-dom';
import SearchUser from './js/components/container/SearchUser';
import AuthxApi from './js/api/AuthxApi';

import app from './js/app.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/iunistyle.css';
import './css/app.css';

app.renderApp(<SearchUser />);

const authxAPI = new AuthxApi();

authxAPI.getTokenByEmail('nahuel.lopez+testuser@iunigo.com').then(
    token => {
        console.log('token:' + token);
    },
    err => {
        console.log(err);
    }
);