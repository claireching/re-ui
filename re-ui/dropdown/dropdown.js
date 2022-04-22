import "./dropdown.scss";
import React, {useState, useEffect, useRef} from "react";
import Button from "../button/button";
import Floater from "../floater";
import {useOutsideClicker} from "../hooks";
import clsx from "clsx";

const Dropdown = (props) => {
    const {label, isVertical, color, title, isHover, onDropdownShowed} = props;
    const [show, setShow] = useState(false);
    const childrenRef = useRef(null);
    const buttonRef = useRef(null);

    const collapseDropdown = () => {
        setShow(false);
    };

    useOutsideClicker(childrenRef, collapseDropdown, buttonRef);

    const dropdownClick = (e) => {
        setShow(d => !d);
        typeof onDropdownShowed === "function" && onDropdownShowed();
    };

    return (
        <div className={clsx(`dropdown-container`, isHover && "ishover")}
             onMouseEnter={isHover && dropdownClick}
             onMouseLeave={isHover && collapseDropdown}>
            <Button ref={buttonRef} className={"dropdown-button"} onClick={dropdownClick} color={color}>
                {label}
            </Button>
            {show && <div ref={childrenRef} className={"_body"}>{props.children}</div>}
        </div>
    );
};

export default Dropdown;
