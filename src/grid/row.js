import React from "react";
import clsx from "clsx";

const Row = ({children, className, style, withMargin, verticalCenter}) => {
    return (
        <div className={clsx("row", withMargin && "margin-bottom", verticalCenter && "v-center", className)}
             style={style}>
            {children}
        </div>
    );
};

export default Row;
