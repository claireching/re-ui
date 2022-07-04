import React from "react";
import clsx from "clsx";

const Col = ({children, style, grow, lg, md, className}) => {
    return (
        <div className={clsx("col", md && `col-md-${md}`, lg && `col-lg-${lg}`, grow && `col-grow`, className)}
             style={style}>
            {children}
        </div>
    );
};

export default Col;
