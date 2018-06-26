import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Row, Column} from '../presentational/BootstrapLayout';
import {Iunilogo} from '../presentational/Images';

import PolicyApi from '../../api/PolicyApi';
import app from '../../app.js';

class CreatePolicy extends Component {
    constructor({token, accountId, vehicleId}){
        super();

        this.state = {
            'token': token,
            'accountId': accountId,
            'vehicleId': vehicleId
        }
        this.policyAPI = new PolicyApi();
    }

    render() {
        return (
            <Row>
                <Column size="12" other="text-center">
                    <Iunilogo />
                </Column>
                <Column size="1" />
                <Column size="10" other="text-center">
                    <Row>
                        <Column size="4">
                            ACCOUNT
                            <input type="text" value={this.state.accountId} required/>
                        </Column>
                        <Column size="4">
                        </Column>
                        <Column size="4">
                        </Column>
                    </Row>
                </Column>
                <Column size="1" />
            </Row>
        );
    }

    componentDidMount() {

    }
}

export default CreatePolicy;

CreatePolicy.propTypes = {
    token: PropTypes.string.isRequired,
    accountId: PropTypes.string.isRequired,
    vehicleId: PropTypes.string.isRequired
};