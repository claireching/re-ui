import "./dropdown.scss";
import React, {useState, useEffect, useRef} from "react";
import Button from "../button/button";
import {useOutsideClicker} from "../hooks";
import clsx from "clsx";
import PropTypes from "prop-types";

// 默认align left，如检测到dropdown out of screen，自动align right
const Dropdown = (props) => {
    const {toggle, color, isHover, onToggle, isOpen, dropdownPosition} = props;
    const [isOverScreenX, setIsOverScreenX] = useState(false);
    const childrenRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        if (childrenRef?.current) {
            const ele = buttonRef?.current.getBoundingClientRect();
            const {width, x} = ele || {};

            const bodyEle = childrenRef?.current?.getBoundingClientRect();
            const buff = 0;
            if (x + width + bodyEle?.width >= window.innerWidth + buff) {
                setIsOverScreenX(true);
            }
        }
    }, [childrenRef?.current]);

    const collapseDropdown = () => {
        onToggle && onToggle(false);
    };

    useOutsideClicker(childrenRef, collapseDropdown, buttonRef);

    const dropdownClick = () => {
        onToggle && onToggle(!isOpen);
    };

    let toggleNode;
    if (typeof toggle === "string") {
        toggleNode = (
            <Button ref={buttonRef} className={"dropdown-button"} onClick={dropdownClick} color={color}>
                {toggle}
            </Button>
        );
    } else if (toggle) {
        toggleNode = (
            <div ref={buttonRef} onClick={dropdownClick} color={color}>
                {toggle}
            </div>
        );
    }

    return (
        <div
            className={clsx(`dropdown-container`, isHover && "ishover", isOpen && "_active", isOverScreenX && "stick-right", dropdownPosition)}
            onMouseEnter={isHover && dropdownClick}
            onMouseLeave={isHover && collapseDropdown}>
            {toggleNode}
            <div ref={childrenRef} className={clsx("_body")}>{props.children}</div>
        </div>
    );
};

Dropdown.propTypes = {
    toggle: PropTypes.any.isRequired,
    onToggle: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default Dropdown;
