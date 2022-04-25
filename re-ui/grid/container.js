import React from "react";
import "./grid.scss";
import clsx from "clsx";

const Container = ({children, background, style}) => {
    return (
        <div className={"container"} style={style}>
            {children}
        </div>
    );
};

export default Container;
