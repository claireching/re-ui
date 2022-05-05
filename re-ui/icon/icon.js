import React from "react";
import "./icon.scss";

const Icon = ({icon, label, className = "", onClick, title, style = {}, fontSize}) => {
    const styles = {fontSize, ...style};
    return (
        <span className={"icon-container " + className} onClick={onClick} style={styles}>
            <i className={`icon iconfont ${icon}`} title={title || label}/>
            {
                label ? <span className="icon-label">{label}</span> : null
            }
        </span>
    );
};

export default Icon;
