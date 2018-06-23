import React from 'react';
import PropTypes from 'prop-types';

import {Row, Column} from './BootstrapLayout';
import {Carlogo} from './Images';

export const VehicleInfo = ({vehicle}) => {
    return (
        <Row>
            <Column size="3"><Carlogo/></Column>
            <Column size="9">
                <Row>
                    <Column size="6" other="pink-header">
                        <label>PATENTE</label>
                        <span>{vehicle? vehicle.licensePlate :''}</span>
                    </Column>
                    <Column size="6" other="pink-header">
                        <label>CHASIS</label>
                        <span>{vehicle? vehicle.vin :''}</span>
                    </Column>
                    <Column size="5" other="blue-header">
                        <label>MARCA</label>
                        <span>{vehicle? vehicle.brand :''}</span>
                    </Column>
                    <Column size="5" other="blue-header">
                        <label>MODELO</label>
                        <span>{vehicle? vehicle.model :''}</span>
                    </Column>
                    <Column size="2" other="blue-header">
                        <label>AÑO</label>
                        <span>{vehicle? vehicle.year :''}</span>
                    </Column>
                    <Column size="8" other="pink-header">
                        <label>VERSIÓN</label>
                        <span>{vehicle? vehicle.version :''}</span>
                    </Column>
                    <Column size="2" other="pink-header">
                        <label>0KM</label>
                        <span>{vehicle? (vehicle.is0km===true? 'SÍ':'NO') :''}</span>
                    </Column>
                    <Column size="2" other="pink-header">
                        <label>GNC</label>
                        <span>{vehicle? (vehicle.hasGNC===true? 'SÍ':'NO') :''}</span>
                    </Column>
                </Row>
            </Column>
        </Row>
    );
};

VehicleInfo.propTypes = {
    vehicle: PropTypes.object
};