import React from "react";
import clsx from "clsx";

const List = ({children, className, style, alt}) => {
    return (
        <div className={clsx("list-container", className)} style={style}>
            {children}
        </div>
    );
};

export default List;
