import React from "react";
import clsx from "clsx";

const Row = ({children, style, withMargin}) => {
    return (
        <div className={clsx("row", withMargin && "margin-bottom")} style={style}>
            {children}
        </div>
    );
};

export default Row;
