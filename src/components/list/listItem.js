import React from "react";
import clsx from "clsx";

const ListItem = ({children, className, style, alt}) => {
    return (
        <div className={clsx("list-item-container", className)} style={style}>
            {children}
        </div>
    );
};

export default ListItem;
