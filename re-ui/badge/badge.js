import React from "react";
import "./badge.scss";

const Badge = ({className = "", onClick, style = {}, children}) => {
    return (
        <span className={"badge-container " + className} onClick={onClick} style={style}>
            {children}
        </span>
    );
};

export default Badge;
