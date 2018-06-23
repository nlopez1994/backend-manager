import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Row, Column} from '../presentational/BootstrapLayout';
import {Iunilogo} from '../presentational/Images';
import {AccountInfo} from '../presentational/AccountInfo';
import { VehicleInfo } from '../presentational/VehicleInfo';
import { PolicyInfo } from '../presentational/PolicyInfo';

import AccountApi from '../../api/AccountApi';
import PolicyApi from '../../api/PolicyApi';

import app from '../../app.js';


class AccountPage extends Component {
    constructor({token}) {
        super();
        this.state = {
            'token': token,
            'accountId': app.getAccountIdFromToken(token)
        }

        this.accountAPI = new AccountApi();
        this.policyAPI = new PolicyApi();
    }

    render() {

        return (
            <Row>
                <Column size="12" other="text-center">
                    <Iunilogo />
                </Column>
                <Column size="1"/>
                <Column size="5">
                    <Column size="12" other="iunibox">
                        <AccountInfo account={this.state.account}/>
                    </Column>
                    <br />
                    <Column size="12" other="iunibox">
                        <VehicleInfo vehicle={this.state.vehicle}/>
                    </Column>
                </Column>
                <Column size="5" other="iunibox">
                    <PolicyInfo policy={this.state.policy} />
                </Column>
                <Column size="1"/>
            </Row>
        );
    }

    componentDidMount() {
        const accountId = this.state.accountId;

        Promise.all([
            this.accountAPI.getAccountById(accountId),
            this.accountAPI.getVehicleByAccountId(accountId),
            this.policyAPI.getPolicyByAccountId(accountId)

        ]).then((responses) => {
            const account = responses[0];
            const vehicle = responses[1];
            const policy = responses[2];

            if(account && account !== null){
                this.state.account = account;
            }
            if(vehicle && vehicle !== null){
                this.state.vehicle = vehicle;
            }
            if(policy && policy !== null){
                this.state.policy = policy;
            }

            this.setState(this.state);

        }).catch((err) => {
            console.log(err);
        });
    }
}

export default AccountPage;

AccountPage.propTypes = {
    token: PropTypes.string
};