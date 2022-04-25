import React from "react";
import clsx from "clsx";

const Section = ({children, className, style, alt}) => {
    return (
        <div className={clsx(`section padding-vertical`, className)} style={style}>
            {children}
        </div>
    );
};

export default Section;
