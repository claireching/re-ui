import React from "react";
import clsx from "clsx";

const Row = ({children, style, withMargin, verticalCenter}) => {
    return (
        <div className={clsx("row", withMargin && "margin-bottom", verticalCenter && "v-center")} style={style}>
            {children}
        </div>
    );
};

export default Row;
