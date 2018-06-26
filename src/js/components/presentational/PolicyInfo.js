import React from 'react';
import PropTypes from 'prop-types';

import {Row, Column} from './BootstrapLayout';
import {Insurancelogo} from './Images';

export const PolicyInfo = ({planId, policy, createPolicy}) => {
    const policyContent = policy && policy !== null ?
        (
            <div>{'Ya tiene su póliza!'}</div>
        ) :
        (
            <Row>
                <Column size="12" other="text-center">
                    <br/><h6>Aún no tiene póliza...</h6>
                </Column>
                <Column size="12" other="text-center">
                    <br/><br/>
                    <h5>...pero se puede <a href="#" onClick={(evt) => {createPolicy(evt)}}>dar de alta</a></h5>
                </Column>
            </Row>
        );

    return (
        <Row>
            <Column size="3" other="text-center pink-header">
                <Insurancelogo />
                <label>PLAN</label>
                <span>{planId}</span>
            </Column>
            <Column size="9">
                {policyContent}
            </Column>
        </Row>
    );
};

PolicyInfo.propTypes = {
    planId: PropTypes.string,
    policy: PropTypes.object,
    createPolicy: PropTypes.func
};