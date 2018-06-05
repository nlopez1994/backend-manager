import React, { Component } from 'react';
import {Row, Column} from '../presentational/BootstrapLayout';
import {Iunilogo} from '../presentational/Images';

class SearchUser extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Row id="contSearch">
                <Column size="12" other="text-center">
                    <Iunilogo />
                </Column>
                <Column size="3" />
                <Column size="6" other="text-center">
                    <form className="searchUser">
                        <h3>Identificar Usuario</h3>
                        <input type="email" placeholder="user@iunigo.com" required/>
                        <button type="submit" className="filled">buscar</button>
                    </form>                    
                </Column>
                <Column size="3" />
            </Row>
        );
    }
}

export default SearchUser;