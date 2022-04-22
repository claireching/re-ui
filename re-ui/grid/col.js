import React from "react";
import clsx from "clsx";

const Col = ({children, style, lg}) => {
    const colSize = lg;
    return (
        <div className={clsx("col", colSize && `col-${colSize}`)} style={style}>
            {children}
        </div>
    );
};

export default Col;
