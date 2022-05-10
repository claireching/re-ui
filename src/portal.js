import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {canUseDOM} from './utils';

let node;
const Portal = ({children}) => {
    useEffect(() => {
        return () => {
            if (node) {
                document.body.removeChild(node);
            }
            node = null;
        };
    }, []);

    if (!canUseDOM) {
        return null;
    }

    if (!node) {
        node = document.createElement('div');
        document.body.appendChild(node);
    }
    return ReactDOM.createPortal(children, node);
};

Portal.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Portal;
