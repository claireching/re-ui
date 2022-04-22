import React from "react";
import "./grid.scss";

const Container = ({children, background}) => {
    return (
        <div className={"container"} style={{background}}>
            {children}
        </div>
    );
};

export default Container;
