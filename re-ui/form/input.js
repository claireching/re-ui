import React from "react";

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
               }) => {
    if (value === null) {
        value = "";
    }

    if (placeholder === undefined) {
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
        <div className={"form-container input-container"}>
            {label && <label htmlFor={id}>{label}</label>}
            {node}
        </div>
    );
};


export default Input;
