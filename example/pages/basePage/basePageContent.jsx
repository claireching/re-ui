import React from "react";

const BasePageContent = ({className = "", children, withPadding = true}) => {
    return (
        <div className={`base-page-content ${className}`} style={{padding: withPadding ? 20 : 0}}>
            {children}
        </div>
    );
};

export default BasePageContent;
