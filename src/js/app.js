import React from 'react';
import ReactDOM from 'react-dom';

const app = document.getElementById('app');

const renderApp = function(renderThis) {
    app ? ReactDOM.render(renderThis, app) : false;
};

module.exports = {
    renderApp: renderApp
};