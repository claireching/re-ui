import React, {forwardRef} from "react";
import "./button.scss";
import Ripple from "./ripple";
import clsx from 'clsx';
import {getBtnColorClassName} from "../utils";


const Button = forwardRef(({children, onClick, onMouseEnter, onMouseLeave, color = "primary", outline}, ref) => {
    const handleClick = (e) => {
        typeof onClick === "function" && onClick(e);
    };

    const handleMouseEnter = (e) => {
        typeof onMouseEnter === "function" && onMouseEnter(e);
    };

    const handleMouseLeave = (e) => {
        typeof onMouseLeave === "function" && onMouseLeave(e);
    };

    return (
        <button className={clsx("btn", getBtnColorClassName(color), outline && "outline")}
                ref={ref}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}>
            <Ripple color={color} duration={850}>
                <div className={"_children"}>{children}</div>
            </Ripple>
        </button>
    );
});

export default Button;
