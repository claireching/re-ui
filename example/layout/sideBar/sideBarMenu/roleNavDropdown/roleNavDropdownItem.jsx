import React from "react";

const RoleNavDropDownItem = (props) => {
    const {activeLink, name, link, onClick, permitted, icon, show} = props;

    // if (!permitted) return null;
    let className = '';
    if (window.location.pathname.indexOf(link) >= 0) {
        className = 'selected';
    }

    let style;
    if (show === "0") {
        style = {display: "none"};
    }

    return (
        <React.Fragment>
            <a onClick={() => onClick(link)}
               className={className}
               style={style}>
                <i className={`nav-icon ${icon}`} title={name}/> <span className="side-bar-nav-name">{name}</span>
            </a>
        </React.Fragment>
    );
};

export default RoleNavDropDownItem;
