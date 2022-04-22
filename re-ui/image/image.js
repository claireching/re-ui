import React from "react";
import "./image.scss";

const Image = ({src, style, alt}) => {
    return (
        <div className={"image-container"}>
            <img src={src} className={"_img"} style={style} alt={alt}/>
        </div>
    );
};

export default Image;
