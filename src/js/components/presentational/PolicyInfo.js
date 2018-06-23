import React from 'react';
import PropTypes from 'prop-types';

import {Row, Column} from './BootstrapLayout';
import {Insurancelogo} from './Images';

export const PolicyInfo = ({policy}) => {
    const policyContent = policy && policy !== null ?
        <div>{'Ya tiene su póliza!'}</div> : 
        <div>{'Aún no tiene póliza'}</div> ;
    
    return (
        <Row>
            <Column size="3">
                <Insurancelogo />
            </Column>
            <Column size="9">
                {policyContent}
            </Column>
        </Row>
    );
};

PolicyInfo.propTypes = {
    policy: PropTypes.object
};