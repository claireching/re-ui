import React, {useState, useLayoutEffect} from "react";
import PropTypes from "prop-types";
import "./ripple.scss";
import {getBgColorHighlightClassName} from "../utils";

const DURATION = 850;
const CLEAR_DURATION_MULTIPLY = 2;
const Ripple = props => {
    const {duration, color, children} = props;
    const [rippleArray, setRippleArray] = useState([]);

    useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
        setRippleArray([]);
    });

    const addRipple = event => {
        const rippleContainer = event.currentTarget.getBoundingClientRect();
        const size = rippleContainer.width > rippleContainer.height ? rippleContainer.width : rippleContainer.height;
        const x = event.pageX - rippleContainer.x - size / 2;
        const y = event.pageY - rippleContainer.y - size / 2;
        const newRipple = {x, y, size};
        setRippleArray([...rippleArray, newRipple]);
    };

    return (
        <div className={"_inner"} onMouseDown={addRipple}>
            {children}
            <div className={"ripple"}>
                {rippleArray.length > 0 &&
                rippleArray.map((ripple, index) => {
                    return (
                        <span key={"span" + index}
                              className={getBgColorHighlightClassName(color)}
                              style={{
                                  top: ripple.y,
                                  left: ripple.x,
                                  width: ripple.size,
                                  height: ripple.size,
                                  // backgroundColor: color,
                                  animationDuration: duration + "ms"
                              }}
                        />
                    );
                })}
            </div>
        </div>

    );
};

const useDebouncedRippleCleanUp = (rippleCount, duration, cleanUpFunction) => {
    useLayoutEffect(() => {
        let bounce = null;
        if (rippleCount > 0) {
            clearTimeout(bounce);

            bounce = setTimeout(() => {
                cleanUpFunction();
                clearTimeout(bounce);
            }, duration * CLEAR_DURATION_MULTIPLY);
        }

        return () => clearTimeout(bounce);
    }, [rippleCount, duration, cleanUpFunction]);
};

Ripple.propTypes = {
    duration: PropTypes.number,
    color: PropTypes.string,
    children: PropTypes.node
};

Ripple.defaultProps = {
    duration: DURATION,
    color: "primary"
};

export default Ripple;
