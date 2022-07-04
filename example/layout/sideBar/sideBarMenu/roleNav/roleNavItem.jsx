import React from "react";
import PropTypes from "prop-types";
import Icon from "../../../../../src/components/icon/icon";

const RoleNavItem = (props) => {
    const {activeLink, name, onClick, link, permitted, icon, isActive} = props || {};
    // if (!permitted) return null;

    return (
        <React.Fragment>
            <a className={isActive ? 'nav-active' : ''} onClick={() => onClick(link)}>
                <Icon icon={icon}/> <span className="side-bar-nav-name">{name}</span>
            </a>
        </React.Fragment>
    );
};

export default RoleNavItem;

RoleNavItem.propTypes = {
    name: PropTypes.string.isRequired,
    permitted: PropTypes.bool,
    activeLink: PropTypes.string,
    link: PropTypes.string.isRequired,
    onClick: PropTypes.func
};
