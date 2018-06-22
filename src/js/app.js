//import React from 'react';
import ReactDOM from 'react-dom';

const app = document.getElementById('app');

const renderApp = function(renderThis) {
    app ? ReactDOM.render(renderThis, app) : false;
};

const getAccountIdFromToken = function(token){
    var accountB64 = token.split('.')[1];
    var accountId = JSON.parse(window.atob(accountB64)).sub;

    return accountId;
}

module.exports = {
    'renderApp': renderApp,
    'getAccountIdFromToken': getAccountIdFromToken
};