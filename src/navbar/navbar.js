import "./navbar.scss";
import React from "react";
import clsx from "clsx";
import LayoutContainer from "../layout/layoutContainer";

const Navbar = ({children, className, style,}) => {
    return (
        <LayoutContainer className={clsx("navbar-container", className)} style={style}>
            {children}
        </LayoutContainer>
    );
};

export default Navbar;
