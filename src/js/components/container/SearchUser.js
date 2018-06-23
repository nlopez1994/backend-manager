import React, { Component } from 'react';
import {Row, Column} from '../presentational/BootstrapLayout';
import {Iunilogo} from '../presentational/Images';
import AuthxApi from '../../api/AuthxApi';
import AccountPage from './AccountPage';

import app from '../../app.js';

class SearchUser extends Component {
    constructor() {
        super();
        this.authxAPI = new AuthxApi();
    }

    render() {
        return (
            <Row id="contSearch">
                <Column size="12" other="text-center">
                    <Iunilogo />
                </Column>
                <Column size="3" />
                <Column size="6" other="text-center">
                    <form className="searchUser" onSubmit={this.searchForAccount.bind(this)}>
                        <h3>Identificar Usuario</h3>
                        <input type="email" className="requestedEmail" placeholder="user@iunigo.com" required/>
                        <button type="submit" className="filled">buscar</button>
                    </form>
                </Column>
                <Column size="3" />
            </Row>
        );
    }

    componentDidMount() {
        document.querySelectorAll('.requestedEmail')[0].value =
            'charlie.sheen+testuser@iunigo.com';
    }

    searchForAccount(evt) {
        evt.preventDefault();

        const form = evt.target;
        const requestedEmail = form.querySelectorAll('.requestedEmail')[0];

        this.authxAPI.getTokenByEmail(requestedEmail.value).then(
            token => {
                console.debug('token: ' + token);
                app.renderApp(<AccountPage token={token} />);
            },
            err => {
                console.log(err);
            }
        );

    }
}

export default SearchUser;