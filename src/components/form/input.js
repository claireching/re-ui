import React from "react";
import clsx from "clsx";

export const constInputType = {
    text: "text",
    email: "email",
    number: "number",
    password: "password",
    textarea: "textarea",
};

const Input = ({
                   type = constInputType.text,
                   valid,
                   invalid,
                   size,
                   value,
                   onChange,
                   label,
                   id,
                   placeholder,
                   name,
                   disabled = false,
                   withQuantityControl,
               }) => {
    if (value === null) {
        value = "";
    }

    if (placeholder === undefined && !withQuantityControl) {
        placeholder = label || type;
    }

    if (!id) {
        id = `${type}${name}${label || ""}`;
    }

    const handleChange = (e) => {
        if (typeof onChange === "function") {
            const {value, name} = e.target || {};
            onChange(value, name);
        }
    };

    const node = <input type={type}
                        value={value}
                        name={name}
                        className={"_input"}
                        disabled={disabled}
                        onChange={handleChange}
                        placeholder={placeholder}
                        id={id}/>;

    return (
        <div className={clsx("form-container input-container", withQuantityControl && "with-quantity-control")}>
            {label && <label htmlFor={id}>{label}</label>}
            <div className={"input-body"}>
                {node}
                {
                    withQuantityControl &&
                    <div className={"input-quantity-control"}><span>+</span><span>-</span></div>
                }
            </div>
        </div>
    );
};


export default Input;
