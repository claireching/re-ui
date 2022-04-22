import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";
import "./buttonGroup.scss"

const ButtonGroup = (props) => {
    const {className, size, vertical, children} = props;
    const classNames = clsx(className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group');
    return (
        <div className={classNames}>
            {children}
        </div>
    );
};

ButtonGroup.propTypes = {
    'aria-label': PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.string,
    vertical: PropTypes.bool,
    children: PropTypes.node,
};

export default ButtonGroup;
