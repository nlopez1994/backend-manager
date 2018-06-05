import React from 'react';
import PropTypes from 'prop-types';

export const Row = ({id, children}) => (
    <div className="row" id={id? id :''} >
        {children}
    </div>
);

export const Column = ({size, other, children}) => (
    <div className={'col-sm-' + size + (other? ' '+other :'')}>
        {children}
    </div>
);

Row.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node.isRequired
};

Column.propTypes = {
    size: PropTypes.string.isRequired,
    other: PropTypes.string,
    children: PropTypes.node
};