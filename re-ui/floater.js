import React, {useEffect, useState, useRef} from "react";
import ReactDom from "react-dom";
import {useOutsideClicker} from "./hooks";
import clsx from "clsx";

const Floater = ({x, y, className, style, outsideClick, children, position = "bottom", onMouseOver, onMouseLeave}) => {
    const [stickRight, setStickRight] = useState(false);
    const [init, setInit] = useState(false);
    const wrapperRef = useRef(null);
    const [posY, setPostY] = useState(y);

    if (typeof outsideClick === "function") {
        useOutsideClicker(wrapperRef, outsideClick);
    }

    useEffect(() => {
        const ele = wrapperRef?.current.getBoundingClientRect();
        const eleWidth = ele?.width || 0;
        const buff = 20;
        if (Number(x) + eleWidth > window.innerWidth + buff) {
            switch (position) {
                case "right":
                case "left":
                    setPostY(y + Number(ele?.height || 0));
            }
            setStickRight(true);
        }
        setInit(true);
    }, [wrapperRef.current]);

    let styling = {
        position: "absolute",
        left: x,
        top: posY,
        zIndex: 99999999,
        ...style,
    };

    if (stickRight) {
        styling.left = "auto";
        styling.right = 5;
    }

    const node = (
        <div ref={wrapperRef} style={styling}
             onMouseOver={onMouseOver}
             onMouseLeave={onMouseLeave}
             className={clsx("floater", !init && "hide", className)}>
            {children}
        </div>
    );

    return ReactDom.createPortal(node, document.body);
};

export default Floater;
