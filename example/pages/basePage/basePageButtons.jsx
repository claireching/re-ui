import React from "react";

const BasePageButtons = ({className, style, alignCenter, children}) => {
    return (
        <div className={`base-page-buttons pull-right ${alignCenter ? 'align-center' : ''} ${className || ""}`} style={style}>
            {children}
        </div>
    );
};

export default BasePageButtons;
