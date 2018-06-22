import React from 'react';
import PropTypes from 'prop-types';

import {Row, Column} from './BootstrapLayout';
import {Carlogo} from './Images';

export const VehicleInfo = ({vehicle}) => {
    return (
        <Row>
            <Column size="3"><Carlogo/></Column>
            <Column size="9"></Column>
        </Row>
    );
};

VehicleInfo.propTypes = {
    vehicle: PropTypes.object
};