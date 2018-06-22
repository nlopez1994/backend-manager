import React from 'react';
import PropTypes from 'prop-types';

import {Row, Column} from './BootstrapLayout';
import {MaleAccountlogo, FemaleAccountlogo} from './Images';

export const AccountInfo = ({account}) => {
    const accountLogo = account && account.gender.startsWith('F') ?
        <FemaleAccountlogo /> : <MaleAccountlogo /> ;

    return (
        <Row>
            <Column size="3">{accountLogo}</Column>
            <Column size="9">
                <Row>
                    <Column size="6" other="pink-header">
                        <label>NOMBRE</label>
                        <span>{account? account.name :''}</span>
                    </Column>
                    <Column size="6" other="pink-header">
                        <label>APELLIDO</label>
                        <span>{account? account.surname :''}</span>
                    </Column>
                    <Column size="6" other="blue-header">
                        <label>TIPO DOCUMENTO</label>
                        <span>{account? account.documentType :''}</span>
                    </Column>
                    <Column size="6" other="blue-header">
                        <label>NRO DOCUMENTO</label>
                        <span>{account? account.document :''}</span>
                    </Column>
                    <Column size="6" other="pink-header">
                        <label>FECHA NACIMIENTO</label>
                        <span>{account? account.birthday :''}</span>
                    </Column>
                    <Column size="6" other="pink-header">
                        <label>CIUDAD</label>
                        <span>{account? account.address.city :''}</span>
                    </Column>
                    <Column size="12" other="blue-header">
                        <label>CORREO ELECTRÓNICO</label>
                        <span>{account? account.email :''}</span>
                    </Column>
                </Row>
            </Column>
        </Row>
    );
};

AccountInfo.propTypes = {
    account: PropTypes.object
};