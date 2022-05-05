import "./dropdown.scss";
import React, {useState, useEffect, useRef} from "react";
import Button from "../button/button";
import {useOutsideClicker} from "../hooks";
import clsx from "clsx";
import PropTypes from "prop-types";

// 默认align left，如检测到dropdown out of screen，自动align right
// can control dropdown by provide onToggle & isOpen
const Dropdown = (props) => {
    const {toggle, color, isHover, onToggle, isOpen, dropdownPosition} = props;
    const [isShow, setIsShow] = useState(false);
    const [isOverScreenX, setIsOverScreenX] = useState(false);
    const childrenRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        if (childrenRef?.current) {
            const ele = buttonRef?.current?.getBoundingClientRect();
            const {width, x} = ele || {};

            const bodyEle = childrenRef?.current?.getBoundingClientRect();
            const containerWidth = Math.max(width, bodyEle?.width);
            console.log(x, width, bodyEle?.width, containerWidth, window.innerWidth);
            const buff = 10;
            if (x + containerWidth >= window.innerWidth - buff) {
                setIsOverScreenX(true);
            }
        }
    }, [childrenRef?.current]);

    const collapseDropdown = () => {
        if (typeof onToggle === "function") {
            onToggle(false);
        } else {
            setIsShow(false);
        }
    };

    useOutsideClicker(childrenRef, collapseDropdown, buttonRef);

    const dropdownClick = () => {
        if (typeof onToggle === "function") {
            onToggle(!isOpen);
        } else {
            setIsShow(d => !d);
        }
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
            className={clsx(`dropdown-container`, isHover && "ishover", (isOpen || isShow) && "_active", isOverScreenX && "stick-right", dropdownPosition)}
            onMouseEnter={isHover && dropdownClick}
            onMouseLeave={isHover && collapseDropdown}>
            {toggleNode}
            <div ref={childrenRef} className={clsx("_body")}>{props.children}</div>
        </div>
    );
};

Dropdown.propTypes = {
    toggle: PropTypes.any.isRequired,
    onToggle: PropTypes.func,
    isOpen: PropTypes.bool,
};

export default Dropdown;
