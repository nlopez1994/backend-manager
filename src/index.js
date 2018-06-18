import React from 'react';
import ReactDOM from 'react-dom';
import SearchUser from './js/components/container/SearchUser';

import app from './js/app.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/iunistyle.css';
import './css/app.css';

app.renderApp(<SearchUser />);

//.\chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security