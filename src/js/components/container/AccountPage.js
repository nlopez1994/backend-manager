import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Row, Column} from '../presentational/BootstrapLayout';
import {Iunilogo} from '../presentational/Images';
import AccountsApi from '../../api/AccountsApi';

import app from '../../app.js';

class AccountPage extends Component {
    constructor({token}) {
        super();
        this.state = {
            'token': token,
            'accountId': app.getAccountIdFromToken(token)
        }
        this.accountAPI = new AccountsApi();
    }

    render() {
        const welcomeEl = this.state.account ? 
            <h2>{'Bienvenido ' + this.state.account.name + '!'}</h2> : 
            <h2>{'No se ha encontrado cuenta asociada'}</h2> ;

        const vehicleEl = this.state.vehicle ? 
            <h4>{'Su ID de vehículo es ' + this.state.vehicle.vin}</h4> : 
            <h4>{'No tiene vehículo asociado'}</h4> ;

        const policyEl = this.state.policy ?
            <h4>{'Tienes una póliza'}</h4> :
            <h4>{'No tienes una póliza'}</h4> ;

        return (
            <Row >
                <Column size="12" other="text-center">
                    <Iunilogo />
                </Column>
                <Column size="3" />
                <Column size="6" other="text-center">
                    {welcomeEl}
                    {vehicleEl}
                    {policyEl}
                </Column>
                <Column size="3" />
            </Row>
        );
    }

    componentDidMount() {
        const accountId = this.state.accountId;

        Promise.all([
            this.accountAPI.getAccountById(accountId),
            this.accountAPI.getVehicleByAccountId(accountId)

        ]).then((responses) => {
            const account = responses[0];
            const vehicle = responses[1];

            if(account && account !== null){
                this.state.account = account;
            }
            if(vehicle && vehicle !== null){
                this.state.vehicle = vehicle;
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