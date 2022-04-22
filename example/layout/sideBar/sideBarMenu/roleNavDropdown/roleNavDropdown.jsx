import React from "react";
import PropTypes from 'prop-types';


const RoleNavDropdown = (props) => {
    const {name, activeLink, path, onClick, children, icon} = props;

    const isNavActive = activeLink === path;

    return (
        <div className={`nav-by-role ${isNavActive ? "nav-active" : ""}`}>
            <div className="nav-title-toggle" onClick={() => onClick(path)}>
                    <span>
                    <i className={`nav-icon ${icon}`} title={name}/> <span className="side-bar-nav-name">{name}</span>
                    </span>
                <i className={`iconfont ${isNavActive ? "icon-caret-down" : "icon-caret-up"}`}/>
            </div>
        </div>
    );
};

export default RoleNavDropdown;

RoleNavDropdown.propTypes = {
    name: PropTypes.string.isRequired,
    activeLink: PropTypes.string,
    path: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired
};
